import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

export default function FavoriteTeachers() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys Favoritos"/>
    </View>
  );
}
