import React, { Component } from "react";
import { View, TextInput,Button,Text,TouchableOpacity } from "react-native";
import { iOSUIKit } from "react-native-typography";

export default class CommentsView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          text1: this.props.text0,
          k1: this.props.verified0,
          userk1: this.props.user0,
          text2: this.props.text1,
          k2: this.props.verified1,
          userk2: this.props.user1,
          text3: this.props.text2,
          k3: this.props.verified2,
          userk3: this.props.user2,
          text4: this.props.text3,
          k4: this.props.verified3,
          userk4: this.props.user3,
          text5: this.props.text4,
          k5: this.props.verified4,
          userk5: this.props.user4,
          text6: this.props.text5,
          k6: this.props.verified5,
          userk6: this.props.user5,
          text7: this.props.text6,
          k7: this.props.verified6,
          userk7: this.props.user6,
        };
      }
      updateTeste = () =>{
        Axios.put(`http://cajeh-api.herokuapp.com/publications/${this.props.publishId}`,{
          comment: `${this.state.text1}<text>${this.state.k1}<verified>${this.state.userk1}<user><comment>${this.state.text2}<text>${this.state.k2}<verified>${this.state.userk2}<user><comment>${this.state.text3}<text>${this.state.k3}<verified>${this.state.userk3}<user><comment>${this.state.text4}<text>${this.state.k4}<verified>${this.state.userk4}<user><comment>${this.state.text5}<text>${this.state.k5}<verified>${this.state.userk5}<user><comment>${this.state.text6}<text>${this.state.k6}<verified>${this.state.userk6}<user><comment>${this.state.text7}<text>${this.state.k7}<verified>${this.state.userk7}<user><comment>`
        }).then(function(response){
          console.log(response)
        }).catch(function(error){
          console.log(error)
        })
      }
      canOrNot1 = () =>{
        if(this.state.k1 == 0 && this.state.text1 == ""){
            return(
                <View style={{height: 50}}>
<TextInput
        multiline={false}
        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          placeholder="comment"
          placeholderTextColor="rgba(0,0,0,1)"
          onChangeText={(text1) => this.setState({text1})}
          value={this.state.text1}
        />
        </View>
            )
        }
        if(this.state.k1 == 0 && this.state.text1 != ""){
            return(
                <View style={{height: 50}}>
<TextInput
        multiline={false}
        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          onChangeText={(text1) => this.setState({text1})}
          value={this.state.text1}
        />
        <TouchableOpacity style={{zIndex:2}} onPress={() => {this.setState({
            k1:1,
            userk1: this.props.user
        })}}
        >
                <Text
                  style={{
                      bottom:45,
                      fontSize:20,
                      left:250,
                    color: "rgba(255,255,50,1)",
                    fontWeight: "600"
                  }}
                >
                  ok
                </Text>
                </TouchableOpacity>
        </View>
            )
        }
        if(this.state.text1 != "" && this.state.k1 == 1){
            return(<View style={{height: 50}}>
            <TextInput
        multiline={false}
        editable = {false}

        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          value={this.state.text1}
        />
        <Text
                  style={{
                      bottom:35,
                      fontSize:10,
                      left:250,
                    color: "rgba(255,255,50,1)",
                    fontWeight: "600"
                  }}
                >
                  {this.state.userk1}
                </Text>
        </View>
        )
        }
        
      }
      canOrNot2 = () =>{
        if(this.state.k2 == 0 && this.state.text2 == ""){
            return(
                <View style={{height: 50}}>
<TextInput
        multiline={false}
        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          placeholder="comment"
          placeholderTextColor="rgba(0,0,0,1)"
          onChangeText={(text2) => this.setState({text2})}
          value={this.state.text2}
        />
        
        </View>
            )
        }
        if(this.state.k2 == 0 && this.state.text2 != ""){
            return(
                <View style={{height: 50}}>
<TextInput
        multiline={false}
        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          onChangeText={(text2) => this.setState({text2})}
          value={this.state.text2}
        />
        <TouchableOpacity style={{zIndex:2}} onPress={() => {this.setState({
            k2:1,
            userk2: this.props.user
        })}}
        >
                <Text
                  style={{
                      bottom:45,
                      fontSize:20,
                      left:250,
                    color: "rgba(255,255,50,1)",
                    fontWeight: "600"
                  }}
                >
                  ok
                </Text>
                </TouchableOpacity>
        </View>
            )
        }
        if(this.state.text2 != "" && this.state.k2 == 1){
            return(<View style={{height: 50}}>
            <TextInput
        multiline={false}
        editable = {false}

        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          value={this.state.text2}
        />
         <Text
                  style={{
                      bottom:35,
                      fontSize:10,
                      left:250,
                    color: "rgba(255,255,50,1)",
                    fontWeight: "600"
                  }}
                >
                  {this.state.userk2}
                </Text>
        </View>
        )
        }
        
      }
      canOrNot3 = () =>{
        if(this.state.k3 == 0 && this.state.text3 == ""){
            return(
                <View style={{height: 50}}>
<TextInput
        multiline={false}
        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          placeholder="comment"
          placeholderTextColor="rgba(0,0,0,1)"
          onChangeText={(text3) => this.setState({text3})}
          value={this.state.text3}
        />
        </View>
            )
        }
        if(this.state.k3 == 0 && this.state.text3 != ""){
            return(
                <View style={{height: 50}}>
<TextInput
        multiline={false}
        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          onChangeText={(text3) => this.setState({text3})}
          value={this.state.text3}
        />
        <TouchableOpacity style={{zIndex:2}} onPress={() => {this.setState({
            k3:1,
            userk3: this.props.user
        })}}
        >
                <Text
                  style={{
                      bottom:45,
                      fontSize:20,
                      left:250,
                    color: "rgba(255,255,50,1)",
                    fontWeight: "600"
                  }}
                >
                  ok
                </Text>
                </TouchableOpacity>
        </View>
            )
        }
        if(this.state.text3 != "" && this.state.k3 == 1){
            return(<View style={{height: 50}}>
            <TextInput
        multiline={false}
        editable = {false}

        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          value={this.state.text3}
        />
        <Text
                  style={{
                      bottom:35,
                      fontSize:10,
                      left:250,
                    color: "rgba(255,255,50,1)",
                    fontWeight: "600"
                  }}
                >
                  {this.state.userk3}
                </Text>
        </View>
        )
        }
       
      }
      canOrNot4 = () =>{
        if(this.state.k4 == 0 && this.state.text4 == ""){
            return(
                <View style={{height: 50}}>
<TextInput
        multiline={false}
        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          placeholder="comment"
          placeholderTextColor="rgba(0,0,0,1)"
          onChangeText={(text4) => this.setState({text4})}
          value={this.state.text4}
        />
        </View>
            )
        }
        if(this.state.k4 == 0 && this.state.text4 != ""){
            return(
                <View style={{height: 50}}>
<TextInput
        multiline={false}
        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          onChangeText={(text4) => this.setState({text4})}
          value={this.state.text4}
        />
        <TouchableOpacity style={{zIndex:2}} onPress={() => {this.setState({
            k4:1,
            userk4: this.props.user
        })}}
        >
                <Text
                  style={{
                      bottom:45,
                      fontSize:20,
                      left:250,
                    color: "rgba(255,255,50,1)",
                    fontWeight: "600"
                  }}
                >
                  ok
                </Text>
                </TouchableOpacity>
        </View>
            )
        }
        if(this.state.text4 != "" && this.state.k4 == 1){
            return(<View style={{height: 50}}>
            <TextInput
        multiline={false}
        editable = {false}

        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          value={this.state.text4}
        />
        <Text
                  style={{
                      bottom:35,
                      fontSize:10,
                      left:250,
                    color: "rgba(255,255,50,1)",
                    fontWeight: "600"
                  }}
                >
                  {this.state.userk4}
                </Text>
        </View>
        )
        }
        
      }
      canOrNot5 = () =>{
        if(this.state.k5 == 0 && this.state.text5 == ""){
            return(
                <View style={{height: 50}}>
<TextInput
        multiline={false}
        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          placeholder="comment"
          placeholderTextColor="rgba(0,0,0,1)"
          onChangeText={(text5) => this.setState({text5})}
          value={this.state.text5}
        />
        </View>
            )
        }
        if(this.state.k5 == 0 && this.state.text5 != ""){
            return(
                <View style={{height: 50}}>
<TextInput
        multiline={false}
        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          onChangeText={(text5) => this.setState({text5})}
          value={this.state.text5}
        />
        <TouchableOpacity style={{zIndex:2}} onPress={() => {this.setState({
            k5:1,
            userk5: this.props.user
        })}}
        >
                <Text
                  style={{
                      bottom:45,
                      fontSize:20,
                      left:250,
                    color: "rgba(255,255,50,1)",
                    fontWeight: "600"
                  }}
                >
                  ok
                </Text>
                </TouchableOpacity>
        </View>
            )
        }
        if(this.state.text5 != "" && this.state.k5 == 1){
            return(<View style={{height: 50}}>
            <TextInput
        multiline={false}
        editable = {false}

        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          value={this.state.text5}
        />
         <Text
                  style={{
                      bottom:35,
                      fontSize:10,
                      left:250,
                    color: "rgba(255,255,50,1)",
                    fontWeight: "600"
                  }}
                >
                  {this.state.userk5}
                </Text>
        </View>
        )
        }
        
      }
      canOrNot6 = () =>{
        if(this.state.k6 == 0 && this.state.text6 == ""){
            return(
                <View style={{height: 50}}>
<TextInput
        multiline={false}
        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          placeholder="comment"
          placeholderTextColor="rgba(0,0,0,1)"
          onChangeText={(text6) => this.setState({text6})}
          value={this.state.text6}
        />
        </View>
            )
        }
        if(this.state.k6 == 0 && this.state.text6 != ""){
            return(
                <View style={{height: 50}}>
<TextInput
        multiline={false}
        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          onChangeText={(text6) => this.setState({text6})}
          value={this.state.text6}
        />
        <TouchableOpacity style={{zIndex:2}} onPress={() => {this.setState({
            k6:1,
            userk6: this.props.user
        })}}
        >
                <Text
                  style={{
                      bottom:45,
                      fontSize:20,
                      left:250,
                    color: "rgba(255,255,50,1)",
                    fontWeight: "600"
                  }}
                >
                  ok
                </Text>
                </TouchableOpacity>
        </View>
            )
        }
        if(this.state.text6 != "" && this.state.k6 == 1){
            return(<View style={{height: 50}}>
            <TextInput
        multiline={false}
        editable = {false}

        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          value={this.state.text6}
        />
         <Text
                  style={{
                      bottom:35,
                      fontSize:10,
                      left:250,
                    color: "rgba(255,255,50,1)",
                    fontWeight: "600"
                  }}
                >
                  {this.state.userk6}
                </Text>
        </View>
        )
        }
      }
      canOrNot7 = () =>{
        if(this.state.k7 == 0 && this.state.text7 == ""){
            return(
                <View style={{height: 50}}>
<TextInput
        multiline={false}
        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          placeholder="comment"
          placeholderTextColor="rgba(0,0,0,1)"
          onChangeText={(text7) => this.setState({text7})}
          value={this.state.text7}
        />
        </View>
            )
        }
        if(this.state.k7 == 0 && this.state.text7 != ""){
            return(
                <View style={{height: 50}}>
<TextInput
        multiline={false}
        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          onChangeText={(text7) => this.setState({text7})}
          value={this.state.text7}
        />
        <TouchableOpacity style={{zIndex:2}} onPress={() => {this.setState({
            k7:1,
            userk7: this.props.user
        })}}
        >
                <Text
                  style={{
                      bottom:45,
                      fontSize:20,
                      left:250,
                    color: "rgba(255,255,50,1)",
                    fontWeight: "600"
                  }}
                >
                  ok
                </Text>
                </TouchableOpacity>
        </View>
            )
        }
        if(this.state.text7 != "" && this.state.k7 == 1){
            return(<View style={{height: 50}}>
            <TextInput
        multiline={false}
        editable = {false}

        returnKeyType = 'done'
          keyboardAppearance="dark"
          numberOfLines={1}
          contextMenuHidden = {true}
          style={[
            iOSUIKit.title4Emphasized,
            {
              color: "rgba(0,0,0,1)",
              fontWeight: "900",
              paddingBottom: 10,
              height: 50
            }
          ]}
          value={this.state.text7}
        />
         <Text
                  style={{
                      bottom:35,
                      fontSize:10,
                      left:250,
                    color: "rgba(255,255,50,1)",
                    fontWeight: "600"
                  }}
                >
                  {this.state.userk7}
                </Text>
        </View>
        )
        }
        
      }
  render () {

    return (
        <View
        style={[this.props.design, { backgroundColor: this.props.backColor }]}
      >
        {this.canOrNot1()}
        {this.canOrNot2()}
        {this.canOrNot3()}
        {this.canOrNot4()}
        {this.canOrNot5()}
        {this.canOrNot6()}
        {this.canOrNot7()}
      </View>
    )
  }
}