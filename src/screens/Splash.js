import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = props => {
  const checkIfUserLoggedIn = async () => {
    try {
      let value = await AsyncStorage.getItem('@UserCreds');
      return value != null;
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    setTimeout(async () => {
      const isAlreadyLoggedIn = await checkIfUserLoggedIn();
      if (isAlreadyLoggedIn) {
        props.navigation.navigate('TAB');
      } else {
        props.navigation.navigate('LOGIN');
      }
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.splashTextStyle}>Welcome APP</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  splashTextStyle: {
    color: 'black',
  },
});
