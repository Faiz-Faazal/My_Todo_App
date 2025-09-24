import {  Text, StyleSheet, Image } from 'react-native';
import React, {useEffect} from 'react';
// import GradientBackground from '../../components/GradientBackground';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppImages } from '../../Utils/AppConstants';
import { RootStackParamList } from '../../Navigation/typesNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type Props = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;

const SplashScreen:React.FC<Props> = ({navigation}) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('ServiceOnboardScreen'); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    
      <SafeAreaView style={styles.container}>
        <Image
          source={AppImages.AppLogo}
          style={styles.logo}
        />
        
        <Text style={styles.logoText}>DO IT APP</Text>
      </SafeAreaView>
    
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    bottom:45,
    maxHeight: 100,
    maxWidth: 100,
  },
  logoText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
});
