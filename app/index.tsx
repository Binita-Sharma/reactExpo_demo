import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'

SplashScreen.preventAutoHideAsync()

const Home = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Bold': Inter_700Bold,
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }
  return (
    <View 
    style={{ flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"black"
    }}>
      <Text
      style={{
        fontSize:24,
        fontWeight: "bold",
        color:"purple",
        fontFamily:'Inter-Bold',
      }}
      >hi binny</Text>
    </View>
  )
}

export default Home