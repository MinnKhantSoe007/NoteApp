import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  create_title: {
    borderColor: "#1aa7ec",
    borderWidth: 1,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 50,
    marginBottom: 20,
    paddingVertical: 5

  },

  create_body: {
    borderColor: "#1aa7ec",
    borderWidth: 1,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 50,
    marginBottom: 20,
    paddingVertical: 5
  },

  note_create_button: {
    backgroundColor: '#1aa7ec',
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
    backgroundColor: '#2196F3',
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