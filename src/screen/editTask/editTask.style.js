import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  create_task: {
    borderColor: "#000",
    borderWidth: 1,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 50,
    marginBottom: 20
  },

  task_create_button: {
    backgroundColor: '#000',
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    marginBottom: 20
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  modalView: {
    marginTop: 30,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 9,
  },

  button: {
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: '#000',
    marginVertical: 10
  },

  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },


});