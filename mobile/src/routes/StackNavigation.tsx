import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import Study from '../pages/Study';
import Teach from '../pages/Teach';

const { Navigator, Screen } = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing}/>
        <Screen name="Teach" component={Teach}/>
        <Screen name="Study" component={Study}/>
      </Navigator>
    </NavigationContainer>
  );
}
