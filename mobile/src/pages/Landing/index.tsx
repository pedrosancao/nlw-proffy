import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import iconStudy from '../../assets/images/icons/study.png';
import iconTeach from '../../assets/images/icons/teach.png';
import iconHeart from '../../assets/images/icons/heart.png';
import imageLanding from '../../assets/images/landing.png';

import styles from './styles';

export default function Landing() {
  const { navigate } = useNavigation();

  function navigateToStudyRoute() {
    navigate('Study');
  }
  function navigateToTeachRoute() {
    navigate('Teach');
  }

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
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={navigateToStudyRoute}
        >
          <Image source={iconStudy}/>
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={navigateToTeachRoute}
        >
          <Image source={iconTeach}/>
          <Text style={styles.buttonText}>Ensinar</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}>
        Total de 285 conexões já realizadas {' '}
        <Image source={iconHeart}/>
      </Text>
    </View>
  );
}
