import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./createNote.style";
import { Ionicons } from '@expo/vector-icons';
import useAsyncHelper from "../../hook/custom/useAsyncHelper";

export default function CreateNote({ navigation }) {

  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');
  const [oldNoteList, setNewNote] = useAsyncHelper("noteList");

  const handleOnChangeTitle = text => {
    setNoteTitle(text);
    console.log("Title", text)
  };

  const handleOnChangeBody = text => {
    setNoteBody(text);
    console.log("Body", text)
  };

  const handleSubmit = async () => {
    setNewNote({ id: Date.now(), title: noteTitle, body: noteBody })
    navigation.navigate("Note");

  };

  return (

    < SafeAreaView >

      <View style={styles.create_title}>
        <TextInput placeholder='Create Note Title' value={noteTitle} onChangeText={handleOnChangeTitle} multiline/>
      </View>

      <View style={styles.create_body}>
        <TextInput placeholder='Create Note Body' value={noteBody} onChangeText={handleOnChangeBody} multiline/>
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.note_create_button}>
        <Text style={{ textAlign: 'center', color: '#fff' }}>Create    <Ionicons name="create-outline" size={18} color="#fff" /> </Text>
      </TouchableOpacity>

    </SafeAreaView >

  )
}