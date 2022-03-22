import { View, Text } from "react-native";
import React, { useState, useCallback } from "react";

const Crud3 = () => {
  const [create, setCreate] = useState({
    name: "",
    pwd: "",
  });

  const [std, setStd] = useState([]);

  const [isEdit, setIsEdit] = useState(false);

  const [index, setIndex] = useState(null);

  const AddUser = useCallback(() => {
    setStd([...std, create]);
    setCreate({
      name: "",
      pwd: "",
    });
  }, [std, create]);

  const EditUser = useCallback(
    (indx) => {
      setCreate(std[indx]);
      setIsEdit(true);
      setIndex(indx);
    },
    [std, create, setIsEdit, setIndex]
  );

  const UpdateUser = useCallback(() => {
    let edit = std;
    edit[index] = create;
    setStd([...edit]);
    setIsEdit(false);
    setCreate({
      name: "",
      pwd: "",
    });
  }, [std, create, setStd]);

  const DeleteUser = useCallback(
    (indx) => {
      let FilObj = std.filter((ind, item) => ind != indx);
      setStd(FilObj);
      setCreate({
        name: "",
        pwd: "",
      });
    },
    [std, create, setStd]
  );

  return (
    <View>
      <Text>Crud3</Text>
    </View>
  );
};

export default Crud3;
