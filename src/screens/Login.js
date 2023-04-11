import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import EditText from '../components/EditText';
import CustomButton from '../components/CustomButton';
import {checkAndLogin} from '../services/FirebaseServices';
import {isLoadingState, loggedInUser} from '../utils/Recoil';
import {useRecoilState} from 'recoil';
import {showToastMessage} from '../utils/Alerts';
import Colors from '../utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [logInUser, setLogInUser] = useRecoilState(loggedInUser);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);

  useEffect(() => {
    setUsername('');
    setPassword('');
  }, []);

  const setLoggedInUserInAsyncStorage = async response => {
    //const loggedInUser = JSON.stringify(response);
    try {
      await AsyncStorage.setItem('@UserCreds', response.id.toString());
      console.log('user saved', response.id.toString());
    } catch (e) {
      console.log('save user in db error: ', e);
    }
  };

  return (
    <>
      {isLoading && (
        <ActivityIndicator
          size="large"
          color={Colors.PurpleColor}
          style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
        />
      )}
      <View style={styles.container}>
        <EditText
          placeholderText="username"
          text={username}
          onTextChange={text => {
            setUsername(text);
          }}
        />
        <EditText
          placeholderText="password"
          text={password}
          onTextChange={text => {
            setPassword(text);
          }}
        />
        <View style={{alignItems: 'center'}}>
          <CustomButton
            buttonText="Login"
            onClickListener={async () => {
              setIsLoading(true);
              if (username && password) {
                await checkAndLogin(
                  username,
                  password,
                  (callback = response => {
                    if (response) {
                      setLogInUser(response);
                      setLoggedInUserInAsyncStorage(response);
                      props.navigation.navigate('Tab');
                    } else {
                      showToastMessage('Invalid Credentails!');
                    }
                  }),
                );
              } else {
                showToastMessage('Fields cannot be empty!');
              }
              setIsLoading(false);
            }}
          />

          <View style={styles.signupContainer}>
            <Text style={styles.notMemberTextStyle}>Not a member?</Text>
            <CustomButton
              buttonText="Signup"
              onClickListener={() => {
                props.navigation.navigate('Registration');
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center',
  },
  notMemberTextStyle: {
    color: 'black',
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
