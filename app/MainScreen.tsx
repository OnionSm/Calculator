import { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import { Text, View, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { Switch } from "react-native";
import styles from "./styles"
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
  const [answer, setTextAnswer] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [background_color, setBackgroundColor] = useState(light_background);
  const [button_color1, setButtonColor1] = useState(ligtmode_button1);
  const [button_color2, setButtonColor2] = useState(ligtmode_button2);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  function SetInputText(new_text: string): void
  {
    setText(prevText => prevText + new_text);
  }
  
  useEffect(() => 
  {
    console.log("changeText " +text); 
    Calculate();
  }, [text]);

  useEffect(() =>
  {
    if(isEnabled === true)
    {
      setBackgroundColor(light_background);
      setButtonColor1(ligtmode_button1);
      setButtonColor2(ligtmode_button2);
    }
    else
    {
      setBackgroundColor(dark_background);
      setButtonColor1(darkmode_button1);
      setButtonColor2(darkmode_button2);
    }
    

  }, [isEnabled]);


  function DeleteLastLetter(): void
  {
    setText(text.slice(0,-1));
  }

  function AddOperator(operator: string): void 
  {
    const lastletter = text[text.length - 1];
    console.log(lastletter);
    if(lastletter === "+" || lastletter === "-" || lastletter === "*" || lastletter === "/")
    {
      const new_text = text.slice(0,-1) + operator;
      setText(new_text);
    }
    else
    {
      setText(text + operator);
    }
  }

  function Calculate(): void 
  {
    try 
    {
      const result = evaluate(text); 
      console.log("answer " + result);
      setTextAnswer(result);
    } 
    catch (error) 
    {
      console.log('Lỗi khi đánh giá biểu thức:', error);
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={[styles.image, {backgroundColor : background_color}]}
        resizeMode="contain">
          <View style = {styles.box}>
            <View style = {styles.box_1}>
              <View style = {[styles.box_1_2, {transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}]}>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
            <View style = {styles.box_1}>
              <View style = {styles.box_1_1}>
                <Text style = {styles.input_result} >{answer}</Text>
              </View>
            </View>
            <View style = {styles.box_1}>
              <View style = {styles.box_1_1}>
              <TextInput
                style={styles.main_input}
                editable={false}
                selectTextOnFocus={false}
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
                  <TouchableOpacity style={[styles.box2_1_1_item, {backgroundColor : button_color1}]} onPress={() => {setText("")}}>
                    <Text style={styles.box2_1_1_item_text}>C</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_1_item, {backgroundColor : button_color1}]}>
                    <Text style={styles.box2_1_1_item_text}>+/-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_1_item, {backgroundColor : button_color1}]}>
                    <Text style={styles.box2_1_1_item_text}>%</Text>
                  </TouchableOpacity>
                </View>
                <View style = {styles.box2_1_2}>
                  <TouchableOpacity style={[styles.box2_1_2_item, {backgroundColor : button_color2}]} onPress={() => SetInputText("7")}>
                    <Text style={styles.box2_1_2_item_text}>7</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, {backgroundColor : button_color2}]} onPress={() => SetInputText("8")}>
                    <Text style={styles.box2_1_2_item_text}>8</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, {backgroundColor : button_color2}]} onPress={() => SetInputText("9")}>
                    <Text style={styles.box2_1_2_item_text}>9</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, {backgroundColor : button_color2}]} onPress={() => SetInputText("4")}>
                    <Text style={styles.box2_1_2_item_text}>4</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, {backgroundColor : button_color2}]} onPress={() => SetInputText("5")}>
                    <Text style={styles.box2_1_2_item_text}>5</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, {backgroundColor : button_color2}]} onPress={() => SetInputText("6")}>
                    <Text style={styles.box2_1_2_item_text}>6</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, {backgroundColor : button_color2}]} onPress={() => SetInputText("1")}>
                    <Text style={styles.box2_1_2_item_text}>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, {backgroundColor : button_color2}]} onPress={() => SetInputText("2")}>
                    <Text style={styles.box2_1_2_item_text}>2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, {backgroundColor : button_color2}]} onPress={() => SetInputText("3")}>
                    <Text style={styles.box2_1_2_item_text}>3</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, {backgroundColor : button_color2}]} onPress={() => SetInputText(".")}>
                    <Text style={styles.box2_1_2_item_text}>.</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, {backgroundColor : button_color2}]} onPress={() => SetInputText("0")}>
                    <Text style={styles.box2_1_2_item_text}>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_1_2_item, {backgroundColor : button_color2}]} onPress={() => DeleteLastLetter()}>
                    <Text style={styles.box2_1_2_item_text}>X</Text>
                  </TouchableOpacity>
                </View>

              </View>
              <View style = {styles.box2_2}>
                  <TouchableOpacity style={[styles.box2_2_item]} onPress={() => AddOperator("/")}>
                    <Text style={styles.box2_2_item_text}>/</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_2_item]} onPress={() => AddOperator("*")}>
                    <Text style={styles.box2_2_item_text}>*</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_2_item]} onPress={() => AddOperator("-")}>
                    <Text style={styles.box2_2_item_text}>-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_2_item]} onPress={() => AddOperator("+")}>
                    <Text style={styles.box2_2_item_text}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.box2_2_item]} onPress={() => {Calculate()}}>
                    <Text style={styles.box2_2_item_text}>=</Text>
                  </TouchableOpacity>
              </View>
          </View>

      </ImageBackground>
    </View>
  );
}

export default MainScreen