import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import fImg from "./../../public/tpSYPUM9M4s.png";

const Category = () => {
  return (
    <View style={{marginTop:20, width: '90%', alignSelf: "center", height: 200}}>
        <Text style={{color: 'white', fontSize:28, paddingTop: 20, paddingLeft:40}}>Ящерицы</Text>
        <Image source={fImg} style={{position: 'absolute', zIndex: -1, alignSelf: "center"}}></Image>
    </View>
  );
};

export default Category;
