// import { View, Text, Style } from "react-native";
// import React, { useEffect, useState } from "react";
// import pokemonServices from "../../services/pokemonServices";
// import { FlatList } from "react-native-gesture-handler";
// import { useIsFocused } from "@react-navigation/native";
// import { StyleSheet } from "react-native";
// import { Button } from "react-native-paper";


// export const PokemonHome = ({navigation}) => {

//   const [pokemonList, setPokemonList] = useState();
//   const isFocus = useIsFocused();

//   useEffect(() => {
//     if (isFocus)
//     pokemonServices.getPokemonList().then((res) => {
//       console.log( "Pokemon", res.data);
//       setPokemonList(res.data.results)

//     })
//   }, [isFocus] );

//   const renderPokemonItem = (item) => {
//     console.log("item", item)
//     return (

//       <View>
//         <Text style={styles.pokemon_name}> Name: {item.item.name}</Text>
//       </View>
      
//     )
    
//   };

//   return (
//     <View>
//       <Text>The Names Are: </Text>

//       <FlatList
//             data={pokemonList}
//         renderItem={renderPokemonItem}
//       />

//       <Button onPress = {()=>navigation.navigate("Note")}> Go To Note </Button>
      
//     </View>
//   )
// }


// export const styles = StyleSheet.create({

//   pokemon_name: {
//   paddingTop: 10
// }





// });