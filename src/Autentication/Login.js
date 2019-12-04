/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Fab,
  Text,
  Item,
  Input
} from "native-base";
import CajehButton from "../Components/Lookers/CajehButton.js";
import Modal from "react-native-modal";
import { View, TouchableOpacity, FlatList } from "react-native";
import Publish from "../Components/Lookers/Publish.js";
import PasswordHide from "./PasswordHide.js";
import { material } from "react-native-typography";
import Axios from "axios";
import {Keyboard} from 'react-native'
import { Form, Field } from 'react-native-validate-form';
import InputField from './InputField';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      users: [],
      nickLogin: "",
      passwordLogin: "",
      newNick: "",
      email: "",
      password: "",
      number: ""
    };
  }
  doingPassword = (name, string) => {
    this.setState({
      [name]: string
    });
  };
  showModal = () => {
    this.setState({ isModalVisible: true });
  };
  hideModal = () => {
    this.setState({ isModalVisible: false });
  };
  async componentDidMount() {
    try {
      const usersDaAPI = await Axios.get('http://cajeh-api.herokuapp.com/users')
      let allUsers = usersDaAPI.data
      this.setState({ users: [...this.state.users,...allUsers] })
    } catch (error) {
      alert(error)
    }
  }
  signIn = () => {
    let k = 0;
    for(i=0;i<this.state.users.length;i++){
      if(this.state.nickLogin == this.state.users[i].name && this.state.passwordLogin == this.state.users[i].password){
        this.props.navigation.navigate("Lobby", {
          nick: this.state.users[i].name,
          email: this.state.users[i].email,
          number: this.state.users[i].phone_number,
        })
        k = 1
      }
      
    }
    if(k == 0){
    alert('Senha ou Nick inválido')
    }
  };
  submitForm() {
    let submitResults = this.myForm.validate();

    let errors = [];

    submitResults.forEach(item => {
      errors.push({ field: item.fieldName, error: item.error });
    });

    this.setState({ errors: errors });
  }
  submitSuccess() {
    console.log("Submit Success!");
    Axios.post('http://cajeh-api.herokuapp.com/users',{
      email: this.state.email,
      password: this.state.password,
      name: this.state.newNick,
      phone_number: this.state.number,
      collab: true,
      leader: true,
      password_confirmation: this.state.password
    }).then(function(response){
      console.log(response)
    }).catch(function(error){
      console.log(error)
    })
    this.setState({
      nickLogin:this.state.newNick
    })
    this.hideModal()
  }

  submitFailed() {
    console.log("Submit Faield!");
  }
  render() {
    const required = value => (value ? undefined : 'This is a required field.');
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value) ? 'Please provide a valid email address.' : undefined;
    return (
      <Container
        style={{ position: "relative", backgroundColor: "rgba(50,50,50,1)" }}
      >
        <Header
          noShadow
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0
          }}
        >
          <Body>
            <Title>
              <Text
                style={
                  (material.headline,
                  {
                    color: "rgba(0,255,255,1)",
                    fontWeight: "900"
                  })
                }
              >
                C
              </Text>
              <Text
                style={
                  (material.headline,
                  {
                    color: "rgba(255,255,255,1)",
                    fontWeight: "700"
                  })
                }
              >
                ajeh
              </Text>
            </Title>
          </Body>
        </Header>
        <Content style={{ top: 60, paddingTop: 30 }}>
          <Modal
            isVisible={this.state.isModalVisible}
            style={{ margin: 0 }}
            useNativeDriver={true}
            hideModalContentWhileAnimating={true}
            animationIn="fadeInUp"
            animationOut="fadeOutDown"
          >
            <View
              style={{ bottom: 10, backgroundColor: "rgba(200,200,200,1)" }}
              onPress={Keyboard.dismiss}
            >
              <Form
          ref={(ref) => this.myForm = ref}
          validate={true}
          submit={this.submitSuccess.bind(this)}
          failed={this.submitFailed.bind(this)}
          errors={this.state.errors}
        >
        <Field
            required
            component={InputField}
            returnKeyType = 'join'
            placeholder='Nick'
            keyt= {0}
            customStyle= {{color:'rgb:(0,0,0)'}}
            placeholderColor= "rgba(0,0,0,1)"
            icon='person'
            validations={[ required]}
            name="newNick"
            value={this.state.newNick}
            onChangeText={(val) => this.setState({ newNick: val })}
            customStyle={{ width: 100 }}
          />
          <View
                style={{
                  padding: 50,
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingRight: 35
                }}
              >
                <PasswordHide
                  colored="rgba(0,0,0,1)"
                  place="Password"
                  doingPassword={this.doingPassword}
                  stateChange="password"
                />
              </View>
          <Field
            required
            component={InputField}
            keyt={1}
            customStyle= {{color:'rgb:(0,0,0)'}}
            placeholderColor= "rgba(0,0,0,1)"
            placeholder='E-mail'
            validations={[ required, email ]}
            icon='mail'
            name="email"
            value={this.state.email}
            onChangeText={(val) => this.setState({ email: val })}
            customStyle={{ width: 100 }}
          />
          <Field
            required
            component={InputField}
            keyt={2}
            customStyle= {{color:'rgb:(0,0,0)'}}
            placeholderColor= "rgba(0,0,0,1)"
            placeholder='Number'
            icon='call'
            validations={[ required]}
            name="number"
            value={this.state.number}
            onChangeText={(val) => this.setState({ number: val })}
            customStyle={{ width: 100 }}
          />

        </Form>
            </View>
            <Button
              style={{
                backgroundColor: "rgba(100,200,100, 0.5)",
                height: 50,
                borderBottomWidth: 3,
                borderBottomColor: "rgba(255,255,255,0.6)"
              }}
              onPress={this.submitForm.bind(this)}
            >
              <Icon
                name="arrow-dropright-circle"
                style={{ color: "rgba(255,255,255,1)" }}
              />
              <Text style={{ color: "white", fontWeight: "700" }}>Confirm</Text>
              <Icon
                name="arrow-dropright-circle"
                style={{ color: "rgba(255,255,255,1)" }}
              />
            </Button>
            <Button
              style={{
                backgroundColor: "rgba(200,100,100, 0.5)",
                height: 50,
                borderBottomWidth: 3,
                top: 5,
                borderBottomColor: "rgba(255,255,255,0.6)"
              }}
              onPress={this.hideModal}
            >
              <Icon
                name="close-circle"
                style={{ color: "rgba(255,255,255,1)" }}
              />
              <Text style={{ color: "white", fontWeight: "700" }}>Close</Text>
              <Icon
                name="close-circle"
                style={{ color: "rgba(255,255,255,1)" }}
              />
            </Button>
          </Modal>
          <View style={{ paddingLeft: 50, paddingRight: 50 }}>
            <Item>
              <Icon active name="person" style={{ color: "rgb(0,255,255)" }} />
              <Input
                placeholder="Nick"
                style={{ color: "rgba(255,255,255,1)" }}
                keyboardAppearance="dark"
                placeholderTextColor="rgba(160,160,160,1)"
                onChangeText={nickLogin => this.setState({ nickLogin })}
                value={this.state.nickLogin}
              />
            </Item>
          </View>
          <View style={{ padding: 20 }}>
            <PasswordHide
              colored="rgba(0,255,255,1)"
              place="Password"
              doingPassword={this.doingPassword}
              stateChange="passwordLogin"
            />
          </View>
          <Button
            bordered
            full
            light
            style={{ backgroundColor: "rgba(0,180,200,0.02)", top: 20 }}
            onPress={this.signIn}
          >
            <Text>Sign In</Text>
          </Button>
          <Button
            bordered
            full
            light
            style={{ backgroundColor: "rgba(0,180,200,0.02)", top: 30 }}
            onPress={this.showModal}
          >
            <Text>Sign Up</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
