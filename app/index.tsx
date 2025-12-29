//first we make the function here 

import { Link, useRouter } from "expo-router";
import { View, Text, } from "react-native";
import MyButton from "../components/MyButton";
const Index = () => {
  const router = useRouter();
  const onContinue = () => {
    router.navigate("/login");
  }
  return (

    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <MyButton title={"button dabau"} onPress={onContinue}/>
    </View>
  );
}

export default Index;