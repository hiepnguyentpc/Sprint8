import React from "react";
import { View, Text } from "react-native";
import General_Info from "../component/general_info/General_Info";
import Main_Section from "../component/main_section/Main_Section";

export default function ProductScreen() {
  return (
    <View>
      <General_Info/>
      <Main_Section/>
    </View>
  );
}
