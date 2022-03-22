import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const Data = (props) => {
  // let edit=user;
  // edit([...edit])=add;

  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "80%",
            height: 50,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",

            borderRadius: 5,
            flexDirection: "row",
            marginBottom: 10,
            elevation: 8,
            opacity: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "bold",
                marginRight: 25,
                fontSize: 20,
                color: "black",
              }}
            >
              Name: {props.Name}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginRight: 25,
                fontSize: 20,
                color: "black",
              }}
            >
              RollNo:{props.pwd}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Data;
