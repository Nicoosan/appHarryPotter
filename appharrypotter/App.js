import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts, 
 BalsamiqSans_700Bold_Italic,
  BalsamiqSans_700Bold,
  BalsamiqSans_400Regular
} from '@expo-google-fonts/dev';

export default function App() {

  let [fontsLoaded] =useFonts({
    BalsamiqSans_700Bold_Italic,
  BalsamiqSans_700Bold,
  BalsamiqSans_400Regular
  });

  if (!fontsLoaded){
    return <AppLoading/>;
  }else{
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Personagens de Harry Potter </Text>
       <FlatList
       data={arrayPersononagem}
       renderItem={({item})=>(
     <View>
     <Text>
     <Text style={styles.subtitulo}> Personagem: </Text> {item.Personagem}{'\n'}
     <Text style={styles.subtitulo}> Casa: </Text> {item.Casa}{'\n'}
     <Text style={styles.subtitulo}> Patrono: </Text> {item.Patrono}{'\n'}
     </Text>
     
     <Image style={styles.img}source={item.capa}/>
    </View>
  )}
  />
  </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignitens: 'center'
  },
  titulo: {
    fontSize: 30,
    color: '#8B0000',
    fontFamily: 'BalsamiqSans_700Bold',
    margimTop: 10,
    margimBottom: 20,
    textAlign: 'center',
  },
  img:{
    borderRadius: 38,
    width: 288,
    heigth: 300
  },
  subtitulo:{
    fontSize: 20,
    fonyWeight: '100',
    fontFamily: 'BalsamiqSans_400Regular'
  },

});

const arrayPersononagem =[
  {
    Personagem: 'Harry Potter',
    Casa: 'Grifinória',
    Patrono: 'Cervo',
    capa: require('./harry.jpg')
  },
  {
    Personagem: 'Hermione Granger',
    Casa: 'Grifinória',
    Patrono: 'Lontra',
    capa: require('./granger.jpg')
  },
  {
    Personagem: 'Rony Weasley',
    Casa: 'Grifinória',
    Patrono: 'Cachorro',
    capa: require('./rony.jpg')
  },
  {
    Personagem: 'Draco Malfoy',
    Casa: 'Sonserina',
    Patrono:'indefinido',
    capa: require('./draco.jpg')
  },
  {
    Personagem: 'Ninfadora Tonks',
    Casa: 'Lufa-Lufa',
    Patrono: 'Lebre e Lobo',
    capa: require('./tonks.jpg')
  },
]
