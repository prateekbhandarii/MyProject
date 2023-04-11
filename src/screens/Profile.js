import {Image, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import Colors from '../utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../components/CustomButton';
import {getUserDetailsFromId} from '../services/FirebaseServices';
import {useRecoilState} from 'recoil';
import {isLoadingState} from '../utils/Recoil';

const Profile = props => {
  const route = useRoute();
  let user = route.params;

  const [currentUser, setCurrentUser] = useState(user);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);

  useEffect(() => {
    const getProfileDetails = async () => {
      setIsLoggedInUser(!user);
      if (!user) {
        setIsLoading(true);
        let userId = await AsyncStorage.getItem('@UserCreds');
        let userData = await getUserDetailsFromId(userId);
        setCurrentUser(userData);
        setIsLoading(false);
      }
    };
    getProfileDetails();
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
        <Image
          style={styles.imageContainerStyle}
          source={
            currentUser?.gender === 'M'
              ? require('../assets/ic_male.webp')
              : require('../assets/ic_female.webp')
          }
        />

        <Text style={styles.textStyle}>{currentUser?.id ?? ''}</Text>
        <Text style={styles.textStyle}>{currentUser?.name ?? ''}</Text>
        <Text style={styles.textStyle}>{currentUser?.email ?? ''}</Text>
        <Text style={styles.textStyle}>{currentUser?.designation ?? ''}</Text>

        {isLoggedInUser && (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <CustomButton
              buttonText="Logout"
              onClickListener={() => {
                AsyncStorage.removeItem('@UserCreds');
                props.navigation.navigate('Login');
              }}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },

  imageContainerStyle: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.PurpleColor,
  },

  textStyle: {color: 'black', marginTop: 16},
});
