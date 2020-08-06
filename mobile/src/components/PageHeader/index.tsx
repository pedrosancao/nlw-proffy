import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import iconBack from '../../assets/images/icons/back.png';
import imageLogo from '../../assets/images/logo.png';

import styles from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  function navigateBack() {
    navigate('Landing');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={navigateBack}>
          <Image source={iconBack} resizeMode="contain"/>
        </BorderlessButton>
        <Image source={imageLogo} resizeMode="contain"/>
      </View>
  <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default PageHeader;
