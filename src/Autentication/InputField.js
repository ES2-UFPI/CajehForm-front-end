import React from 'react';
import { TextInput, Text, View } from 'react-native';
import {
    Icon,
    Item,
    Input,
  } from "native-base";

const InputField = ({
  name,           // field name - required
  customStyle,
  onChangeText,   // event
  value,          // field value
  disabled,
  placeholder,
  errors,         // this array prop is automatically passed down to this component from <Form />
  icon,
  placeholderColor,
  keyt
}) => {
  return (
    <View style={{ padding: 50, paddingTop: 20, paddingBottom: 20 }}>
    <Item >
    <Icon active name={icon} style={{ color: "rgb(0,0,0)" }} />
    <Input
        value={value && value}
        onChangeText={onChangeText ? (val) => onChangeText(val) : null}
        placeholder={placeholder ? placeholder : ""}
        disabled={disabled}
        placeholderTextColor={placeholderColor}
        style={customStyle ? customStyle : {}}
      />
    </Item>

      { errors && errors.length > 0 && errors.map((item, index) =>
          item.field === name && item.error ?
            <Text style={{ color: 'red' }} key={index}>
              {item.error}
            </Text>
          : <View key={index}/>
        )
      }
    </View>
  );
}

export default InputField;