import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Registration from './src/screens/Registration';
import {RecoilRoot} from 'recoil';
import Profile from './src/screens/Profile';
import TabBar from './src/components/TabBar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <RecoilRoot>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: true, headerBackVisible: false}}
            />
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{headerShown: true}}
            />
            <Stack.Screen
              name="Tab"
              component={TabBar}
              options={{
                headerShown: true,
                headerBackVisible: false,
                title: 'Home',
              }}
            />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </RecoilRoot>
  );
};

export default App;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {width: 112, height: 22},
  backButton: {
    width: 50,
    height: 50,
  },
});
