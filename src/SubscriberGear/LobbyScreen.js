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
  Text as NewText
} from "native-base";
import { Text, View, TouchableOpacity,FlatList } from "react-native";
import Modal from "react-native-modal";
import Publish from "../Components/Lookers/Publish.js";
import CajehButton from "../Components/Lookers/CajehButton.js";
import { material } from "react-native-typography";
import Axios from 'axios'

export default class Lobby extends Component {

  constructor(props) {
    super(props);
    this.state = {
    isModalVisible: false,
    isModalVisible2: false,
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
        </Header>
        <Content
          style={{
            backgroundColor: "rgba(0,0,20,0.8)",
            borderWidth: 0,
            flex: 1,
            zIndex: -1
          }}
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
                  <CajehButton
                    icon="hammer"
                    name="Build Material"
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
                  
                  <CajehButton
                    icon="bookmark"
                    name="Saves"
                    redirect={this.props.navigation.navigate}
                    screen="MySaves"
                    hide={this.hideModal2}
                  />
                  <CajehButton
                    icon="person"
                    name="Perfil"
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
        renderItem={this._renderItem}
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
          onPress={() => this.props.navigation.navigate("Lobby")}
        >
          <Icon name="planet" style={{ color: "rgba(255,255,255,1)" }} />
        </Fab>
      </Container>
    );
  }
}
