import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

export default function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys Disponíveis"/>
      <ScrollView style={styles.teacherList}>
        <TeacherItem/>
      </ScrollView>
    </View>
  );
}
