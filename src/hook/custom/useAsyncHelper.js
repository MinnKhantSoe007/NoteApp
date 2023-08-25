import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default (keyName) => { // taskList or noteList
  const [oldValue, setOldValue] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem(keyName).then(res => { // 2 functions to do, get and set. It is get function
      if (res !== null) {
        setOldValue(JSON.parse(res)) // store the result in a state
      }
    });
  }, []);

  const setNewValue = (newData, isResetList = false) => { // newData means title and body, isResetList is for checkBox in task: the default should be false
    const totalList = isResetList ? [...newData] : [...oldValue, newData] // is the boolean is false it means we r adding new data so we combine old and new and if the boolean is true, destrature it to update the state

    AsyncStorage.setItem(keyName, JSON.stringify(totalList)).then(() => {
      setOldValue(totalList) // store the result in a state
    })
  }

  return [oldValue, setNewValue] // old value in get and new value in set
}