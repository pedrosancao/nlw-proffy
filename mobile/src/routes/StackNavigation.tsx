import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import Teach from '../pages/Teach';
import StudyNavigation from './StudyNavigation';

const { Navigator, Screen } = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing}/>
        <Screen name="Teach" component={Teach}/>
        <Screen name="Study" component={StudyNavigation}/>
      </Navigator>
    </NavigationContainer>
  );
}
