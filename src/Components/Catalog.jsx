import React from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native";
import Category from "./Category";

const Catalog = () => {
  return (
    <ScrollView style={{ marginTop: 20 }}>
      <View style={{ alignItems: "center"}}>
        <Text style={{ fontWeight: "bold", fontSize: 26 }}>Каталог</Text>
      </View>
      <View style={{gap: 10}}>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </View>
    </ScrollView>
  );
};

export default Catalog;
