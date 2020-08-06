import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TeacherList from '../pages/TeacherList';
import FavoriteTeachers from '../pages/FavoriteTeachers';

const { Navigator, Screen } = createBottomTabNavigator();

export default function StudyNavigation() {
  return (
    <Navigator tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: Platform.OS === 'ios' ? 84 : 64,
      },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconStyle: {
        flexGrow: 0,
        width: 20,
        height: 20,
      },
      labelStyle: {
        marginLeft: 16,
        fontFamily: 'Archivo_700Bold',
        fontSize: 13,
      },
      activeBackgroundColor: '#EBEBF5',
      activeTintColor: '#32264D',
      inactiveBackgroundColor: '#FAFAFC',
      inactiveTintColor: '#C1BCCC'
    }}>
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-easel" size={size} color={color}/>
          )
        }}
      />
      <Screen
        name="FavoriteTeachers"
        component={FavoriteTeachers}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-heart" size={size} color={color}/>
          )
        }}
      />
    </Navigator>
  );
}
