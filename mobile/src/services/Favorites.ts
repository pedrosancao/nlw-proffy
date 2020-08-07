import AsyncStorage from '@react-native-community/async-storage';

import { ClassInfo } from '../components/TeacherItem';

class Favorites {
  async getFavorites(): Promise<ClassInfo[]> {
    const response = await AsyncStorage.getItem('favorites');
    return response ? JSON.parse(response as string) : [];
  }

  setFavorites(favorites: ClassInfo[]) {
    AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

export default new Favorites();
