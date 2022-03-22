import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Alert } from "react-native-web";
// import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Data from "./Component/Data";
import Crud from "./Component/Crud";

import Crud2 from "./screens/Crud2";

export default function App() {
  const [add, setAdd] = useState({
    name: "",
    rollNo: "",
  });
  const [user, setUser] = useState([]);
  const [isEdit, setisEdit] = useState(false);
  const [index, setIndex] = useState(null);
  const [item, setItem] = useState();

  const CreateData = useCallback(() => {
    setUser([...user, add]);
    setAdd({
      name: "",
      rollNo: "",
    });
  }, [add, user]);
  // var i = -1;
  const EditData = useCallback(
    (ind) => {
      // Alert.alert(ind);
      // i = parseInt(ind);
      console.log(ind);
      setAdd(user[ind]);
      setisEdit(true);
      setIndex(ind);
    },
    [add, user, index, isEdit]
  );

  const UpdateData = useCallback(() => {
    let Edit = user;
    Edit[index] = add;
    setUser([...Edit]);
    setisEdit(false);
    setAdd({
      name: "",
      rollNo: "",
    });
  }, [user, add, setUser]);

  const DeleteData = useCallback(
    (ind) => {
      // console.log(i + "i");
      let filterObj = user.filter((item, inde) => ind != inde);

      setUser(filterObj);
      setAdd({
        name: "",
        rollNo: "",
      });
    },
    [add, user, setUser]
  );

  return (
    <Crud2 />
    // <SafeAreaView style={{ marginTop: 25 }}>
    //   <View style={styles.container}>
    //     <View style={{ justifyContent: "center", alignItems: "center" }}>
    //       <TextInput
    //         style={styles.TextInput}
    //         placeholder="Name"
    //         value={add.name}
    //         onChangeText={(text) => setAdd({ ...add, name: text })}
    //       />
    //     </View>
    //     <View style={{ justifyContent: "center", alignItems: "center" }}>
    //       <TextInput
    //         style={styles.TextInput}
    //         placeholder="Password"
    //         keyboardType="number-pad"
    //         value={add.rollNo}
    //         onChangeText={(text) => setAdd({ ...add, rollNo: text })}
    //         // secureTextEntry={true}
    //       />
    //     </View>
    //     <View
    //       style={{
    //         flexDirection: "row",
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       <TouchableOpacity
    //         style={styles.Button}
    //         onPress={() => (isEdit ? UpdateData() : CreateData())}
    //         disabled={!(add.name && add.rollNo)}
    //       >
    //         <Text
    //           style={{
    //             fontWeight: "bold",

    //             fontSize: 15,
    //             color: "white",
    //           }}
    //         >
    //           {isEdit ? "Update" : "Add"}
    //         </Text>
    //       </TouchableOpacity>
    //       {/* <TouchableOpacity
    //         style={styles.Button}
    //         onPress={() => DeleteData(index)}
    //         key={index}
    //       >
    //         <Text
    //           style={{
    //             fontWeight: "bold",

    //             fontSize: 15,
    //             color: "white",
    //           }}
    //         >
    //           Delete
    //         </Text>
    //       </TouchableOpacity> */}
    //     </View>
    //     <View style={{ justifyContent: "center", alignItems: "center" }}>
    //       {/* <ScrollView style={styles.list}> */}
    //       <FlatList
    //         data={item}
    //         keyExtractor={(item) => item.index}
    //         renderItem={({ item }) => {
    //           <View style={{ flexDirection: "row" }}>
    //             <TouchableOpacity
    //               onPress={() => {
    //                 EditData(index), setItem(item);
    //               }}
    //             >
    //               <Data Name={item.name} pwd={item.rollNo} />
    //             </TouchableOpacity>

    //             {/* <View>
    //               <TouchableOpacity
    //                 onPress={() => {
    //                   Delete(index);
    //                 }}
    //               >
    //                 <Icon name="delete" size={25} color="red" />
    //               </TouchableOpacity>
    //             </View> */}
    //           </View>;
    //         }}
    //       />
    //       {/* </ScrollView> */}
    //     </View>
    //   </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
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
    width: 70,
    height: 45,
    marginTop: 20,
    marginRight: 10,
    backgroundColor: "#1E90FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  list: {
    width: "90%",
    height: "65%",
    backgroundColor: "#1E90FF",
    marginTop: 25,
    borderRadius: 10,
  },
});
