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

export default class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      nickLogin:'',
      passwordLogin:'',
      newNick:'',
      email:'',
      password:'',
      confirmPassword:'',
      number:''
    };
  }
  doingPassword = (name, string) => {
    this.setState({
      [name]: string
    })
  };
  showModal = () => {
    this.setState({ isModalVisible: true });
  };
  hideModal = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
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
            >
              <View style={{ padding: 50, paddingTop: 20, paddingBottom: 20 }}>
                <Item>
                  <Icon active name="person" style={{ color: "rgb(0,0,0)" }} />
                  <Input
                    placeholder="Nick/User"
                    keyboardAppearance="dark"
                    placeholderTextColor="rgba(0,0,0,1)"
                    onChangeText={(newNick) => this.setState({newNick})}
                    value={this.state.newNick}
                  />
                </Item>
              </View>
              <View
                style={{
                  padding: 50,
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingRight: 35
                }}
              >
                <PasswordHide colored="rgba(0,0,0,1)" place="Password" doingPassword={this.doingPassword} stateChange='password'/>
              </View>
              <View
                style={{
                  padding: 50,
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingRight: 35
                }}
              >
                <PasswordHide colored="rgba(0,0,0,1)" place="ConfirmPassword" doingPassword={this.doingPassword} stateChange='newPassword'/>
              </View>
              <View style={{ padding: 50, paddingTop: 20, paddingBottom: 20 }}>
                <Item>
                  <Icon active name="mail" style={{ color: "rgb(0,0,0)" }} />
                  <Input
                    textContentType="emailAddress"
                    placeholder="E-mail"
                    keyboardAppearance="dark"
                    placeholderTextColor="rgba(0,0,0,1)"
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                  />
                </Item>
              </View>
              <View style={{ padding: 50, paddingTop: 20, paddingBottom: 20 }}>
                <Item>
                  <Icon
                    active
                    name="phone-portrait"
                    style={{ color: "rgb(0,0,0)" }}
                  />
                  <Input
                    placeholder="PhoneNumber"
                    keyboardAppearance="dark"
                    placeholderTextColor="rgba(0,0,0,1)"
                    onChangeText={(number) => this.setState({number})}
                    value={this.state.number}
                  />
                </Item>
              </View>
            </View>
            <Button
              style={{
                backgroundColor: "rgba(100,200,100, 0.5)",
                height: 50,
                borderBottomWidth: 3,
                borderBottomColor: "rgba(255,255,255,0.6)"
              }}
              onPress={this.hideModal}
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
                top:20,
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
                onChangeText={(nickLogin) => this.setState({nickLogin})}
                    value={this.state.nickLogin}
              />
            </Item>
          </View>
          <View style={{ padding: 20 }}>
            <PasswordHide colored="rgba(0,255,255,1)" place="Password" doingPassword={this.doingPassword} stateChange='passwordLogin' />
          </View>
          <Button
            bordered
            full
            light
            style={{ backgroundColor: "rgba(0,180,200,0.5)" }}
          >
            <Text>Sign In</Text>
          </Button>
          <Button
            bordered
            full
            light
            style={{ backgroundColor: "rgba(0,180,200,0.5)", top: 20 }}
            onPress={this.showModal}
          >
            <Text>Sign Up</Text>
          </Button>
          <Button
            bordered
            full
            light
            style={{ backgroundColor: "rgba(0,180,200,0.5)", top: 20 }}
            onPress={() => this.props.navigation.navigate('Lobby')}
          >
            <Text>Lobby</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
