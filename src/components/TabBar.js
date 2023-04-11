import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Colors from '../utils/Colors';

const TabStack = createBottomTabNavigator();

const TabBar = () => {
  return (
    <TabStack.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveBackgroundColor: Colors.PlaceholderColor,
        tabBarStyle: {position: 'absolute'},
        tabBarBackground: () => {
          <View style={{backgroundColor: Colors.PurpleColor, opacity: 0.5}} />;
        },
        tabBarActiveTintColor: Colors.PurpleColor,
        headerShown: false,
      }}>
      <TabStack.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarLabelStyle: {color: Colors.PurpleColor},
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return (
              <Image
                style={{width: 24, height: 24}}
                source={require('../assets/ic_home_green.webp')}
              />
            );
          },
        }}
      />
      <TabStack.Screen
        name="ProfileTab"
        component={Profile}
        options={{
          tabBarLabelStyle: {color: Colors.PurpleColor},
          tabBarLabel: 'My Profile',
          tabBarIcon: () => {
            return (
              <Image
                style={{width: 24, height: 24}}
                source={require('../assets/ic_profile_red.webp')}
              />
            );
          },
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabBar;

const styles = StyleSheet.create({});
