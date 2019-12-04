/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button as NewButton,
  Left,
  Right,
  Body,
  Fab,
  Text as NewText,
  Thumbnail,
  Item,
  Icon,
  Input
} from "native-base";
import { Text, View, TouchableOpacity,FlatList } from "react-native";
import Modal from "react-native-modal";
import Publish from "../Components/Lookers/Publish.js";
import CajehButton from "../Components/Lookers/CajehButton.js";
import { material } from "react-native-typography";
import Axios from 'axios'

export default class OtherPerfil extends Component {

  constructor(props) {
    super(props);
    this.state = {
        users : [],
      imagePerfil:"https://facebook.github.io/react-native/docs/assets/favicon.png",
      newNick:this.props.navigation.getParam('nick'),
      email:"",
      number:""
    };
  }
  async componentDidMount() {
    try {
      const usersDaAPI = await Axios.get('http://cajeh-api.herokuapp.com/users')
      let allUsers = usersDaAPI.data
      this.setState({ users: [...this.state.users,...allUsers] })
    } catch (error) {
      alert(error)
    }
    for(i=0;i<this.state.users.length;i++){
        if(this.state.newNick == this.state.users[i].name){
          this.setState({
            newNick: this.state.users[i].name,
            email: this.state.users[i].email,
            number: this.state.users[i].phone_number,
          })
        }
        
      }
  }


  render() {
    return (
      <Container style={{ position: "relative" }}>
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
                    color: "rgba(0,220,200,1)",
                    fontWeight: "900"
                  })
                }
              >
                P
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
                erfil
              </Text>
            </Title>
          </Body>
        </Header>
        <Content
          style={{
            backgroundColor: "rgba(100,100,130,0.8)",
            borderWidth: 0,
            flex: 1,
            zIndex: -1
          }}
          showsVerticalScrollIndicator={false}
        >
          
          {/* Mudar a Cor do Lobby da Rede, variar e vender para o usuário escolher */}
          <View style={{ top: 60 }}>
          <TouchableOpacity style={{padding:30, paddingLeft:145}}>
              <Thumbnail large
                source={{ uri: this.state.imagePerfil}}
              />
           </TouchableOpacity>
           <View style={{ padding: 50, paddingTop: 20, paddingBottom: 20 }}>
                <Item>
                  <Icon active name="person" style={{ color: "rgb(0,0,0)" }} />
                  <Input
                  disabled
                    keyboardAppearance="dark"
                    placeholderTextColor="rgba(0,0,0,1)"
                    value={this.state.newNick}
                  />
                </Item>
              </View>
              <View style={{ padding: 50, paddingTop: 20, paddingBottom: 20 }}>
                <Item>
                  <Icon active name="mail" style={{ color: "rgb(0,0,0)" }} />
                  <Input
                  disabled
                    textContentType="emailAddress"
                    keyboardAppearance="dark"
                    placeholderTextColor="rgba(0,0,0,1)"
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
                  disabled
                    keyboardAppearance="dark"
                    placeholderTextColor="rgba(0,0,0,1)"
                    value={this.state.number}
                  />
                </Item>
              </View>
            <View style={{ height: 60 }} />
          </View>
        </Content>
        <Fab
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            height: 70
          }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate("Lobby")}
        >
          <Icon name="planet" style={{ color: "rgba(255,255,255,1)" }} />
        </Fab>
      </Container>
    );
  }
}
