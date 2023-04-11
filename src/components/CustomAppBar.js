import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Images from '../utils/Images';

const CustomAppBar = props => {
  return (
    <View style={styles.container}>
      <Image source={Images.BACK_BUTTON} style={styles.backButtonStyle} />
      <Text style={styles.titleTextStyle}>{props.title}</Text>
    </View>
  );
};

export default CustomAppBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '25%',
    backgroundColor: 'white',
    alignContent: 'center',
    flexDirection: 'row',
    padding: 16,
    elevation: 8,
  },
  backButtonStyle: {width: 24, height: 24},
  titleTextStyle: {
    color: 'black',
    fontSize: 18,
    marginStart: 8,
  },
});
