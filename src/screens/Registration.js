import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import EditText from '../components/EditText';
import CustomButton from '../components/CustomButton';
import {createNewUser} from '../services/FirebaseServices';
import {isLoadingState} from '../utils/Recoil';
import {useRecoilState} from 'recoil';
import CustomRadioButton from '../components/CustomRadioButton';
import Images from '../utils/Images';
import {showToastMessage} from '../utils/Alerts';
import Colors from '../utils/Colors';

const Registration = props => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);

  useEffect(() => {
    setFullName('');
    setEmail('');
    setPassword('');
    setDesignation('');
    setGender('');
  }, []);

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
          placeholderText="Full name"
          onTextChange={text => {
            setFullName(text);
          }}
          Text={fullName}
        />
        <EditText
          placeholderText="Email"
          onTextChange={text => {
            setEmail(text);
          }}
          Text={email}
        />
        <EditText
          placeholderText="Create password"
          onTextChange={text => {
            setPassword(text);
          }}
          Text={password}
        />

        <EditText
          placeholderText="Designation"
          onTextChange={text => {
            setDesignation(text);
          }}
          Text={designation}
        />

        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-around',
            justifyContent: 'center',
          }}>
          <CustomRadioButton
            imageSource={Images.DEFAULT_MALE_PROFILE}
            isSelected={gender === 'M'}
            onButtonSelected={() => {
              setGender('M');
            }}
          />
          <CustomRadioButton
            imageSource={Images.DEFAULT_FEMALE_PROFILE}
            isSelected={gender === 'F'}
            onButtonSelected={() => {
              setGender('F');
            }}
          />
        </View>

        <View style={{marginTop: 10, justifyContent: 'flex-end'}}>
          <CustomButton
            buttonText="Save"
            onClickListener={() => {
              if (fullName && email && password && designation && gender) {
                setIsLoading(true);
                createNewUser(
                  {
                    id: randomNumber(),
                    name: fullName,
                    password: password,
                    designation: designation,
                    email: email,
                    gender: gender,
                  },
                  (callback = () => {
                    setIsLoading(false);
                    showToastMessage('Welcome ' + fullName);
                    props.navigation.navigate('Home');
                  }),
                );
              } else {
                showToastMessage('All fields are mandatory!');
              }
            }}
          />
        </View>
      </View>
    </>
  );
};

const randomNumber = () => {
  const num = Math.floor(1000 + Math.random() * 9999);
  return num;
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
});
