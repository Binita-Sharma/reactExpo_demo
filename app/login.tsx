import { View, Text, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router';

const Login = () => {

  //useState come under state management, here we are using useState to manage the state of the input fields
  const [value, setValue] = useState({
    value1: '',
    value2: ''
  });


//useEffect is the hook in which we can manage the side effects in functional components,
// it take the callback function and dependency array as the parameters, it means when page is load then only it is called
// in easy language we can say that we dont need to call the function again and again like api call etc, it will be called once when the component is mounted
// when there is empty array then it will call only once when component is called first time
// when we pass value in the array then it will call when that value is changed
  useEffect(() => {
    console.log("ek baar call kardiya bhai.......");
  },[value?.value1]);

const onLogin = () => {
console.log(value); 
};
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('@/assets/images/login.png')} style={{ width: '80%', height: 300, margin: 10 }} resizeMode='center' />

      <View style={{ padding: 10, flex: 1, gap: 12 }}>
        <TextInput placeholder='Enter your Email'
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 5 }}
          onChangeText={(text) => setValue(prev => ({ ...prev, value1: text }))}
        />
        <TextInput placeholder='Enter your Password'
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 5 }} secureTextEntry={true}
          onChangeText={(text) => setValue(prev => ({ ...prev, value2: text }))}
          />

        <MyButton title={"Login"} onPress={onLogin} />

      </View>
    </View>
  )
}

export default Login