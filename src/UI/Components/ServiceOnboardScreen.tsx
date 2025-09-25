import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
// import GradientBackground from '../../components/GradientBackground';
import AppIntroSlider from 'react-native-app-intro-slider';
import { IntroDataSlider, sliderType } from '../../Utils/AppConstants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation/typesNavigation';
import GradientBackground from '../../components/GradientBackground';

type OnBoardingNavigationProps = NativeStackNavigationProp<RootStackParamList>;

const ServiceOnboardScreen = () => {
  const navigation = useNavigation<OnBoardingNavigationProps>();
  const renderItem = ({ item }: { item: sliderType }) => {
    return (
      <GradientBackground>
        <View style={styles.slide}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title} </Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        </View>
      </GradientBackground>
    );
  };

  return (
    <AppIntroSlider
      data={IntroDataSlider}
      keyExtractor={item => item.id.toString()} // ✅ always string
      renderItem={renderItem}
      showPrevButton
      onDone={() => navigation.navigate('SignInScreen')}
      showNextButton
      showDoneButton
    />
  );
};

export default ServiceOnboardScreen;

const styles = StyleSheet.create({
  slide: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  simpleContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 250,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '400', // ✅ fixed (no "medium")
    lineHeight: 30,
    marginTop: 20,
    textAlign: 'center',
  },
});
