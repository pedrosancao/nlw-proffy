import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

export default function TeacherList() {
  const [filtersIsVisible, setFiltersIsVisible] = useState(true);

  function toggleFiltersIsVisible () {
    setFiltersIsVisible(!filtersIsVisible);
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys Disponíveis" callToAction={(
        <RectButton style={styles.buttonToggleFilters} onPress={toggleFiltersIsVisible}>
          <Feather name="filter" size={20} color="#FFF"/>
        </RectButton>
      )}>
        {filtersIsVisible && (
          <View style={styles.filtersContainer}>
            <View style={styles.inputGroupItem}>
              <Text style={styles.label}>Matéria</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual a mátéria?"
                placeholderTextColor="#C1BCCC"
              />
            </View>
            <View style={styles.inputGroup}>
              <View style={styles.inputGroupItem}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>
              <Text>{'    '}</Text>
              <View style={styles.inputGroupItem}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual horário?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>
            </View>
            <RectButton style={styles.buttonSubmitFilter}>
              <Text style={styles.buttonSubmitFilterText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView style={styles.teacherList}>
        <TeacherItem/>
      </ScrollView>
    </View>
  );
}
