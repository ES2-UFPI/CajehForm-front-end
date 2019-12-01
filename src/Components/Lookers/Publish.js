/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import {
  Left,
  Right,
  Body,
  Text,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  View
} from "native-base";
import { TouchableOpacity } from "react-native";
import Material from "./Material.js";


export default class Publish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      k: 0,
      l: 0,
    };
  }
  updateTeste = (saves) =>{
    alert(saves + `${this.props.theUser}<person>`)
  }
  updateSaves = (saves) =>{
    Axios.put(`http://cajeh-api.herokuapp.com/publications/${this.props.publishId}`,{
      saves: saves + `${this.props.theUser}<person>`
    }).then(function(response){
      console.log(response)
    }).catch(function(error){
      console.log(error)
    })
  }
  buttonSave = (contSaves, saves) =>{
    var k = 0
    for(i = 0; i< contSaves.length;i++){
      if(this.props.theUser == contSaves[i]){
         k = 1
      }
    }
    if(k == 0 && this.state.l == 0){
      return(
      <Button transparent onPress = {() => {this.setState({
        l:1
      }), this.updateTeste(saves)}} >
              <Icon
                active
                name="bookmark"
                style={{ color: "rgba(80,0,200,1)" }}
              />
              <Text style={{ color: "rgba(80,0,200,1)", fontWeight: "700" }}>
                {contSaves.length - 1} Saves
              </Text>
            </Button>
      )
    }
    if(k == 1 && this.state.l == 0){
      return(
      <Button transparent>
              <Icon
                active
                name="bookmark"
                style={{ color: "rgba(200,0,0,1)" }}
              />
              <Text style={{ color: "rgba(80,0,200,1)", fontWeight: "700" }}>
                {contSaves.length - 1} Saves
              </Text>
            </Button>
      )
    }
    if(k == 0 && this.state.l == 1){
      return(
      <Button transparent>
              <Icon
                active
                name="bookmark"
                style={{ color: "rgba(200,0,0,1)" }}
              />
              <Text style={{ color: "rgba(80,0,200,1)", fontWeight: "700" }}>
                {contSaves.length} Saves
              </Text>
            </Button>
      )
    }
  }
  render() {
    const material = this.props.publishContent.split('<page>')
    const all = 'opa<text>1<verified>Joao<user><comment>opa<text>1<verified>Cajeh<user><comment>opa<text>1<verified>Kajeh<user><comment>opa<text>1<verified>Zeduardo<user><comment>opa<text>1<verified><user><comment>opa<text>1<verified>Cajeh<user><comment><text>0<verified><user><comment>'
    const comment = all.split('<comment>')
    const text0 = comment[0].split('<text>')
    const verified0 = text0[1].split('<verified>')
    const user0 = verified0[1].split('<user>')
    const text1 = comment[1].split('<text>')
    const verified1 = text1[1].split('<verified>')
    const user1 = verified1[1].split('<user>')
    const text2 = comment[2].split('<text>')
    const verified2 = text2[1].split('<verified>')
    const user2 = verified2[1].split('<user>')
    const text3 = comment[3].split('<text>')
    const verified3 = text3[1].split('<verified>')
    const user3 = verified3[1].split('<user>')
    const text4 = comment[4].split('<text>')
    const verified4 = text4[1].split('<verified>')
    const user4 = verified4[1].split('<user>')
    const text5 = comment[5].split('<text>')
    const verified5 = text5[1].split('<verified>')
    const user5 = verified5[1].split('<user>')
    const text6 = comment[6].split('<text>')
    const verified6 = text6[1].split('<verified>')
    const user6 = verified6[1].split('<user>')
    const saves ='Cajeh<person>Joao<person>José<person>Lucas<person>' 
    const contSaves = saves.split('<person>')
    const k = 0;
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
            <Body>
            <TouchableOpacity onPress={() => {this.props.redirect("OtherPerfil",  {
          nick: this.props.collaboratorName,
      })}}>
                <Text
                  style={{
                    color: "rgba(50,50,50,1)",
                    fontWeight: "600"
                  }}
                >
                  {this.props.collaboratorName}
                </Text>
                <Text note style={{color:'rgba(100,0,80,1)'}}>{this.props.publishCategory}</Text>
                </TouchableOpacity>
            </Body>
          </Left>
          <Right>
            <Button transparent>
              <Text
                style={{
                  color: "rgba(0,0,0,1)",
                  fontWeight: "900",
                  fontSize: 20
                }}
              >
                ...
              </Text>
            </Button>
          </Right>
        </CardItem>
        {/* Mudar a Cor Base da Publicação, variar de 0.5 até 1 */}
        <Material page0 = {material[0]}
          page1= {material[1]}
          page2= {material[2]}
          page3= {material[3]}
          aux = {this.state.k}
          user = {this.props.theUser}
          publishId = {this.props.publishId}
          text0 = {text0[0]}
          text1 = {text1[0]}
          text2 = {text2[0]}
          text3 = {text3[0]}
          text4 = {text4[0]}
          text5 = {text5[0]}
          text6 = {text6[0]}
          verified0 = {verified0[0]}
          verified1 = {verified1[0]}
          verified2 = {verified2[0]}
          verified3 = {verified3[0]}
          verified4 = {verified4[0]}
          verified5 = {verified5[0]}
          verified6 = {verified6[0]}
          user0 = {user0[0]}
          user1 = {user1[0]}
          user2 = {user2[0]}
          user3 = {user3[0]}
          user4 = {user4[0]}
          user5 = {user5[0]}
          user6 = {user6[0]}
        />
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
            {this.buttonSave(contSaves, saves)}
          </Left>
          <Body>
            <Button transparent onPress={() => this.setState({
              k:!this.state.k
            })}>
              <Icon
                active
                name="chatbubbles"
                style={{ color: "rgba(0,140,140,1)" }}
              />
              <Text style={{ color: "rgba(50,50,50,1)", fontWeight: "600" }}>
                 Comments
              </Text>
            </Button>
          </Body>
        </CardItem>
      </View>
    );
  }
}
