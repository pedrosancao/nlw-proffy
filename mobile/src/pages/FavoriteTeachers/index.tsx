import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

export default function FavoriteTeachers() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys Favoritos"/>
      <ScrollView style={styles.teacherList}>
        <TeacherItem/>
      </ScrollView>
    </View>
  );
}
