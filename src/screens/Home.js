import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import UserListItem from '../components/UserListItem';
import Colors from '../utils/Colors';
import {isLoadingState, listOfUsers} from '../utils/Recoil';
import {useRecoilState} from 'recoil';
import {getAllByCollection} from '../services/FirebaseServices';

const Home = props => {
  const [usersList, setUsersList] = useRecoilState(listOfUsers);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);

  //Everytime this component gets mounted, useEffect() will trigger.
  useEffect(() => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    console.log('width: ' + width, 'height: ' + height);
    getUsersList();
  }, []);

  const getUsersList = async () => {
    setIsLoading(true);
    setUsersList(await getAllByCollection('Users'));
    setIsLoading(false);
  };

  const showUserDetails = user => {
    props.navigation.navigate('Profile', user);
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
        <FlatList
          style={styles.listStyle}
          data={usersList}
          renderItem={({item}) => {
            return (
              <View style={{flex: 1}}>
                <UserListItem
                  currentUser={item}
                  onItemClick={() => showUserDetails(item)}
                />
              </View>
            );
          }}
          keyExtractor={user => user.id}
        />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  listStyle: {
    flex: 1,
  },
});
