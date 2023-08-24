import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, TouchableOpacity, TextInput, View, FlatList, ToastAndroid } from 'react-native';
import { useState, useEffect } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { styles } from './home.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import useAsyncHelper from '../../hook/custom/useAsyncHelper';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export function Home({ navigation, route }) {

  const [noteList, setNoteList] = useState();
  const [searchNote, setSearchNote] = useState('');
  const [task, setTask] = useState();
  const [searchTask, setSearchTask] = useState('');
  // const [checkedItems, setCheckedItems] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [oldTaskList, setTaskList] = useAsyncHelper('taskList');
  const [logo, setLogo] = useState(true);
  const isFocus = useIsFocused();

  useEffect(() => {
    getNoteList(),
    getTaskList()

  }, [isFocus]);

  const noteTab = () => { setActiveTab(1) }
  const taskTab = () => { setActiveTab(2) }

  const checkToggleItem = (index) => {
    task[index].isChecked = !task[index].isChecked;
    setTask([...task]);
    setTaskList([...task], true);
  };

  const getNoteList = async () => {
    const result = await AsyncStorage.getItem('noteList').then(res => JSON.parse(res));
    setNoteList(result);
  };

  const getTaskList = async () => {
    const result = await AsyncStorage.getItem('taskList').then(res => JSON.parse(res));
    setTask(result);
  };

  const handleOnNoteSearch = async text => {
    setSearchNote(text);
    if (!text) {
      setSearchNote('');
      setNoResult(false)
      return getNoteList();
    }

    if (noteList) {
      const filteredNotes = noteList.filter(n => n.title.toLowerCase().includes(text.toLowerCase()));
      setNoteList([...filteredNotes])
    } else {
      ToastAndroid.show("There is nothing to search", ToastAndroid.SHORT);
    }
  };

  const handleOnTaskSearch = async text => {
    setSearchTask(text);
    if (!text) {
      setSearchTask('');
      setNoResult(false)
      return getTaskList();
    }

    if (task) {
      const filteredTasks = task.filter(t => t.task.toLowerCase().includes(text.toLowerCase()));
      setTask([...filteredTasks])
    } else {
      ToastAndroid.show("There is nothing to search", ToastAndroid.SHORT);
    }
  };

  const onLogoChangeHandler = () => {
    setLogo(!logo);
  };

  const renderNoteItem = ({ item }) => {
    return (

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('EditNote', { item })} >
          <View style={logo ? styles.note : styles.grid_note}>
            <Text style={styles.note_title}>{item.title}</Text>
            <Text style={styles.note_body}>{item.body}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  };

  const renderTaskItem = ({ item, index }) => {
    return (

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('EditTask', { item })} >
          <View style={styles.list}>
            <Text style={{ color: '#000', marginHorizontal: 40, fontSize: 16 }}>{item.task} </Text>
            <View style={styles.checkbox} >
              <Checkbox status={item.isChecked ? "checked" : "unchecked"} onPress={() => { checkToggleItem(index) }} />
            </View>
          </View>
        </TouchableOpacity>
      </View>

    )
  };

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <EvilIcons name="search" size={40} style={styles.note_search_icon} />

      <TouchableOpacity onPress={onLogoChangeHandler} style={styles.grid_container}>

        {activeTab == 1 ?
          logo == true ?
            <Feather name="grid" size={30} style={styles.note_grid_icon} />
            : <FontAwesome5 name="equals" size={30} style={styles.note_grid_icon} />
          : null}

      </TouchableOpacity>

      <View style={styles.search}>
        <TextInput style={{ color: '#000' }} placeholder=' Search... ' placeholderTextColor={'#000'} onChangeText={activeTab == 1 ? handleOnNoteSearch : handleOnTaskSearch} />
      </View>

      <View style={styles.nav}>
        <TouchableOpacity style={activeTab == 1 ? styles.nav_bar : { marginHorizontal: 40 }} onPress={noteTab}>
          <Text style={activeTab == 1 ? styles.nav_text : styles.nav_text_left}>Note</Text>
        </TouchableOpacity>

        <TouchableOpacity style={activeTab == 2 ? styles.nav_bar : { marginHorizontal: 40 }} onPress={taskTab}>
          <Text style={activeTab == 2 ? styles.nav_text : styles.nav_text_left}>ToDoList</Text>
        </TouchableOpacity>
      </View>

      {activeTab == 1 && <View>

        <View style={styles.note_container}>

          <FlatList
            data={noteList}
            renderItem={renderNoteItem}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={() => <Text style={{ textAlign: 'center', marginVertical: 30, fontSize: 35 }}> No Notes Found </Text>}
            numColumns={logo ? 2 : 1}
            key={logo ? '_': '#'}
            showsVerticalScrollIndicator={false}
          />

        </View>

        <View style={styles.note_plus}>
          <EvilIcons name="plus" size={60} color="#1aa7ec" onPress={() => navigation.navigate('CreateNote')} />
        </View>

      </View>}

      {activeTab == 2 && <View>

        <View style={styles.task_container}>

          <FlatList
            data={task}
            renderItem={renderTaskItem}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={() => <Text style={{ textAlign: 'center', marginVertical: 30, fontSize: 35 }}> No Tasks Found </Text>}
            showsVerticalScrollIndicator={false}
          />

        </View>

        <View style={styles.task_plus}>
          <EvilIcons name="plus" size={60} color="#000" onPress={() => navigation.navigate('CreateTask')} />
        </View>

      </View>}

    </SafeAreaView>
  );
}