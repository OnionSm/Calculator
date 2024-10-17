import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Dimensions } from 'react-native'; 
import { rgbaColor } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TextInput } from "react-native-gesture-handler";
import React, { useState } from 'react';


const { width, height } = Dimensions.get('window'); 
const ligtmode_button1 = "#D2D3DA";
const ligtmode_button2 = "#FFFFFF";
const ligtmode_button3 = "#4B5EFC";
const darkmode_button1 = "#4E505F";
const darkmode_button2 = "#2E2F38"; 

const light_background = "#F1F2F3";
const dark_background = "#17171C";



function MainScreen()
{
  function TextInputChange(textChanged: string): void 
  {
    console.log(textChanged);
  }

  const [text, setText] = useState('');

  function SetInputText(new_text: string): void
  {
    setText(text+ new_text);
    console.log(text);
  }
  
  function DeleteLastLetter(): void
  {
    setText(text.slice(0,-1));
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/Light.png')}
        style={styles.image}
        resizeMode="contain">
          <View style = {styles.box}>
            <View style = {styles.box_1}>

            </View>
            <View style = {styles.box_1}>
              <View style = {styles.box_1_1}>
                <Text style = {styles.input_result}>12345</Text>
              </View>
            </View>
            <View style = {styles.box_1}>
              <View style = {styles.box_1_1}>
              <TextInput
                style={styles.main_input}
                onChangeText={(newText) => {
                  setText(newText); 
                  TextInputChange(text); 
                }}
                value={text}
              />
              </View> 
            </View> 
          </View>
          <View style = {styles.box2}>
              <View style = {styles.box2_1}>
                <View style = {styles.box2_1_1}>
                  <TouchableOpacity style={[styles.box2_1_1_item, { backgroundColor: ligtmode_button1 }]}>
                    <Text style={styles.box2_1_1_item_text}>C</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_1_item, { backgroundColor: ligtmode_button1 }]}>
                    <Text style={styles.box2_1_1_item_text}>+/-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_1_item, { backgroundColor: ligtmode_button1 }]}>
                    <Text style={styles.box2_1_1_item_text}>%</Text>
                  </TouchableOpacity>
                </View>
                <View style = {styles.box2_1_2}>
                  <TouchableOpacity style={[styles.box2_1_2_item, { backgroundColor: ligtmode_button1 }]} onPress={() => SetInputText("7")}>
                    <Text style={styles.box2_1_2_item_text}>7</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, { backgroundColor: ligtmode_button1 }]} onPress={() => SetInputText("8")}>
                    <Text style={styles.box2_1_2_item_text}>8</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, { backgroundColor: ligtmode_button1 }]} onPress={() => SetInputText("9")}>
                    <Text style={styles.box2_1_2_item_text}>9</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, { backgroundColor: ligtmode_button1 }]} onPress={() => SetInputText("4")}>
                    <Text style={styles.box2_1_2_item_text}>4</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, { backgroundColor: ligtmode_button1 }]} onPress={() => SetInputText("5")}>
                    <Text style={styles.box2_1_2_item_text}>5</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, { backgroundColor: ligtmode_button1 }]} onPress={() => SetInputText("6")}>
                    <Text style={styles.box2_1_2_item_text}>6</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, { backgroundColor: ligtmode_button1 }]} onPress={() => SetInputText("1")}>
                    <Text style={styles.box2_1_2_item_text}>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, { backgroundColor: ligtmode_button1 }]} onPress={() => SetInputText("2")}>
                    <Text style={styles.box2_1_2_item_text}>2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, { backgroundColor: ligtmode_button1 }]} onPress={() => SetInputText("3")}>
                    <Text style={styles.box2_1_2_item_text}>3</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, { backgroundColor: ligtmode_button1 }]} onPress={() => SetInputText(".")}>
                    <Text style={styles.box2_1_2_item_text}>.</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, { backgroundColor: ligtmode_button1 }]} onPress={() => SetInputText("0")}>
                    <Text style={styles.box2_1_2_item_text}>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, { backgroundColor: ligtmode_button1 }]} onPress={() => DeleteLastLetter()}>
                    <Text style={styles.box2_1_2_item_text}>X</Text>
                  </TouchableOpacity>
                </View>

              </View>
              <View style = {styles.box2_2}>
                  <TouchableOpacity style={[styles.box2_2_item, { backgroundColor: ligtmode_button1 }]}>
                    <Text style={styles.box2_2_item_text}>/</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_2_item, { backgroundColor: ligtmode_button1 }]}>
                    <Text style={styles.box2_2_item_text}>*</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_2_item, { backgroundColor: ligtmode_button1 }]}>
                    <Text style={styles.box2_2_item_text}>-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_2_item, { backgroundColor: ligtmode_button1 }]}>
                    <Text style={styles.box2_2_item_text}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_2_item, { backgroundColor: ligtmode_button1 }]}>
                    <Text style={styles.box2_2_item_text}>=</Text>
                  </TouchableOpacity>
              </View>
          </View>

      </ImageBackground>
    </View>
  );
}



const Stack = createStackNavigator()

export default function Index()
{
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name = "MainScreen" component={MainScreen}/>
      </Stack.Navigator>  
  );
}



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
    backgroundColor: 'rgba(0, 0, 0, 20)'

  },
  text: {
    color: "#000", 
    fontSize: 20,
  },
  box: {
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "100%", 
    flex: 38,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center"
  },
  box2: {
    backgroundColor: light_background,
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
    backgroundColor: "rgba(0,0,0,0.6)",
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
    backgroundColor: light_background,
    flex: 3,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "column",
  },
  box2_2:
  {
    backgroundColor: light_background,
    flex: 1,
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    flexDirection: "column",
  },
  box2_1_1:
  {
    backgroundColor: light_background,
    flex: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
    flexDirection: "row",
  },
  box2_1_2:
  {
    backgroundColor: light_background,
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
    backgroundColor: ligtmode_button1,
    display: "flex"

  },
  box2_1_2_item:
  {
    width: "27%",
    height: "16%",
    marginBottom: 24,
    marginTop: 1,
    borderRadius: 20,
    backgroundColor: ligtmode_button2,
    display: "flex"
  },
  box2_2_item:
  {
    width: "81%",
    height: "14%",
    borderRadius: 20,
    marginTop: 17,
    backgroundColor: ligtmode_button3,
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
    backgroundColor: "rgba(100,0,0,0.5)", //light_background
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
  box_1_1: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "row",  
    justifyContent: "flex-end", 
    alignItems: "flex-end" 
  }
}); 


