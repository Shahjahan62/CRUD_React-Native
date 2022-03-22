import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useCallback } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const Crud2 = () => {
  const [add, setAdd] = useState({
    name: "",
    rollno: "",
  });
  const [user, setUser] = useState([]);
  const [isEdit, setisEdit] = useState(false);
  const [index, setIndex] = useState(null);
  const [item, setItem] = useState();

  const AddUser = useCallback(() => {
    setUser([...user, add]);
    setAdd({
      name: "",
      rollno: "",
    });
  }, [user, add]);

  const EditUser = useCallback(
    (indx) => {
      setAdd(user[indx]);
      setisEdit(true);
      setIndex(indx);
    },
    [add, user, index, isEdit]
  );

  const UpdateUser = useCallback(() => {
    let edit = user;
    edit[index] = add;
    setUser([...edit]);
    setisEdit(false);
    setAdd({
      name: "",
      rollno: "",
    });
  }, [add, user, setUser]);

  const DeleteUser = useCallback(
    (indx) => {
      let filterObj = user.filter((item, ind) => ind != indx);
      setUser(filterObj);
      setAdd({
        name: "",
        rollno: "",
      });
    },
    [user, add, setAdd]
  );

  return (
    <SafeAreaView style={{ marginTop: 35 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TextInput
          style={styles.TextInput}
          value={add.name}
          onChangeText={(text) => setAdd({ ...add, name: text })}
          placeholder="Name"
          keyboardType="default"
        />
        <TextInput
          style={styles.TextInput}
          value={add.rollno}
          onChangeText={(text) => setAdd({ ...add, rollno: text })}
          placeholder="Roll No"
          keyboardType="number-pad"
        />

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => (isEdit ? UpdateUser() : AddUser())}
            key={index}
            disabled={!(add.name && add.rollno)}
            style={styles.Button}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              {isEdit ? "Update" : "Add"}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 300,
            height: 480,
            marginTop: 20,
            backgroundColor: "lightblue",
            borderRadius: 10,
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          {user.map((item, index) => (
            <View
              style={{
                width: 280,
                height: 50,
                backgroundColor: "white",
                marginTop: 15,
                // justifyContent: "center",
                borderRadius: 10,
                elevation: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                key={index}
                onPress={() => {
                  EditUser(index), setItem(item);
                }}
              >
                <View style={{ width: 150, height: 40 }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      marginLeft: 10,
                    }}
                  >
                    Name:{item.name}
                  </Text>
                  <Text
                    style={{ fontSize: 15, fontWeight: "bold", marginLeft: 10 }}
                  >
                    Roll No:{item.rollno}
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={{ marginLeft: "30%" }}>
                <TouchableOpacity key={index} onPress={() => DeleteUser(index)}>
                  <Icon name="delete" size={35} color="red" />
                </TouchableOpacity>
              </View>
            </View>

            // (
            //   <TouchableOpacity
            //     key={index}
            //     style={{
            //       width: 250,
            //       height: 50,
            //       backgroundColor: "white",
            //       marginTop: 15,
            //       // justifyContent: "center",
            //       borderRadius: 10,
            //       elevation: 10,
            //     }}
            //   ></TouchableOpacity>
            // )
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    width: 300,
    height: 50,
    marginTop: 20,
    padding: 10,
    elevation: 3,
    shadowOpacity: 20,
    borderRadius: 5,
  },
  Button: {
    width: 150,
    height: 55,
    marginTop: 20,
    marginRight: 10,
    backgroundColor: "#1E90FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 20,
  },
});

export default Crud2;
