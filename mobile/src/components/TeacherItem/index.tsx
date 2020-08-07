import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import iconFavorite from '../../assets/images/icons/heart-outline.png';
import iconUnfavorite from '../../assets/images/icons/unfavorite.png';
import iconWhatsapp from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

export default function TeacherItem() {
  const [isFavorite, setIsFavorite] = useState(false);

  function addRemoveFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{
          uri: 'https://avatars1.githubusercontent.com/u/5047991?s=460&u=2a731397d3d4f9fe8ce4b1466493c10232f6ad04&v=4'
        }}/>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Pedro Sanção</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>
      <Text style={[styles.profileText, styles.title]}>
        Nam quod quia est consectetur vitae consequatur illo reiciendis libero distinctio.
      </Text>
      <Text style={[styles.profileText, styles.bio]}>
        Qui aspernatur at et corporis autem in et doloremque adipisci ut dolores necessitatibus est deserunt cupiditate sed rerum reiciendis qui sed quasi ducimus impedit doloribus qui quia blanditiis harum.
      </Text>
      <View style={styles.footer}>
        <Text style={styles.cost}>
          Preço/hora {'   '}
          <Text style={styles.costValue}>R$ 80,00</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton
            style={[styles.buttonFavorite, styles[isFavorite ? 'buttonFavoriteActive' : 'buttonFavoriteInactive']]}
            onPress={addRemoveFavorite}
          >
            <Image source={isFavorite ? iconUnfavorite : iconFavorite}/>
          </RectButton>
          <RectButton style={styles.buttonContact}>
            <Image source={iconWhatsapp}/>
            <Text style={styles.contactText}>Entar em contato</Text>
          </RectButton>
        </View>
      </View>
      {/*
      href={`https://wa.me/+55${props.classInfo.whatsapp}`}
      */}
    </View>
  );
}
