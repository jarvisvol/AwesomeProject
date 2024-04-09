import React, { useState } from 'react'
import LoginComponent from './modules/login/components/index';
import { NavigationContainer } from '@react-navigation/native';
import Home from './modules/screens/homescreen/Home';
import RegisterComponent from './modules/screens/RegisterScreen/index.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen  name="Home" component={Home} />
        <Tab.Screen name="Add Employee" component={LoginComponent} />
        <Tab.Screen name="Help" component={RegisterComponent} />
        <Tab.Screen name="Profile" component={LoginComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}