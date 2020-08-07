import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import iconBack from '../../assets/images/icons/back.png';
import imageLogo from '../../assets/images/logo.png';

import styles from './styles';

interface PageHeaderProps {
  title: string;
  callToAction?: ReactNode;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = ({
    title,
    children,
    callToAction
  }) => {
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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {callToAction}
      </View>
      {children}
    </View>
  );
}

export default PageHeader;
