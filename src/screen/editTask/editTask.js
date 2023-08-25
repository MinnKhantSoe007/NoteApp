import { View, Text, TextInput, TouchableOpacity, Modal, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./editTask.style";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";

export default function EditTask({ navigation, route }) {
  const { item } = route.params; // got data from the note screen so that we know which item is pressed
  const [task, setTask] = useState(item?.task);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnChangeTask = text => {
    setTask(text)
  };

  const deleteTask = async (activeTab) => {
    const result = await AsyncStorage.getItem('taskList'); // first get the lists of task
    let tasks = []; // let a veriable named tasks to be an empty array
    if (result !== null) tasks = JSON.parse(result) // add the task lists to the tasks only if the result is not null

    const newTasks = tasks.filter(n => n.id !== item.id) // filter it so that all the unmatched ids are chosen and only the correct item filtered away 
    await AsyncStorage.setItem('taskList', JSON.stringify(newTasks)) // make the newNotes the final notes
    navigation.navigate("Note", activeTab == 2);
  };

  const updateTask = async (activeTab) => {
    const result = await AsyncStorage.getItem('taskList');
    let tasks = [];
    if (result !== null) tasks = JSON.parse(result)

    const newTasks = tasks.findIndex(n => n.id == item.id) // only the matched id note will be modified
    tasks[newTasks].task = task // inside the tasks, there is a newTasks and only the newTasks will be updated
    await AsyncStorage.setItem('taskList', JSON.stringify(tasks));
    navigation.navigate("Note", activeTab == 2);
  }

  return (

    < SafeAreaView >

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        hardwareAccelerated
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are You Sure ?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={deleteTask}>
              <Text style={styles.textStyle}>Delete <AntDesign name="delete" size={15} color="white" /> </Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel  <MaterialCommunityIcons name="cancel" size={15} color="white" /> </Text>
            </Pressable>
          </View>
        </View>

      </Modal>
      
      <View style={styles.create_task}>
        <TextInput placeholder='Edit Task' onChangeText={handleOnChangeTask} multiline>
          <Text>{item.task}</Text>
        </TextInput>
      </View>

      <TouchableOpacity style={styles.task_create_button} onPress={updateTask} >
        <Text style={{ textAlign: 'center', color: '#fff' }}>Update    <AntDesign name="edit" size={15} color="white" /> </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.task_create_button} onPress={() => setModalVisible(true)}>
        <Text style={{ textAlign: 'center', color: '#fff' }}>Delete    <AntDesign name="delete" size={15} color="white" /> </Text>
      </TouchableOpacity>

    </SafeAreaView >

  )
}