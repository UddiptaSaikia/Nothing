import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./RegisterStyle";
import { useNavigation } from "@react-navigation/native";
import Backarrow from "../images/backarrow.svg";
import DOB from "../images/DOB.svg";

const Register = () => {
  const navigation = useNavigation();

  const handleRegisterPress = () => {
    // Navigate to the registration screen
    // You can use navigation library like react-navigation here
    // Example: props.navigation.navigate('RegistrationScreen');
    navigation.navigate("");
  };
  const [selectedValue, setSelectedValue] = useState();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Backarrow width={21} height={21} />
          </TouchableOpacity>
          <Text style={styles.text}>
            <Text style={styles.whiteText}>OUTPLAYED.</Text>
            <Text style={styles.blueText}>in</Text>
          </Text>
        </View>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarWrapper}>
            {/* <Person width={50} height={50} /> */}
          </View>
        </View>
        <View style={styles.helloContainer}>
          <View style={styles.helloWrapper}>
            <Text
              style={[
                styles.helloText,
                {
                  fontSize: 23,
                  color: "white",
                  fontFamily: "KronaOne-Regular",
                },
              ]}
            >
              Hello!
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontFamily: "KronaOne-Regular",
          }}
        >
          Register
        </Text>
        <View style={styles.nameContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor={styles.placeholder.color}
          />
        </View>
        <View style={styles.phoneContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor={styles.placeholder.color}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.dateContainer}>
            <TextInput
              style={styles.input}
              placeholder="DOB"
              placeholderTextColor={styles.placeholder.color}
            />
            <DOB width={24} height={24} style={styles.dobIcon} />
          </View>
          <View style={styles.genderContainer}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              style={{ color: "rgba(255, 255, 255, 0.5)" }}
              dropdownIconColor="rgba(255, 255, 255, 0.5)"
            >
              <Picker.Item label="Gender" value="" style={styles.pickerItem} />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.countryContainer}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              style={{ color: "rgba(255, 255, 255, 0.5)" }}
              dropdownIconColor="rgba(255, 255, 255, 0.5)"
            >
              <Picker.Item label="Country" value="" style={styles.pickerItem} />
              <Picker.Item label="India" value="india" />
              <Picker.Item label="England" value="england" />
            </Picker>
          </View>
          <View style={styles.stateContainer}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              style={{ color: "rgba(255, 255, 255, 0.5)" }}
              dropdownIconColor="rgba(255, 255, 255, 0.5)"
            >
              <Picker.Item label="State" value="" style={styles.pickerItem} />
              <Picker.Item label="Assam" value="assam" />
              <Picker.Item label="Bihar" value="bihar" />
            </Picker>
          </View>
        </View>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <Text style={styles.termsText}>
            By clicking, I accept the
            <Text
              style={styles.linkText}
              onPress={() => navigation.navigate("TermsAndConditions")}
            >
              {" "}
              Terms & Conditions{" "}
            </Text>
            and
            <Text
              style={styles.linkText}
              onPress={() => navigation.navigate("PrivacyPolicy")}
            >
              {" "}
              Privacy Policy{" "}
            </Text>
            of Outplayed.in
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
