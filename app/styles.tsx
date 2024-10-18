import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window'); 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000",
    },
    image: {
      width: width * 1, 
      height: height * 1.1 , 
      justifyContent: "center",
      flexDirection: "column",
      display: "flex",
      alignItems: "flex-start",
  
    },
    text: {
      color: "#000", 
      fontSize: 20,
    },
    box: {
      width: "100%", 
      flex: 38,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignContent: "center"
    },
    box2: {
      width: "100%", 
      flex: 62,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      flexDirection: "row",
      paddingLeft: "4%",
      paddingRight: "4%",
    
    },  
    button: {
      height: "13.5%",
      width: "20%",
      marginTop: 17,
      marginBottom: 5,
      marginLeft: 3 ,
      marginRight: 3,
      borderRadius: 25
    },
    box2_1:
    {
      flex: 3,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignContent: "center",
      flexDirection: "column",
    },
    box2_2:
    {
      flex: 1,
      height: "100%",
      display: "flex",
      flexWrap: "wrap",
      alignContent: "center",
      flexDirection: "column",
    },
    box2_1_1:
    {
      flex: 1,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignContent: "center",
      flexDirection: "row",
    },
    box2_1_2:
    {
      flex: 4,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignContent: "flex-start",
      flexDirection: "row",
    },
    box2_1_1_item:
    {
      width: "27%",
      height: "63%",
      borderRadius: 20,
      display: "flex"
  
    },
    box2_1_2_item:
    {
      width: "27%",
      height: "16%",
      marginBottom: 24,
      marginTop: 1,
      borderRadius: 20,
      display: "flex"
    },
    box2_2_item:
    {
      width: "81%",
      height: "14%",
      borderRadius: 20,
      marginTop: 17,
      display: "flex"
    },
    box2_1_1_item_text:
    {
      margin : 'auto',
      fontSize: 25,
      fontWeight: "bold"
    },
    box2_1_2_item_text:
    {
      margin : 'auto',
      fontSize: 25,
      fontWeight: "bold"
    },
    box2_2_item_text:
    {
      margin : 'auto',
      fontSize: 25,
      fontWeight: "bold"
    },
    box_1:
    { 
      width: "100%",
      height: "33%",
    },
    main_input:
    {
      color: "#000",
      fontSize: 35,
      fontWeight: "bold",
      marginBottom: 5,
      marginRight: 20
    },
    input_result:
    {
      color: "#000",
      fontSize: 30,
      marginBottom: 5,
      marginRight: 20
    },
    box_1_1: 
    {
      display: "flex",
      width: "100%",
      height: "100%",
      flexDirection: "row",  
      justifyContent: "flex-end", 
      alignItems: "flex-end" 
    },
    box_1_2:
    {
      display: "flex",
      width: "100%",
      height: "100%",
      flexDirection: "column",  
      justifyContent: "flex-end", 
      alignItems: "center" 
    },
    changeMode:
    {
      width: "20%",
      height: "25%",
      borderRadius: 20,
      display: "flex"
    },
  }); 
  
  
  export default styles;