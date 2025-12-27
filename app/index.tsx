//first we make the function here 

import { View, Text } from "react-native";

const Index = () => {
  return (

    <View style={{ flex: 1, backgroundColor: "purple", justifyContent: "center", alignItems: "center" ,  }}>
      {/* Your JSX code goes here */}
      {/* For example, a simple text element  is written using h1 , h2 , so we will import Text from react-native */}
      <Text style={{fontSize: 24, color: "white", fontWeight: "bold"}}>Hello, Bini !</Text>
    </View>
  );
}

export default Index;