import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { ClassInfo } from '../../components/TeacherItem';

import Favorites from '../../services/Favorites';

import styles from './styles';

export default function FavoriteTeachers() {
  const [emptyMessage, setEmptyMessage] = useState('Carregando favoritos.');
  const [favorites, setFavorites] = useState<ClassInfo[]>([]);

  useFocusEffect(useCallback(() => {
    loadFavorites();
  }, []));

  async function loadFavorites() {
    const favorites = await Favorites.getFavorites();
    console.log(favorites);
    setFavorites(favorites);
    if (favorites.length === 0) {
      setEmptyMessage('Nenhum proffy favorito.');
    }
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys Favoritos"/>
      <ScrollView style={styles.teacherList}>
        {favorites.map((classItem, index) => {
          return (
            <TeacherItem key={index} classInfo={classItem} favorite onUnfavorite={loadFavorites}/>
          );
        })}
        {favorites.length === 0 && (
          <View style={styles.emptyResult}>
            <Text style={styles.emptyResultText}>
              {emptyMessage}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
