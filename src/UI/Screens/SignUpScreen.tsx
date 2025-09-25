import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
// import GradientBackground from '../../components/GradientBackground'
import { AppImages } from '../../Utils/AppConstants'
import DividerComponent from '../Components/DividerComponent'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../Navigation/typesNavigation'
import GradientBackground from '../../components/GradientBackground'

type SignInNavigationProp = NativeStackNavigationProp<RootStackParamList>;


const SignUpScreen = () => {
  const navigation=useNavigation<SignInNavigationProp>();
    const [name, setName]=useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPass, setConfirmPass]=useState('');
       const emailRef=useRef<TextInput>(null);
      const passwordRef = useRef<TextInput>(null);
      const confirmPassRef=useRef<TextInput>(null);

     
  return (
          <GradientBackground>

        
         <ScrollView style={styles.container}>
           <View style={styles.LogoContainer}>
             <Image source={AppImages.AppLogo} style={styles.Logo} />
           </View>
           <View style={styles.TextContainer}>
             <Text style={styles.Text}>Welcome to</Text>
             <Text style={styles.Text2}> {''}DO IT </Text>
           </View>
           <Text style={styles.Text3}>Create an account and join us now !</Text>
           <TouchableOpacity
           activeOpacity={1}
            style={styles.formContainer}>
             <Image
               source={AppImages.UserIcon}
               style={styles.ImageContainer}
               resizeMode="contain"
             />
             <TextInput
               placeholder="Enter Your Full Name "
               placeholderTextColor={'#AEACAC'}
               value={name}
               onChangeText={setName}
               numberOfLines={1}
               multiline={false}
               onSubmitEditing={()=>emailRef.current?.focus()}
               style={[styles.inputForm]}
             />
           </TouchableOpacity>
          
           <View style={styles.formContainer}>
             <Image
               source={AppImages.Email}
               style={styles.ImageContainer}
               resizeMode="contain"
             />
             <TextInput
             ref={emailRef}
               placeholder="Enter Your Email "
               placeholderTextColor={'#AEACAC'}
               value={email}
               onChangeText={setEmail}
               numberOfLines={1}
               multiline={false}
               returnKeyType='done'
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
               placeholder="Create Your Password "
               placeholderTextColor={'#AEACAC'}
               value={password}
               onChangeText={setPassword}
               numberOfLines={1}
               multiline={false}
               returnKeyType='done'
               onSubmitEditing={()=>confirmPassRef.current?.focus()}
               blurOnSubmit={false}
               secureTextEntry
               style={[
                 styles.inputForm,
                 { color: password ? 'black' : '#AEACAC' },
               ]}
             />
           </View>
           <View style={styles.formContainer}>
             <Image
               source={AppImages.Password}
               style={styles.ImageContainer}
               resizeMode="contain"
             />
             <TextInput
             ref={confirmPassRef}
               placeholder="Confirm Your Password "
               placeholderTextColor={'#AEACAC'}
               value={confirmPass}
               onChangeText={setConfirmPass}
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
           <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')} style={styles.btnContainer}>
             <Text style={styles.Text3}>Sign Up </Text>
           </TouchableOpacity>
           <View style={styles.TextContainer2}>
             <Text style={styles.Text3}>Already Have an Account? </Text>
             <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
               <Text style={styles.signUpText}>Sign In </Text>
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
         </GradientBackground>
  )
}

export default SignUpScreen

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
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 20,
    flexDirection:'row'
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
    color: '#000000',
  },
  forgotPass: {
    color: '#AEACAC',
    fontSize: 15,
    textAlign: 'right',
    top: 15,
  },
  btnContainer: {
    height: 50,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignInWithText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
    marginBottom:90,
  },
});
