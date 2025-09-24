import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
// import GradientBackground from '../../components/GradientBackground';
import { SafeAreaView } from 'react-native-safe-area-context';

const TaskCreationScreen = () => {
    const [searchName, setSearchName]=useState('');
  return (
    
      <SafeAreaView>
        <ScrollView>
          <View style={styles.View}>
            <View style={styles.SearchBarContainer}>
                <TextInput
                placeholder='Search by name'/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};

export default TaskCreationScreen;

const styles = StyleSheet.create({
  View: {
    flex:1,
    marginTop:25,
    flexDirection:'row',
  },
  SearchBarContainer: {
    height: 45,
    backgroundColor: '#102D53',
    width:240,
    borderRadius:10,
    marginLeft:10,
  },
});
