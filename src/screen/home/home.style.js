import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    color: 'white',
  },

  nav: {
    flexDirection: 'row',
    position: 'absolute',
    top: 100,
    zIndex: 998
  },

  nav_bar: {
    marginHorizontal: 40,
    borderBottomWidth: 3,
    borderBottomColor: '#1aa7ec',
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3
  },

  nav_text: {
    color: '#1aa7ec',
    opacity: 1,
    fontSize: 30
  },

  nav_text_left: {
    color: '#000',
    fontSize: 30
  },

  search: {
    position: 'absolute',
    backgroundColor: '#ddd',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 360,
    borderRadius: 60,
    left: 25,
    top: -10,
    marginTop: 30,
    zIndex: 995,
    color: '#1aa7ec',
    paddingLeft: 55,
  },

  note_search_icon: {
    color: '#1aa7ec',
    position: 'absolute',
    top: 26,
    right: '80%',
    zIndex: 996
  },

  note_grid_icon: {
    color: '#1aa7ec',
    position: 'absolute',
    top: 29,
    right: '12%',
    zIndex: 996
  },

  text: {
    color: '#fff',
    fontSize: 20
  },

  content: {
    backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 10,
    opacity: 0.9,
    width: 130,
    borderRadius: 19
  },

  note_plus: {
    position: 'relative',
    top: -90,
    left: 170,
    zIndex: 997
  },

  task_plus: {
    position: 'relative',
    top: -92,
    left: 130,
    zIndex: 997
  },

  task_container: {
    position: 'relative',
    marginTop: 205,
    marginBottom: 90,
    width: 330,
  },

  list: {
    position: 'relative',
    backgroundColor: '#ddd',
    width: 330,
    marginBottom: 30,
    paddingVertical: 30,
    borderRadius: 20,
    paddingHorizontal: 30
  },

  checkbox: {
    marginTop: -27,
    marginHorizontal: -20
  },

  todo_plus: {
    position: 'absolute',
    top: 560,
    left: 260,
  },

  note_container: {
    marginTop: 200,
    position: 'relative',
    marginBottom: 90,
    width: 415
  },

  note: {
    borderRadius: 13,
    marginBottom: 20,
    width: 165,
    marginHorizontal: 22,
    borderColor: '#1aa7ec',
    borderWidth: 1,
  },

  note_title: {
    fontSize: 25,
    paddingLeft: 15,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    color: '#000',
    backgroundColor: '#ddd',
    borderBottomWidth: 1,
    borderColor: '#1aa7ec',
    marginBottom: 10,
    paddingVertical: 10,
    fontWeight: 500,
  },

  note_body: {
    fontSize: 20,
    paddingLeft: 15,
    color: '#000',
    marginBottom: 10,
    paddingVertical: 10
  },


});