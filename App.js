import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import HomeDrawerNav from './navigation/HomeDrawerNav';

export default function App() {
  return (
    <NavigationContainer>
      <HomeDrawerNav />
    </NavigationContainer>
  );
}

