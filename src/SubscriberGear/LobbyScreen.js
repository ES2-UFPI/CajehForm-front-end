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
  Button,
  Text as NewText
} from "native-base";
import { Text, View, TouchableOpacity,FlatList } from "react-native";
import Modal from "react-native-modal";
import Publish from "../Components/Lookers/Publish.js";
import CajehButton from "../Components/Lookers/CajehButton.js";
import CajehButton2 from "../Components/Lookers/CajehButton2.js";
import { material } from "react-native-typography";
import Axios from 'axios'

export default class Lobby extends Component {

  constructor(props) {
    super(props);
    this.state = {
    isModalVisible: false,
    isModalVisible2: false,
    catSelect: 'Full Stack',
    lobby: 0,
    publications: []
    }
  }


  showModal = () => {
    this.setState({ isModalVisible: true });
  };
  showModal2 = () => {
    this.setState({ isModalVisible2: true });
  };
  hideModal = () => {
    this.setState({ isModalVisible: false });
  };
  hideModal2 = () => {
    this.setState({ isModalVisible2: false });
  };
  changeCat = (category) => {
    this.setState({
      catSelect: category,
      lobby: 1
    })
        this.setState({
          publications: [...this.state.publications]
        })
      }


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
          <Left>
            <NewButton
              style={{
                backgroundColor: "rgba(0,0,0, 0)",
                height: 60,
                width: 80
              }}
              onPress={this.showModal}
            >
              <Icon name="construct" style={{ color: "rgba(255,255,255,1)" }} />
            </NewButton>
          </Left>
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
                L
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
                obby
              </Text>
            </Title>
          </Body>
          <Right>
            <NewButton
              style={{ backgroundColor: "rgba(0,0,0, 0)", height: 60 }}
              onPress={this.showModal2}
            >
              <Icon name="outlet" style={{ color: "rgba(255,255,255,1)" }} />
            </NewButton>
          </Right>
          <NewButton
              style={{ backgroundColor: "rgba(255,255,255, 0.5)", height: 45,position:'absolute',
              top:63 }}
              onPress={() => this.changeCat('Cajeh')}
            >
              <Text style={{fontSize:15}}>
                FrontEnd
              </Text>
            </NewButton>
            <NewButton
              style={{ backgroundColor: "rgba(255,255,255, 0.5)", height: 45,position:'absolute',
              top:63, right:45 }}
              onPress={() => this.changeCat('Publication')}
            >
              <Text style={{fontSize:15}}>
                BackEnd
              </Text>
            </NewButton>
        </Header>
        <Content
          style={{
            backgroundColor: "rgba(0,0,20,0.8)",
            borderWidth: 0,
            flex: 1,
            zIndex: -1
          }}
          disableKBDismissScroll={true}
          showsVerticalScrollIndicator={false}
        >
          <Modal
            isVisible={this.state.isModalVisible}
            style={{ margin: 0 }}
            useNativeDriver={true}
            animationOutTiming = {200}
            hideModalContentWhileAnimating = {true}
            animationIn= 'fadeInUp'
            animationOut= 'fadeOutDown'
          >
            <View style={{ flex: 1, flexDirection: "column" }}>
              <TouchableOpacity style={{ flex: 1 }} onPress={this.hideModal}>
                <View />
              </TouchableOpacity>
              <View style={{ bottom: 10 }}>
                  <CajehButton
                    icon="eye"
                    name="See my Publishments"
                    redirect={this.props.navigation.navigate}
                    screen="MyPublish"
                    hide={this.hideModal}
                  />
                  <CajehButton
                    icon="eye"
                    name="See my Materials"
                    redirect={this.props.navigation.navigate}
                    screen="MyMaterial"
                    hide={this.hideModal}
                  />
                  <CajehButton
                    icon="cloud-upload"
                    name="Upload a Publishment"
                    redirect={this.props.navigation.navigate}
                    screen="DoPublish"
                    hide={this.hideModal}
                  />
                  <CajehButton
                    icon="hammer"
                    name="Edit Material"
                    redirect={this.props.navigation.navigate}
                    screen="EditMaterial"
                    hide={this.hideModal}
                  />
                  <CajehButton2
                    icon="hammer"
                    name="Build Material"
                    nick = {this.props.navigation.getParam('nick')}
                    email = {this.props.navigation.getParam('email')}
                    number = {this.props.navigation.getParam('number')}
                    redirect={this.props.navigation.navigate}
                    screen="BuildMaterial"
                    hide={this.hideModal}
                  />
                </View>
                <NewButton
                  style={{
                    backgroundColor: "rgba(0,0,0,0.9)",
                    height: 50,
                    borderBottomWidth: 3,
                    borderBottomColor: "rgba(255,255,255,0.6)"
                  }}
                  onPress={this.hideModal}
                >
                  <Icon
                    name="close-circle-outline"
                    style={{ color: "rgba(255,255,255,1)"}}
                  />
                  <NewText style={{ color: "white", fontWeight: "700" }}>
                    Close
                  </NewText>
                  <Icon
                    name="close-circle-outline"
                    style={{ color: "rgba(255,255,255,1)"}}
                  />
                </NewButton>
              </View>
          </Modal>
          <Modal
            isVisible={this.state.isModalVisible2}
            style={{ margin: 0 }}
            useNativeDriver={true}
            animationOutTiming = {200}
            hideModalContentWhileAnimating = {true}
            animationIn= 'fadeInUp'
            animationOut= 'fadeOutDown'
          >
            <View style={{ flex: 1, flexDirection: "column" }}>
              <TouchableOpacity style={{ flex: 1 }} onPress={this.hideModal2}>
                <View />
              </TouchableOpacity>
              <View style={{ bottom: 10 }}>
                  <CajehButton2
                    icon="bookmark"
                    name="Saves"
                    nick = {this.props.navigation.getParam('nick')}
                    redirect={this.props.navigation.navigate}
                    screen="MySaves"
                    hide={this.hideModal2}
                  />
                  <CajehButton2
                    icon="person"
                    name="Perfil"
                    nick = {this.props.navigation.getParam('nick')}
                    email = {this.props.navigation.getParam('email')}
                    number = {this.props.navigation.getParam('number')}
                    redirect={this.props.navigation.navigate}
                    screen="MyPerfil"
                    hide={this.hideModal2}
                  />
                </View>
                <NewButton
                  style={{
                    backgroundColor: "rgba(0,0,0,0.9)",
                    height: 50,
                    borderBottomWidth: 3,
                    borderBottomColor: "rgba(255,255,255,0.6)"
                  }}
                  onPress={this.hideModal2}
                >
                  <Icon
                    name="close-circle-outline"
                    style={{ color: "rgba(255,255,255,1)"}}
                  />
                  <NewText style={{ color: "white", fontWeight: "700" }}>
                    Close
                  </NewText>
                  <Icon
                    name="close-circle-outline"
                    style={{ color: "rgba(255,255,255,1)"}}
                  />
                </NewButton>
              </View>
          </Modal>
          {/* Mudar a Cor do Lobby da Rede, variar e vender para o usuário escolher */}
          <View style={{ top: 60 }}>
          <FlatList
        data={this.state.publications}
        extraData={this.state.publications}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={ ({ item }) => 
 {  
   if(this.state.lobby == 0){
    return(
        <Publish  
              key={item.key}
              collaboratorImage="https://facebook.github.io/react-native/docs/assets/favicon.png"
              redirect = {this.props.navigation.navigate}
              publishId = {item.id}
              theUser = {this.props.navigation.getParam('nick')}
              collaboratorName={item.title}
              publishCategory="Category"
              publishSaves={0}
              publishComments= {0}
              publishTimeAgo={0}
              publishContent = {item.content}
            />
            )
   }else{
    if (item.title == this.state.catSelect ) {
      return(
        <Publish  
              key={item.key}
              collaboratorImage="https://facebook.github.io/react-native/docs/assets/favicon.png"
              redirect = {this.props.navigation.navigate}
              publishId = {item.id}
              theUser = {this.props.navigation.getParam('nick')}
              collaboratorName={item.title}
              publishCategory="Category"
              publishSaves={0}
              publishComments= {0}
              publishTimeAgo={0}
              publishContent = {item.content}
            />
            )
          }
   }

  }
}
      />
            <View style={{ height: 60 }} />
          </View>
        </Content>
        <Fab
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            height: 70
          }}
          position="bottomRight"
          onPress={() => {this.setState({
            lobby:0,
            publications: [...this.state.publications]
          })}}
        >
          <Icon name="planet" style={{ color: "rgba(255,255,255,1)" }} />
        </Fab>
      </Container>
    );
  }
}
