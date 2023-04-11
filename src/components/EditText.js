import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';

const EditText = props => {
  return (
    <View>
      <TextInput
        style={styles.inputTextStyle}
        value={props.text}
        defaultValue={props.text}
        placeholder={props.placeholderText}
        placeholderTextColor={Colors.PlaceholderColor}
        onChangeText={props.onTextChange}
      />

      <Text style={styles.helperTextStyle}>{props.helperText}</Text>
    </View>
  );
};

export default EditText;

const styles = StyleSheet.create({
  inputTextStyle: {
    borderColor: Colors.BlackColor,
    borderWidth: 1,
    height: 60,
    borderRadius: 16,
    padding: 8,
    fontSize: 20,
    marginTop: 16,
    color: 'black',
  },

  helperTextStyle: {
    color: Colors.ErrorColor,
    fontSize: 10,
    marginTop: 5,
    marginStart: 16,
  },
});
