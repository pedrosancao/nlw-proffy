import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import iconStudy from '../../assets/images/icons/study.png';
import iconTeach from '../../assets/images/icons/teach.png';
import iconHeart from '../../assets/images/icons/heart.png';
import imageLanding from '../../assets/images/landing.png';

import styles from './styles';

export default function Landing() {
  return (
    <View style={styles.container}>
      <Image source={imageLanding} style={styles.banner}/>
      <Text style={styles.title}>
        Seja bem-vindo,{'\n'}
        <Text style={styles.titleBold}>
          O que deseja fazer?
        </Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Image source={iconStudy}/>
          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
          <Image source={iconTeach}/>
          <Text style={styles.buttonText}>Ensinar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalConnections}>
        Total de 285 conexões já realizadas {' '}
        <Image source={iconHeart}/>
      </Text>
    </View>
  );
}
