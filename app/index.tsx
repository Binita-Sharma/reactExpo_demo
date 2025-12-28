//first we make the function here 

import { Link } from "expo-router";
import { View, Text, } from "react-native";
import MyButton from "../components/MyButton";
const Index = () => {
  return (

    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <MyButton/>
    </View>
  );
}

export default Index;