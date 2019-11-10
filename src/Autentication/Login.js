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
  Input,
} from "native-base";
import CajehButton from "../Components/Lookers/CajehButton.js";
import Modal from "react-native-modal";
import { View, TouchableOpacity,FlatList } from "react-native";
import Publish from "../Components/Lookers/Publish.js";
import PasswordHide from "./PasswordHide.js";
import { material } from "react-native-typography";
import Axios from 'axios'


export default class Lobby extends Component {

  constructor(props) {
    super(props);
    this.state = {
    isModalVisible: false,
    publications: []
    }
  }


  showModal = () => {
    this.setState({ isModalVisible: true });
  };
  hideModal = () => {
    this.setState({ isModalVisible: false });
  };
  _renderItem = ({ item }) => (
    <Publish  
              key={item.key}
              collaboratorImage="https://facebook.github.io/react-native/docs/assets/favicon.png"
              collaboratorName="Cajeh"
              collaboratorNote="@danielcajeh"
              publishSaves={20}
              publishComments={4}
              publishTimeAgo={11}
              publishContent = {item.content}
            />
  );

  async componentDidMount() {
    try {
      const publicationsDaAPI = await Axios.get('http://cajeh-api.herokuapp.com/publications')
      let allPublications = publicationsDaAPI.data
      this.setState({ publications: [...this.state.publications,...allPublications] })
    } catch (error) {
      alert(error)
    }
  }


  render() {
    return (
      <Container style={{ position: "relative", backgroundColor:'rgba(50,50,50,1)' }}>
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
        <Content style={{top:60, paddingTop:30}}>
        <Modal
            isVisible={this.state.isModalVisible}
            style={{ margin: 0 }}
            useNativeDriver={true}
            hideModalContentWhileAnimating = {true}
            animationIn= 'fadeInUp'
            animationOut= 'fadeOutDown'
          >
              <View style={{ bottom: 10, backgroundColor:'rgba(200,200,200,1)'}}>
              <View style={{padding:50, paddingTop:20, paddingBottom:20}}>
          <Item >
            <Icon active name='person' style={{color:'rgb(0,0,0)'}}/>
            <Input placeholder='Nick/User'
                      keyboardAppearance="dark"
             placeholderTextColor="rgba(0,0,0,1)"/>
          </Item>
        </View>
        <View style={{padding:50, paddingTop:20, paddingBottom:20, paddingRight:35}}>
        <PasswordHide colored='rgba(0,0,0,1)' place='Password'/>
        </View>
        <View style={{padding:50, paddingTop:20, paddingBottom:20, paddingRight:35}}>
        <PasswordHide colored='rgba(0,0,0,1)' place='ConfirmPassword'/>
        </View>
        <View style={{padding:50, paddingTop:20, paddingBottom:20}}>
          <Item >
            <Icon active name='mail' style={{color:'rgb(0,0,0)'}}/>
            <Input placeholder='E-mail'
                      keyboardAppearance="dark"
             placeholderTextColor="rgba(0,0,0,1)"/>
          </Item>
        </View>
        <View style={{padding:50, paddingTop:20, paddingBottom:20}}>
          <Item >
            <Icon active name='phone-portrait' style={{color:'rgb(0,0,0)'}}/>
            <Input placeholder='PhoneNumber'
                      keyboardAppearance="dark"
             placeholderTextColor="rgba(0,0,0,1)"/>
          </Item>
        </View>
                </View>
                <Button
                  style={{
                    backgroundColor: "rgba(0,0,0, 0.5)",
                    height: 50,
                    borderBottomWidth: 3,
                    borderBottomColor: "rgba(255,255,255,0.6)"
                  }}
                  onPress={this.hideModal}
                >
                  <Icon
                    name="close-circle"
                    style={{ color: "rgba(255,255,255,1)"}}
                  />
                  <Text style={{ color: "white", fontWeight: "700" }}>
                    Close
                  </Text>
                  <Icon
                    name="close-circle"
                    style={{ color: "rgba(255,255,255,1)"}}
                  />
                </Button>
          </Modal>
        <View style={{paddingLeft:50,paddingRight:50,}}>
          <Item >
            <Icon active name='person' style={{color:'rgb(0,255,255)'}}/>
            <Input placeholder='Nick' style={{color:'rgba(255,255,255,1)'}}
                      keyboardAppearance="dark"
             placeholderTextColor="rgba(160,160,160,1)"/>
          </Item>
        </View>
        <View style={{padding:20}}>
         <PasswordHide colored='rgba(0,255,255,1)' place='Password'/>
        </View>
        <Button bordered full light style={{backgroundColor:'rgba(0,180,200,0.5)'}}>
            <Text >Login</Text>
          </Button>
          <Button bordered full light style={{backgroundColor:'rgba(0,180,200,0.5)', top: 20}}
          onPress={this.showModal} >
            <Text>Cadaster</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
