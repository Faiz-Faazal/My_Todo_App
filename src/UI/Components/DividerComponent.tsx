import { View, StyleSheet } from 'react-native'
import React from 'react'

const DividerComponent = () => {
  return (
    <View style={styles.divider}>
     
    </View>
  )
}

export default DividerComponent

const styles=StyleSheet.create({
divider:{
     height: 1,
    backgroundColor: "#ccc",
    marginVertical:30
}
})