import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import imageTeachBackground from '../../assets/images/teach-background.png';

import styles from './styles';

export default function Teach() {
  const { goBack } = useNavigation();

  function navigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageTeachBackground}
        resizeMode="contain"
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.text}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>
      <RectButton onPress={navigateBack} style={styles.buttonConfirm}>
        <Text style={styles.textConfirm}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}
