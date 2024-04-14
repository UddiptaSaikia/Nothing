import React from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("screen");

function LoginScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle={"light-content"} />
      <Image source={require("../assets/Frame_6.png")} style={styles.image} />
      <View>
        <TextInput
          style={styles.textinput}
          placeholder="Email ID"
          placeholderTextColor="grey"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          style={[styles.textinput, { marginVertical: height * 0.05 }]}
          placeholder="Password"
          placeholderTextColor="grey"
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity
          onPress={() => console.log("Button pressed!!")}
          style={[styles.forgotpassword]}
        >
          <Text style={{ color: "red" }}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("You have sucessfully logged in!!");
          }}
        >
          <Text style={{ color: "white" }}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.register}>
          <Text style={{ color: "white" }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => {console.log("You are registered succcessfully!!!!")}}>
            <Text style={{ color: "red" }}> Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[{flexDirection:'row'},{justifyContent:"space-around"}]}>
          <TouchableOpacity onPress={() => {console.log("Sign In kar chup chap!!")}} style={[styles.button1,{flexDirection:'row'}]}>
              <Image source={require("../assets/google_logo.png")} style={{width:20, height:20}}/>
              <Text style={{color:'white'}}>  Sign in with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {console.log("Sign In kar chup chap facebook se!!")}} style={[styles.button1,{flexDirection:'row'}]}>
              <Image source={require("../assets/fb.png")} style={{width:20, height:20}}/>
              <Text style={{color:'white'}}>  Sign in with FaceBook</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  image: {
    left: width * 0.33,
    top: height * 0.159,
  },
  textinput: {
    top: height * 0.259,
    borderBottomWidth: 2,
    marginVertical: 10,
    borderBottomColor: "grey",
    margin: width * 0.105,
    fontSize: 18,
    color: "grey",
  },
  forgotpassword: {
    alignSelf: "flex-end",
    marginTop: height * 0.227,
    marginRight: width * 0.115,
    textAlign: "right",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#393535",
    padding: 10,
    margin: width * 0.105,
    marginTop: height * 0.08,
  },
  register: {
    flexDirection: "row",
    marginLeft: width * 0.2,
    marginTop: height * -0.015,
  },
  button1:
  {
    margin: width * 0.105,
    marginTop: height * 0.08,
    borderRadius:30,
    backgroundColor: "#393535",
    padding: 10,
  }
});
export default LoginScreen;
