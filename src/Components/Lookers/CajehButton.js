/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
    Button as NewButton,
    Icon,
    Text as NewText,
  } from 'native-base';

export default class ModalButton extends Component {
  render() {
    return (
      <NewButton
      style={{backgroundColor: 'rgba(0,40,40, 1)', height:50, borderBottomWidth:3, borderBottomColor:'rgba(255,255,255,0.6)'}}
      onPress={() => {this.props.redirect(this.props.screen), this.props.hide()}}>
      <Icon name={this.props.icon} style={{color: 'rgba(255,255,255,1)'}} />
      <NewText style={{color: 'rgba(255,255,255,1)', fontWeight: '700'}}>{this.props.name}</NewText>
      <Icon name= {this.props.icon} style= {{color: 'rgba(255,255,255,1)'}} />
    </NewButton>
    );
  }
}
