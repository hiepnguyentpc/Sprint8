import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 15,
  },
  line1: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 15,
    color: "#3D4B58",
  },
  line2: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 35,
    color: "#3D4B58",
  },
  line3:{
    fontSize: 16,
    marginLeft: 15,
    color: "#3D4B58",
    marginBottom:20,

  },
  inputI: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  subView1: {
    flexDirection: "row",
    marginLeft:-15
  },
  semester_dropdown: {
    width: 200,
    left: "20%",
    top: "5%",
  },
});

export default styles;
