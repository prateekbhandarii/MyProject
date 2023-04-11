import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';

const CustomButton = props => {
  return (
    <Pressable
      style={styles.container}
      onPress={props.onClickListener}
      android_ripple={{color: 'white'}}>
      <View style={styles.buttonTextContainer}>
        <Text style={styles.buttonTextStyle}>{props.buttonText}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PurpleColor,
    //borderWidth: 2,
    borderRadius: 24,
    justifyContent: 'center',
  },
  buttonTextStyle: {fontSize: 16, color: 'white'},
  buttonTextContainer: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
