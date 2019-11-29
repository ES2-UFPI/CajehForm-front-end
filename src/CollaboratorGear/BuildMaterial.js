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
  Subtitle
} from "native-base";
import { Text, View, TouchableOpacity } from "react-native";
import Builder from "../Components/Builders/Builder.js";
import Modal from "react-native-modal";
import CajehButton from "../Components/Lookers/CajehButton.js";
import { material } from "react-native-typography";

export default class Lobby extends Component {
  state = {
    isModalVisible: false
  };

  showModal = () => {
    this.setState({ isModalVisible: true });
  };
  hideModal = () => {
    this.setState({ isModalVisible: false });
  };
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
              style={{ backgroundColor: "rgba(0,0,0, 0)", height: 60, width:80 }}
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
                    color: "rgba(0,255,255,1)",
                    fontWeight: "900"
                  })
                }
              >
                M
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
                aterial
              </Text>
            </Title>
            <Subtitle>build</Subtitle>
          </Body>
          <Right>
            <NewButton
              style={{ backgroundColor: "rgba(0,0,0, 0)", height: 60}}
              onPress={() => this.props.navigation.navigate("MySaves")}
            >
              <Icon name="bookmark" style={{ color: "rgba(255,255,255,1)" }} />
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
          {/* Mudar a Cor do Lobby da Rede, variar e vender para o usuário escolher */}
          <View style={{ top: 60 }}>
          <Builder 
              collaboratorImage="https://facebook.github.io/react-native/docs/assets/favicon.png"
              collaboratorName={this.props.navigation.getParam('nick')}
              publishCategory="Select your"
              publishSaves={0}
              publishComments={0}
              publishTimeAgo={0}
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
