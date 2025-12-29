import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'

const Signup = () => {
  const router = useRouter();
  const onSignup = () => {
    router.navigate("/login");
  }
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('@/assets/images/sinup.png')} style={{ width: '80%', height: 300, margin: 10 }} resizeMode='center' />

      <View style={{ padding: 10, gap: 12, flex: 1 }}>

        <TextInput placeholder='Enter your Name'
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 5 }}
          onChangeText={(text) => console.log(text)}
        />

        <TextInput placeholder='Enter your Email'
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 5 }}
          onChangeText={(text) => console.log(text)}
        />

        <TextInput placeholder='Enter your Password'
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 5 }} secureTextEntry={true}
          onChangeText={(text) => console.log(text)}
        />

        <TextInput placeholder='Confirm Password'
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 5 }} secureTextEntry={true}
          onChangeText={(text) => console.log(text)}
        />


        <MyButton title={"Signup"} onPress={onSignup} />

      </View>
    </View>
  )
}

export default Signup