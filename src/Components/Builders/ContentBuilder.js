import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { iOSUIKit } from "react-native-typography";

export default class ContentBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "" 
    };
  }
  render() {

    return (
      <View
        style={[this.props.design, { backgroundColor: this.props.backColor }]}
      >
        <TextInput
          keyboardAppearance="dark"
          style={[
            iOSUIKit.largeTitleEmphasized,
            {
              color: "rgba(0,190,170,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          placeholder="Title mark"
          placeholderTextColor="rgba(0,190,170,1)"
          onChangeText={(text1) => this.setState({text1},
          this.props.connect(`page${this.props.id}`,'text1',text1))}
          value={this.state.text1}
        />
        <TextInput
          multiline={true}
          keyboardAppearance="dark"
          numberOfLines={3}
          style={[
            iOSUIKit.title3Emphasized,
            {
              color: "rgb(255, 255, 255)",
              fontWeight: "700",
              paddingBottom: 10,
              height: 80
            }
          ]}
          placeholder="h2 Mark"
          placeholderTextColor="rgb(255, 255, 255)"
          onChangeText={(text2) => this.setState({text2},
          this.props.connect(`page${this.props.id}`,'text2',text2))}
          value={this.state.text2}
        />
        <TextInput
          multiline={true}
          keyboardAppearance="dark"
          numberOfLines={3}
          style={[
            iOSUIKit.title3Emphasized,
            {
              color: "rgb(255, 255, 255)",
              fontWeight: "700",
              paddingBottom: 10,
              height: 80
            }
          ]}
          placeholder="h2 Mark"
          placeholderTextColor="rgb(255, 255, 255)"
          onChangeText={(text3) => this.setState({text3},
          this.props.connect(`page${this.props.id}`,'text3',text3))}
          value={this.state.text3}
        />
        <TextInput
          multiline={true}
          keyboardAppearance="dark"
          numberOfLines={3}
          style={[
            iOSUIKit.title3Emphasized,
            {
              color: "rgb(255, 255, 255)",
              fontWeight: "700",
              paddingBottom: 10,
              height: 80
            }
          ]}
          placeholder="h2 Mark"
          placeholderTextColor="rgb(255, 255, 255)"
          onChangeText={(text4) => this.setState({text4},
          this.props.connect(`page${this.props.id}`,'text4',text4))}
          value={this.state.text4}
        />
        <TextInput
          multiline={true}
          keyboardAppearance="dark"
          numberOfLines={3}
          style={[
            iOSUIKit.title3Emphasized,
            {
              color: "rgb(255, 255, 255)",
              fontWeight: "700",
              paddingBottom: 10,
              height: 80
            }
          ]}
          placeholder="h2 Mark"
          placeholderTextColor="rgb(255, 255, 255)"
          onChangeText={(text5) => this.setState({text5},
          this.props.connect(`page${this.props.id}`,'text5',text5))}
          value={this.state.text5}
        />
      </View>
    );
  }
}
