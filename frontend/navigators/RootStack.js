// In App.js in a new project

import React from 'react';

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Welcom from '../screens/Welcome';
import Login from './../screens/Login';
import Main from './../screens/Main';
import Regular from './../screens/Regular';
import Profile from './../screens/Profile';
import History from './../screens/History';
import Statistics from './../screens/Statistics';


import {Colors} from './../components/styles';
const {backGreen, lighestGreen} = Colors;
const Stack = createNativeStackNavigator();

import {Octicons} from '@expo/vector-icons';

//import {Colors} from './../components/styles';
//const {brand, darkLight, primary, lightBlue, blue} = Colors;


const RootStack = () => {
    return (
        <NavigationContainer>
          
            <Stack.Navigator>

                <Stack.Screen 
                    name="welcom" 
                    component={Welcom}
                    options={{
                        headerShown: false, 
                    }}
                />
                <Stack.Screen 
                    name="login" 
                    component={Login}
                    options={{
                        headerShown: false, 
                    }}
                />
                 <Stack.Screen 
                    name="main" 
                    component={Main}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen 
                    name="regular" 
                    component={Regular}
                    options={{
                        title: '',
                        headerTransparent: true,
                        headerTintColor: lighestGreen,
                    }}
                />

                <Stack.Screen 
                    name="profile" 
                    component={Profile}
                    options={{
                        title: '',
                        headerTransparent: true,
                        headerTintColor: lighestGreen,
                    }}
                />
                <Stack.Screen 
                    name="history" 
                    component={History}
                    options={{
                        title: '',
                        headerTransparent: true,
                        headerTintColor: lighestGreen,
                    }}
                />
                <Stack.Screen 
                    name="statistics" 
                    component={Statistics}
                    options={{
                        title: '',
                        headerTransparent: true,
                        headerTintColor: lighestGreen,
                    }}
                />
            </Stack.Navigator>
           
        </NavigationContainer>
    );
};

export default RootStack;