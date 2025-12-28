import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const MyButton = () => {
  return (
        <TouchableOpacity 
        activeOpacity={0.8}
        style={styles.button}>
                  <Text style={styles.text}>button dabaye</Text>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'orange',
         padding:15, 
         borderRadius:5
    },
    text:{
        color: 'white', 
        textAlign: 'center', 
        fontWeight: 'bold'

    }
})

export default MyButton