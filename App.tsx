/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text,SafeAreaView ,View, TouchableOpacity, Image, FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const products = [
  {
    id: 1,
    avatar_url: 'https://reactnative.dev/img/tiny_logo.png',
    description: 'Keep your eyes on the stars and your feet on the ground.',
    price: '500000',
    name: 'San Pham 1'
  },
  { id: 2,
    avatar_url: 'https://reactnative.dev/img/tiny_logo.png',
    description: 'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    price: '1500000',
    name: 'San Pham 2'
  },
];
const Stack = createNativeStackNavigator(); 
function App() { 
  const [selectedItem, setSelectedItem] = useState(null)
  return ( 
  <NavigationContainer> 
    <Stack.Navigator> 
      <Stack.Screen name="Product List" component={Screen1}/>
    <Stack.Screen name="Details" component={Screen2} /> 
  </Stack.Navigator> 
 </NavigationContainer> ); 
 };

function Screen1({navigation}) {
  return ( 
  <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
    
    <FlatList
      data={products}
     keyExtractor = {(item) => item.id.toString()}
     renderItem = {({item}) =>{
      return(
        <TouchableOpacity onPress={()=>navigation.navigate('Details',{item})}> 
        <View style = {styles.product}>
        <Image style = {styles.image}
        source={{uri: item.avatar_url}} />
        
        <View style = {{marginLeft: 20, flexDirection: 'column'} }>
          <Text style = {styles.textName}>
          <Text>{item.name}</Text>
         </Text>
         <Text style = {styles.textName}>
          <Text>{item.price}</Text>
         </Text>
        </View>
        </View>
        </TouchableOpacity>
      )
     }}
     />
  </SafeAreaView> ); 
     }
function Screen2({navigation, route}) { //route.params.name 
 return ( 
 <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
    <TouchableOpacity onPress={()=>navigation.navigate('Product List')}>
    <View style = {styles.product}>
        <Image style = {styles.image}
        source={{uri: route.params.item.avatar_url}} />
        
        <View style = {{marginLeft: 20, flexDirection: 'column'} }>
          <Text style = {styles.textName}>
          <Text>{route.params.item.name}</Text>
         </Text>
         <Text style = {styles.textName}>
          <Text>{route.params.item.price}</Text>
         </Text>
        </View>
        </View>
        <View style ={styles.product}>
          <Text style = {styles.textName}>Description: {route.params.item.description}</Text>
        </View>
    </TouchableOpacity>
 </SafeAreaView> 
   );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  product: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    width: 300,
    height: 100,
    marginTop: 10,
  },
  image:
  {
    width: 55,
    height: 55,
    marginLeft: 10,
  },
  textName:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  }
});
export default App;
