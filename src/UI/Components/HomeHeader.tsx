// components/HomeHeader.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AppImages } from '../../Utils/AppConstants';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.avatar}
          source={AppImages.HomeScreen.UserPic}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.nameText}>Ashley Williams</Text>
        <Text style={styles.mailText}>Ashley.broken@gmail.com</Text>
      </View>

      <TouchableOpacity>
        <Image
          style={styles.ringIcon}
          source={AppImages.HomeScreen.RingIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    height: 65,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    elevation: 4, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 22.5,
    borderWidth: 0.5,
  },
  textContainer: {
    flex: 1, // take remaining space
    marginLeft: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#000',
  },
  mailText: {
    fontSize: 13,
    color: '#888',
  },
  ringIcon: {
    height: 24,
    width: 24,
  },
});
