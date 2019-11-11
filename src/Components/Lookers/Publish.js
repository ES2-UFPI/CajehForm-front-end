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
  render() {
    const material = this.props.publishContent.split('<page>')
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
            <TouchableOpacity>
                <Text
                  style={{
                    color: "rgba(50,50,50,1)",
                    fontWeight: "600"
                  }}
                >
                  {this.props.collaboratorName}
                </Text>
                <Text note>{this.props.collaboratorNote}</Text>
                </TouchableOpacity>
            </Body>
          </Left>
          <Right>
            <Button transparent onPress={() => console.log("hi")} style={{left:20}}>
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
            <Button transparent>
              <Icon
                active
                name="bookmark"
                style={{ color: "rrgba(80,0,200,1)" }}
              />
              <Text style={{ color: "rgba(80,0,200,1)", fontWeight: "700" }}>
                {this.props.publishSaves} Saves
              </Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon
                active
                name="chatbubbles"
                style={{ color: "rgba(0,140,140,1)" }}
              />
              <Text style={{ color: "rgba(50,50,50,1)", fontWeight: "600" }}>
                {this.props.publishComments} Comments
              </Text>
            </Button>
          </Body>
          <Right>
            <Button transparent disabled>
              <Icon
                active
                name="alarm"
                style={{ color: "rgba(0,140,140,1)"}}
              />
              <Text
                style={{
                  color: "rgba(50,50,50,1)",
                  fontWeight: "600"
                }}
              >
                {this.props.publishTimeAgo}h ago
              </Text>
            </Button>
          </Right>
        </CardItem>
      </View>
    );
  }
}
