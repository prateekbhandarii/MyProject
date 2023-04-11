const {Platform, ToastAndroid, AlertIOS} = require('react-native');

const showToastMessage = string => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(string, ToastAndroid.SHORT);
  } else {
    AlertIOS.alert(string);
  }
};

export {showToastMessage};
