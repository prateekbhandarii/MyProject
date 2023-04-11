import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';

const CustomRadioButton = props => {
  return (
    <TouchableOpacity
      style={props.isSelected ? styles.containerSelected : styles.container}
      onPress={props.onButtonSelected}>
      <Image style={styles.imageStyle} source={props.imageSource} />
    </TouchableOpacity>
  );
};

export default CustomRadioButton;

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: Colors.PurpleColor,
    borderRadius: 45,
    margin: 16,
  },

  containerSelected: {
    width: 90,
    height: 90,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: Colors.PurpleColor,
    alignItems: 'center',
    borderColor: Colors.PurpleColor,
    borderRadius: 45,
    margin: 16,
  },

  imageStyle: {
    width: 80,
    height: 80,
  },
});
