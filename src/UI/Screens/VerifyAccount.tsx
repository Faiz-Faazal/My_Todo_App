import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import GradientBackground from '../../components/GradientBackground';
import { AppImages } from '../../Utils/AppConstants';

const VerifyAccount = () => {
  const [text, setText] = useState('');
  const [code, setCode] = useState('');

  return (
    <GradientBackground>
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={AppImages.AppLogo} style={styles.Logo} />
        </View>
        <Text style={styles.Text}> DO IT </Text>
        <View style={styles.AccContainer}>
          <View style={styles.VerifyContainer}>
            <Text style={styles.EmailText}>Email Verification ! {''}</Text>
            <Text>{''}</Text>
            <Text style={styles.VerText}>
              Enter the Verified Email, we will send you a verification code.
            </Text>
          </View>
          <Text>{''}</Text>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.InputText}
              placeholder="e.g : abcxyz@gmail.com"
              placeholderTextColor={'#AEACAC'}
              value={text}
              onChangeText={setText}
              numberOfLines={1}
              multiline={false}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.OtpText}>Send OTP</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.CodeHeading}>Enter the 6- Digit Code that is sent to your Email!{'\n'}</Text>
            <Text>{'\n \n '}</Text>
            <View style={styles.InputContainer}>
              <TextInput
              style={styles.InputText}
              placeholder="e.g : 881162"
              placeholderTextColor={'#AEACAC'}
              value={code}
              onChangeText={setCode}
              numberOfLines={1}
              multiline={false}
            />
            </View>
          </View>
          <Text>{'\n'}</Text>
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.btnText}> Submit</Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default VerifyAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    width: 85,
    height: 85,
  },
  Text: {
    fontSize: 32,
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    top: 10,
  },
  AccContainer: {
    top: 30,
    borderRadius: 15,
    height: 470,
    backgroundColor: 'rgba(216, 216, 219, 0.51)',
  },
  VerifyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  EmailText: {
    fontSize: 20,
    color: 'white',
    top: 10,
    textTransform: 'uppercase',
  },
  VerText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  InputContainer: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    left: 16,
    overflow:'hidden',
  },
  InputText: {
    left: 15,
    top: 2,
    fontSize: 19,
    color: 'black',
  },
  OtpText: {
    fontSize: 14,
    textAlign: 'right',
    right: 10,
    color: '#3f3f3fff',
    textDecorationLine: 'underline',
    top:10,
  },
  CodeHeading:{
     top:35,
     color:'white',
     justifyContent:"center",
     alignContent:'center',
     textAlign:'center',
     fontSize:15,
     margin:'auto',

  },
  submitBtn:{
    height: 50,
    backgroundColor: '#0EA5E9',
    borderRadius: 25,
    marginTop: 18,
    width:'50%',
    margin:'auto',
  },
  btnText:{
    textAlign:'center',
    justifyContent:'center',
    marginTop:13,
    fontSize:17,
    textTransform:'uppercase',
  }
});
