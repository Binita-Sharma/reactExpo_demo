import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'

//here we will learn about map method in react native

const Newlogin = () => {
  {/*return (
    //if we want to execute anykind of javascript in these method we will use the {}
    //Scrollview loads all items at the same time , even the ones you can't see on the screen
    <ScrollView horizontal contentContainerStyle={{ padding: 20, gap: 20 ,marginTop:50}} >
        {

            [1,2,3,4,5,56,34,67,5,2,89,56,46,8,9,53,].map((item) => {
                return (
                <View key={item} 
                style={{ 
                    width: 100, 
                    height:100, 
                    backgroundColor: "purple", 
                    marginRight:20
                }} />

                );

            })

        }
    </ScrollView>

    //now we learn the concept of flatlist

  )*/}

  //Flatlist  loads only visible items not everything

  return (
    <View>
      <FlatList data={[1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 9, 7, 8, 4, 5]} 
      contentContainerStyle={{ marginTop: 50, padding: 20, flexDirection: "row", flexWrap: "wrap", gap: 20 }}
      ListHeaderComponent={
        <View
        style={{ width: "100%", height:200, backgroundColor: "lightblue", marginBottom:20, justifyContent:"center", alignItems:"center" }}
        >
        </View>
      }

      renderItem={({ item }) => {
        return (
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "orange",
            marginBottom: 20,
            marginRight: 20,
            justifyContent: "center",
            alignItems: "center"
          }}
        > 
          <Text>{item}</Text>
        </View>
        )
      }}

      />
    </View>
  )
}

export default Newlogin