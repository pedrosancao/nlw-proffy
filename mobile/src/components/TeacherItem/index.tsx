import React, { useState } from 'react';
import { Image, Linking, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import iconFavorite from '../../assets/images/icons/heart-outline.png';
import iconUnfavorite from '../../assets/images/icons/unfavorite.png';
import iconWhatsapp from '../../assets/images/icons/whatsapp.png';

import api from '../../services/api';

import styles from './styles';

interface TeacherItemProps {
  classInfo: {
    "user_id": Number;
    "name": string;
    "avatar": string;
    "title": string;
    "bio": string;
    "subject": string;
    "cost": Number;
    "whatsapp": string;
  };
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ classInfo }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  function addRemoveFavorite() {
    setIsFavorite(!isFavorite);
  }
  function storeConnection() {
    api.post('connections', { user_id: classInfo.user_id });
  }
  function openWhatsappContact() {
    Linking.openURL(`whatsapp://send?phone=+55${classInfo.whatsapp}`).catch(error => {
      console.log('Erro ao abrir Whatsapp');
    });
  }
  function handleContactButton() {
    storeConnection();
    openWhatsappContact();
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{
          uri: classInfo.avatar
        }}/>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{classInfo.name}</Text>
          <Text style={styles.subject}>{classInfo.subject}</Text>
        </View>
      </View>
      <Text style={[styles.profileText, styles.title]}>
      {classInfo.title}
      </Text>
      <Text style={[styles.profileText, styles.bio]}>
      {classInfo.bio}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.cost}>
          Preço/hora {'   '}
          <Text style={styles.costValue}>R$ {classInfo.cost}</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton
            style={[styles.buttonFavorite, styles[isFavorite ? 'buttonFavoriteActive' : 'buttonFavoriteInactive']]}
            onPress={addRemoveFavorite}
          >
            <Image source={isFavorite ? iconUnfavorite : iconFavorite}/>
          </RectButton>
          <RectButton style={styles.buttonContact} onPress={handleContactButton}>
            <Image source={iconWhatsapp}/>
            <Text style={styles.contactText}>Entar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
