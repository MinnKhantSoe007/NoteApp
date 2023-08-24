import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./createTask.style";
import { Ionicons } from '@expo/vector-icons';
import useAsyncHelper from "../../hook/custom/useAsyncHelper";

export default function CreateTask({ navigation }) {

  const [task, setTask] = useState('');
  const [oldTaskList, setNewTask] = useAsyncHelper("taskList")

  const handleOnChangeTask = text => {
    setTask(text);
    console.log("Task", text)
  };


  const handleSubmit = async (activeTab) => {

    setNewTask({ id: Date.now(), task: task, isChecked: false });
    navigation.navigate("Note", activeTab == 2);

  };

  return (

    < SafeAreaView >

      <View style={styles.create_task}>
        <TextInput placeholder='Create Task' value={task} onChangeText={handleOnChangeTask} multiline/>
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.task_create_button}>
        <Text style={{ textAlign: 'center', color: '#fff' }}>Create    <Ionicons name="create-outline" size={18} color="#fff" /> </Text>
      </TouchableOpacity>
    </SafeAreaView >

  )
}