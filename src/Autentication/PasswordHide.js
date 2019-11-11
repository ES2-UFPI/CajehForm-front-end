import React from 'react';
import {
    Icon,
    Item,
    Input,
    Button
  } from "native-base";
  import { View } from "react-native";
class PasswordHide extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            icEye: 'eye-off',
            isPassword: true,
            textPassword:'',

        }
    }

    getRef = (ref) => {
        if (this.props.getRef)
            this.props.getRef(ref)
    }

    changePwdType = () => {
        const { isPassword } = this.state;
        // set new state value
        this.setState({
            icEye: isPassword ? "eye" : "eye-off",
            isPassword: !isPassword
                });

    };

    render() {
        const { iconSize, iconColor, label, style } = this.props;
        const { icEye, isPassword } = this.state;

        return (
            <View style={style}>
        <Item >
        <Button transparent
                            onPress={this.changePwdType}
>
          <Icon active style={{color:this.props.colored,right:15}} 
              name={icEye}
          />
          </Button>
            <Input placeholder={this.props.place} style={{color:'rgba(255,255,255,1)',right:25}}
                      keyboardAppearance="dark"
             placeholderTextColor={this.props.colored}
             secureTextEntry={isPassword}
                    label={label} 
                    onChangeText={(textPassword) => this.setState({textPassword}, this.props.doingPassword(this.props.stateChange,textPassword))}
                    value={this.state.textPassword}
             />
          </Item>
          </View>
        );
    }
}


export default PasswordHide;