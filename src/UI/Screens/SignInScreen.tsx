import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useRef } from 'react';
// import GradientBackground from '../../components/GradientBackground';
import { AppImages } from '../../Utils/AppConstants';
import DividerComponent from '../Components/DividerComponent';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef<TextInput>(null);

  return (
    
      <ScrollView style={styles.container}>
        <View style={styles.LogoContainer}>
          <Image source={AppImages.AppLogo} style={styles.Logo} />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>Welcome Back to</Text>
          <Text style={styles.Text2}> {''}DO IT </Text>
        </View>
        <Text style={styles.Text3}>Have an other productive day !</Text>
        <View style={styles.formContainer}>
          <Image
            source={AppImages.Email}
            style={styles.ImageContainer}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Enter Your Email "
            placeholderTextColor={'#AEACAC'}
            value={email}
            onChangeText={setEmail}
            numberOfLines={1}
            multiline={false}
            onSubmitEditing={()=>passwordRef.current?.focus()}
            blurOnSubmit={false}
            style={[styles.inputForm, { color: email ? 'black' : '#AEACAC' }]}
          />
        </View>
        <View style={styles.formContainer}>
          <Image
            source={AppImages.Password}
            style={styles.ImageContainer}
            resizeMode="contain"
          />
          <TextInput
          ref={passwordRef}
            placeholder="Enter Your Password "
            placeholderTextColor={'#AEACAC'}
            value={password}
            onChangeText={setPassword}
            numberOfLines={1}
            multiline={false}
            returnKeyType='done'
            secureTextEntry
            style={[
              styles.inputForm,
              { color: password ? 'black' : '#AEACAC' },
            ]}
          />
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.forgotPass}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.Text3}>Sign In </Text>
        </TouchableOpacity>
        <View style={styles.TextContainer2}>
          <Text style={styles.Text3}>Don't Have an Account? </Text>
          <TouchableOpacity>
            <Text style={styles.signUpText}>Sign Up </Text>
          </TouchableOpacity>
        </View>
        <DividerComponent />
        <View style={styles.SignInWith}>
          <Text style={styles.SignInWithText}>Sign In With : </Text>
        </View>
        <View style={styles.IconsStyle}>
          <TouchableOpacity>
            <Image
              source={AppImages.Google}
              style={styles.googleIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity >
          <Image
          source={AppImages.Facebook}
          style={styles.googleIcon}
          resizeMode='contain'/>
        </TouchableOpacity>
        </View>
      </ScrollView>
    
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  LogoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    width: 85,
    height: 85,
  },
  TextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  Text: {
    fontSize: 25,
    fontWeight: 'normal',
    color: 'white',
  },
  Text2: {
    fontSize: 25,
    fontWeight: '900',
    color: 'white',
  },
  Text3: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'medium',
    justifyContent: 'flex-start',
  },
  formContainer: {
    height: 45,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    overflow:'hidden',
  },
  ImageContainer: {
    width: 25,
    height: 25,
    left: 10,
    top: 10,
  },
  inputForm: {
    fontSize: 17,
    left: 14,
    color: '#AEACAC',
  },
  forgotPass: {
    color: '#AEACAC',
    fontSize: 15,
    textAlign: 'right',
    top: 15,
  },
  btnContainer: {
    height: 49,
    backgroundColor: '#0EA5E9',
    borderRadius: 25,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextContainer2: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: '#0EA5E9',
    fontSize: 15,
  },
  SignInWith: {
    top:5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  SignInWithText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 35,
  },
  googleIcon: {
    height: 55,
    width: 55,
    top: 10,
  },
  IconsStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top:10,
    marginBottom:20,
  },
});
