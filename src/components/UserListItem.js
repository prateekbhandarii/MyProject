import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';

const UserListItem = ({currentUser, onItemClick}) => {
  return (
    <View style={styles.container}>
      <Pressable style={{padding: 8}} onPress={onItemClick}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.profileImageStyle}
            source={
              currentUser.gender === 'M'
                ? require('../assets/ic_male.webp')
                : require('../assets/ic_female.webp')
            }
          />
          <View style={styles.textContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.nameText}>{currentUser.name}</Text>
              <Text style={styles.designationText}>
                {currentUser.designation}
              </Text>
            </View>
            <Text style={styles.emailText}>{currentUser.email}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default UserListItem;

const styles = StyleSheet.create({
  container: {
    borderColor: 'white',
    backgroundColor: 'white',
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 8,
  },

  textContainer: {
    flexDirection: 'column',
  },

  profileImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 24,
    borderWidth: 1,
    marginEnd: 8,
    borderColor: Colors.PurpleColor,
  },

  nameText: {
    fontSize: 18,
    color: Colors.BlackColor,
  },

  emailText: {
    fontSize: 14,
    color: Colors.BlackColor,
  },

  designationText: {
    fontSize: 14,
    color: Colors.PurpleColor,
    marginStart: 16,
  },
});
