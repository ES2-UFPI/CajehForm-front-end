import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'
import {iOSUIKit} from 'react-native-typography';

export default class Page extends Component {
  render () {
    return (
          <View style={[this.props.design,{backgroundColor: this.props.backColor}]}>
          <Text numberOfLines={3} style={[iOSUIKit.largeTitleEmphasized, {color: "rgba(0,190,170,1)", fontWeight:'900', paddingBottom: 10, height:50}]}>
          {this.props.text1}</Text>
          <Text numberOfLines={3} style={[iOSUIKit.title3Emphasized, {color: 'rgb(255, 255, 255)', fontWeight:'700', paddingBottom:5, height:85}]}>
          {this.props.text2}</Text>
          <Text numberOfLines={3} style={[iOSUIKit.title3Emphasized, {color: 'rgb(255, 255, 255)', fontWeight:'700', paddingBottom:5, height:85}]}>
          {this.props.text3}</Text>
          <Text numberOfLines={3} style={[iOSUIKit.title3Emphasized, {color: 'rgb(255, 255, 255)', fontWeight:'700', paddingBottom:5, height:85}]}>
          {this.props.text4}</Text>
          <Text numberOfLines={3} style={[iOSUIKit.title3Emphasized, {color: 'rgb(255, 255, 255)', fontWeight:'700', paddingBottom:5, height:85}]}>
          {this.props.text5}</Text>
          </View>
    )
  }
}