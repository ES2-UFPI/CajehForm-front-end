/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import {
  Left,
  Right,
  Body,
  Text,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  View,
  Title
} from "native-base";
import CajehButton from "../Lookers/CajehButton.js";
import { TouchableOpacity } from "react-native";
import { material } from "react-native-typography";
import MaterialBuilder from "./MaterialBuilder.js";
import Modal from "react-native-modal";
import Axios from "axios";

export default class Layouts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      categorySelect: this.props.publishCategory,
      collaboratorImage: this.props.collaboratorImage,
      collaboratorName: this.props.collaboratorName,
      publishCategory: this.props.publishCategory,
      publishSaves: this.props.publishSaves,
      publishComments: this.props.publishComments,
      publishTimeAgo: this.props.publishTimeAgo,
      page0: {
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        text5: ""
      },
      page1: {
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        text5: ""
      },
      page2: {
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        text5: ""
      },
      page3: {
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        text5: ""
      }
    };
  }
  showModal = () => {
    this.setState({ isModalVisible: true });
  };
  hideModal = () => {
    this.setState({ isModalVisible: false });
  };
  doingPublish = (page, text, string) => {
    this.setState(prevState => ({
      [page]: {
        // object that we want to update
        ...prevState[page], // keep all other key-value pairs
        [text]: string // update the value of specific key
      }
    }));
  };
  sendMaterialApi = (pagesContent) => {
    Axios.post('http://cajeh-api.herokuapp.com/publications',{
      user_id: 1,
      title: this.props.collaboratorName,
      content: pagesContent
    }).then(function(response){
      console.log(response)
    }).catch(function(error){
      console.log(error)
    })
  }

  render() {
    const pagesContent =  `${this.state.page0.text1}<text>${this.state.page0.text2}<text>${this.state.page0.text3}<text>${this.state.page0.text4}<text>${this.state.page0.text5}<page>${this.state.page1.text1}<text>${this.state.page1.text2}<text>${this.state.page1.text3}<text>${this.state.page1.text4}<text>${this.state.page1.text5}<page>${this.state.page2.text1}<text>${this.state.page2.text2}<text>${this.state.page2.text3}<text>${this.state.page2.text4}<text>${this.state.page2.text5}<page>${this.state.page3.text1}<text>${this.state.page3.text2}<text>${this.state.page3.text3}<text>${this.state.page3.text4}<text>${this.state.page3.text5}`

    return (
      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.7)",
          paddingTop: 5,
          borderTopLeftRadius: 200,
          elevation: 10,
          margin: 0
        }}
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
              <Button
                  style={{
                    backgroundColor: "rgba(0,0,0,0.2)",
                    height: 50,
                    borderBottomWidth: 3,
                    borderBottomColor: "rgba(255,255,255,0.6)"
                  }}
                  onPress={() => {this.setState({
                    categorySelect: 'Front End'
                  }),
                  this.hideModal()}}
                >
                  <Icon
                    name="close-circle-outline"
                    style={{ color: "rgba(255,255,255,1)"}}
                  />
                  <Text style={{ color: "white", fontWeight: "700" }}>
                    Front End
                  </Text>
                  <Icon
                    name="close-circle-outline"
                    style={{ color: "rgba(255,255,255,1)"}}
                  />
                </Button>
                <Button
                  style={{
                    backgroundColor: "rgba(0,0,0,0.2)",
                    height: 50,
                    borderBottomWidth: 3,
                    borderBottomColor: "rgba(255,255,255,0.6)"
                  }}
                  onPress={() => {this.setState({
                    categorySelect: 'Back End'
                  }),
                  this.hideModal()}}
                >
                  <Icon
                    name="close-circle-outline"
                    style={{ color: "rgba(255,255,255,1)"}}
                  />
                  <Text style={{ color: "white", fontWeight: "700" }}>
                    Back End
                  </Text>
                  <Icon
                    name="close-circle-outline"
                    style={{ color: "rgba(255,255,255,1)"}}
                  />
                </Button>
                <Button
                  style={{
                    backgroundColor: "rgba(0,0,0,0.2)",
                    height: 50,
                    borderBottomWidth: 3,
                    borderBottomColor: "rgba(255,255,255,0.6)"
                  }}
                  onPress={() => {this.setState({
                    categorySelect: 'Full Stack'
                  }),
                  this.hideModal()}}
                >
                  <Icon
                    name="close-circle-outline"
                    style={{ color: "rgba(255,255,255,1)"}}
                  />
                  <Text style={{ color: "white", fontWeight: "700" }}>
                    Full Stack
                  </Text>
                  <Icon
                    name="close-circle-outline"
                    style={{ color: "rgba(255,255,255,1)"}}
                  />
                </Button>
                </View>
                <Button
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
                  <Text style={{ color: "white", fontWeight: "700" }}>
                    Close
                  </Text>
                  <Icon
                    name="close-circle-outline"
                    style={{ color: "rgba(255,255,255,1)"}}
                  />
                </Button>
              </View>
          </Modal>
        <CardItem
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            height: 50,
            margin: 0,
            borderWidth: 0
          }}
        >
          <Left>
          <TouchableOpacity>

            <Thumbnail
              source={{ uri: this.props.collaboratorImage }}
              style={{ height: 30, width: 30 }}
            />
                                      </TouchableOpacity>
      <TouchableOpacity onPress={this.showModal}>
            <Body>
              <Text
                style={{
                  color: "#121212",
                  fontWeight: "600"
                }}
              >
                {this.props.collaboratorName}
              </Text>
              <Text note style={{color:'rgba(100,0,80,1)'}}>{this.state.categorySelect} Category</Text>
            </Body>
            </TouchableOpacity>

          </Left>
          <Right>
            <TouchableOpacity onPress={() => this.sendMaterialApi(pagesContent)}>
            <Title>
            <Text
                style={
                  (material.headline,
                  {
                    color: "rgba(50,180,180,1)",
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
                    color: "rgba(100,100,100,1)",
                    fontWeight: "700"
                  })
                }
              >
                ublish
              </Text>
              </Title>
            </TouchableOpacity>
          </Right>
        </CardItem>
        {/* Mudar a Cor Base da Publicação, variar de 0.5 até 1 */}
        <MaterialBuilder connect={this.doingPublish} />
        <View
          style={{ backgroundColor: "rgba(255,255,255,0.5)", height: 10 }}
        />
        <CardItem
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            borderBottomRightRadius: 20
          }}
        >
          <Left>
            <Button transparent disabled>
              <Icon
                active
                name="bookmark"
                style={{ color: "rgba(80,0,200,1)" }}
              />
              <Text style={{ color: "rgba(80,0,200,1)", fontWeight: "700" }}>
                {this.props.publishSaves} Saves
              </Text>
            </Button>
          </Left>
          <Body>
            <Button transparent disabled>
              <Icon
                active
                name="chatbubbles"
                style={{ color: "rgba(0,140,140,1)"}}
              />
              <Text style={{ color: "rgba(0,0,0,1)", fontWeight: "600" }}>
              {this.props.publishComments} Comments
              </Text>
            </Button>
          </Body>
        </CardItem>
      </View>
    );
  }
}
