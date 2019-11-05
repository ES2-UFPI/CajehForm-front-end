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
  Icon,
  Fab,
  Text as NewText,
  Item,
  Input
} from "native-base";
import { Text, View, TouchableOpacity,FlatList } from "react-native";
import Modal from "react-native-modal";
import Publish from "../Components/Lookers/Publish.js";
import CajehButton from "../Components/Lookers/CajehButton.js";
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
        <View style={{paddingLeft:50,paddingRight:50,}}>
          <Item >
            <Icon active name='person' style={{color:'rgb(0,255,255)'}}/>
            <Input placeholder='Nick' style={{color:'rgba(255,255,255,1)'}}
                      keyboardAppearance="dark"
             placeholderTextColor="rgba(160,160,160,1)"/>
          </Item>
        </View>
        <View style={{padding:20}}>
         <PasswordHide/>
        </View>
        </Content>
      </Container>
    );
  }
}
