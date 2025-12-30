//first we make the function here 

import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, Button} from "react-native";
import MyButton from "../components/MyButton";
import { useState } from "react";
import Modal from "react-native-modal";

const ModalComponent = () => {
  const [visible, setVisible] = useState(false);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })

  {/*const router = useRouter();
  const onContinue = () => {
    router.navigate("/newlogin");
  }
  return (

    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <MyButton title={"button dabau"} onPress={onContinue}/>
    </View>
  ); */}

  //modal example

  return (
<View 
style={styles.container}>
<Button title="open modal" onPress={() => setVisible(true)} />
  
  <Modal isVisible={visible}
    onBackdropPress={() => setVisible(false)}
    onBackButtonPress={() => setVisible(false)}
    style={{ margin: 0 , justifyContent: "flex-end"}}
  >
    <View style={{ backgroundColor: "white", height:200}}>
    </View>
  </Modal>
</View>
  );
}


export default ModalComponent;