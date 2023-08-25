import { NavigationContainer } from '@react-navigation/native';
import CreateTask from '../screen/createTask/createTask';
import CreateNote from '../screen/createNote/createNote';
import { Home } from "../screen/home/home";
import { createStackNavigator } from '@react-navigation/stack';
import EditNote from '../screen/editNote/editNote';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EditTask from '../screen/editTask/editTask';

const Stack = createStackNavigator();

export default function NavigationStack() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Note" component={Home}
          options={{ headerRight: () => (<FontAwesome name="sticky-note-o" size={24} color="#000" style={{ marginRight: 20 }} />) }} />
        
        <Stack.Screen name="CreateNote" component={CreateNote}
          options={{ headerRight: () => (<Ionicons name="create-outline" size={24} color="#000" style={{ marginRight: 20 }} />) }} />

        <Stack.Screen name="EditNote" component={EditNote}
          options={{ headerRight: () => (<MaterialCommunityIcons name="circle-edit-outline" size={24} color="black" style={{ marginRight: 20 }} />) }} />

        <Stack.Screen name="CreateTask" component={CreateTask}
          options={{ headerRight: () => (<Ionicons name="create-outline" size={24} color="#000" style={{ marginRight: 20 }} />) }} />

        <Stack.Screen name="EditTask" component={EditTask}
          options={{ headerRight: () => (<MaterialCommunityIcons name="circle-edit-outline" size={24} color="black" style={{ marginRight: 20 }} />) }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

