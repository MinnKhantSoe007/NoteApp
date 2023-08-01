import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default (keyName) => {
  const [oldValue, setOldValue] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem(keyName).then(res => {
      if (res !== null) {
        setOldValue(JSON.parse(res))
      }
    });
  }, []);

  const setNewValue = (newData, isResetList = false) => {
    const totalList = isResetList ? [...newData] : [...oldValue, newData]

    AsyncStorage.setItem(keyName, JSON.stringify(totalList)).then(() => {
      setOldValue(totalList)
    })
  }

  return [oldValue, setNewValue]
}