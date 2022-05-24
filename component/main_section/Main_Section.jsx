import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import SemesterDropDown from "../../DropDownComponents/SemesterDropDown/SemesterDropDown";

const Main_Section = () => {
  
 

  const selectedSemester = null;
  return (
    <View style={styles.view}>
      <Text style={styles.title}>II. ĐỀ NGHỊ ĐỐI CHIẾU CÔNG NỢ :</Text>
      <Text style={styles.line1}>- Học kỳ đề nghị đối chiếu công nợ*:</Text>
      <View style={styles.subView1}>
      <View style = {{flexDirection:"row", alignItems:"center"}}>
        <Text style={{top: 35, left:100}}> {selectedSemester} </Text>
        <View style = {{height:1, width:149, backgroundColor:"#8EA4B8", top:44, marginLeft:40}}></View>
      </View>

        <SemesterDropDown/>
      </View>

      <Text style={styles.line2}>- Khoản công nợ đã nộp (theo hóa đơn)*:</Text>

      <View style={{flexDirection:"row", left:-10}}>

          <View style={{flexDirection:"column", top:20, marginLeft:10, alignItems:"center"}}>
          <Text style={styles.line3}>+ Số tiền nộp (VNĐ)*:</Text>
          <TextInput style={{alignSelf:"center", fontSize:16, fontWeight:"bold"}}>Nhập số tiền</TextInput>
          <View style = {{height:1, width:149, backgroundColor:"#8EA4B8"}}></View>
          </View>

          <View style={{flexDirection:"column", top:20, marginLeft:70, alignItems:"center"}}>
          <Text style={styles.line3}>Ngày nộp tiền*:</Text>
          <TextInput style={{alignSelf:"center", fontSize:16, fontWeight:"bold"}}>Nhập ngày</TextInput>
          <View style = {{height:1, width:149, backgroundColor:"#8EA4B8"}}></View>
          </View>
          
      </View>

      <View style={{marginTop:20,}}>
      <Text style={styles.line1}>+ Hình thức nộp tiền*:</Text>
      <View style={styles.subView1}>
      <View style = {{flexDirection:"row", alignItems:"center"}}>
        <Text style={{top: 35, left:100}}> {selectedSemester} </Text>
        <View style = {{height:1, width:149, backgroundColor:"#8EA4B8", top:44, marginLeft:40}}></View>
      </View>
        <SemesterDropDown/>
      </View>
      </View>


      <View style={{marginTop:20,}}>
      <Text style={styles.line1}>+ Nộp tiền vào tài khoản chi nhánh*:</Text>
      <View style={styles.subView1}>
      <View style = {{flexDirection:"row", alignItems:"center"}}>
        <Text style={{top: 35, left:100}}> {selectedSemester} </Text>
        <View style = {{height:1, width:149, backgroundColor:"#8EA4B8", top:44, marginLeft:40}}></View>
      </View>
        <SemesterDropDown/>
      </View>
      </View>


      


    </View>
  );

};
export default Main_Section;
