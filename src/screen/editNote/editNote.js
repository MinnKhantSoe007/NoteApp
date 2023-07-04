import { View, Text, TextInput, TouchableOpacity, Modal, Alert, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./editNote.style";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";

export default function EditNote({ navigation, route }) {
  const { item } = route.params;
  const [noteTitle, setNoteTitle] = useState(item?.title);
  const [noteBody, setNoteBody] = useState(item?.body);
  const [modalVisible, setModalVisible] = useState(false);


  const handleOnChangeTitle = text => {
    setNoteTitle(text);
    console.log("Title", text)
  };

  const handleOnChangeBody = text => {
    setNoteBody(text);
    console.log("Body", text)
  };

  const deleteNote = async () => {
    const result = await AsyncStorage.getItem('noteList');
    let notes = [];
    if (result !== null) notes = JSON.parse(result)

    const newNotes = notes.filter(n => n.id !== item.id)
    await AsyncStorage.setItem('noteList', JSON.stringify(newNotes))
    navigation.navigate("Note")
  };

  const updateNote = async () => {
    const result = await AsyncStorage.getItem('noteList');
    let notes = [];
    if (result !== null) notes = JSON.parse(result)

    const newNotes = notes.findIndex(n => n.id == item.id)
    notes[newNotes].title = noteTitle
    notes[newNotes].body = noteBody
    await AsyncStorage.setItem('noteList', JSON.stringify(notes));
    navigation.navigate("Note");
  };


  return (

    < SafeAreaView >


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are You Sure ?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={deleteNote}>
              <Text style={styles.textStyle}>Delete <AntDesign name="delete" size={15} color="white" /> </Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel <MaterialCommunityIcons name="cancel" size={15} color="white" /> </Text>
            </Pressable>
          </View>
        </View>

      </Modal>

      <View style={styles.create_title}>
        <TextInput placeholder='Edit Note Title' onChangeText={handleOnChangeTitle}>
          <Text>{item.title}</Text>
        </TextInput>
      </View>

      <View style={styles.create_body}>
        <TextInput placeholder='Edit Note Body' onChangeText={handleOnChangeBody}>
          <Text>{item.body}</Text>
        </TextInput>
      </View>

      <TouchableOpacity style={styles.note_create_button} onPress={updateNote} >
        <Text style={{ textAlign: 'center', color: '#fff' }}>Update    <AntDesign name="edit" size={15} color="white" /> </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.note_create_button} onPress={() => setModalVisible(true)}>
        <Text style={{ textAlign: 'center', color: '#fff' }}>Delete    <AntDesign name="delete" size={15} color="white" /> </Text>
      </TouchableOpacity>

    </SafeAreaView >

  )
}