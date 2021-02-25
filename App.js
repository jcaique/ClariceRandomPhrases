import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import * as Speech from 'expo-speech' //importando tudo do speech (fala frases)

import clarice from './assets/clarice.png' //buscando a imagem

//ActivityIndicator --> aqueles icones de espera
//useState é um React Hook

export default function App() {

  const [falando, setFalando] = useState(false) //isso é um uso de hooks

  let frases = [
    "Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro.",
    "Que ninguém se engane, só se consegue a simplicidade através de muito trabalho.",
    "Tenho várias caras. Uma é quase bonita, outra é quase feia. Sou um o quê? Um quase tudo.",
    "A gente tem o direito de deixar o barco correr. As coisas se arranjam, não é preciso empurrar com tanta força.",
    "Amar não acaba. É como se o mundo estivesse a minha espera. E eu vou ao encontro do que me espera.",
    "Mas há a vida que é para ser intensamente vivida. Há o amor. Que tem que ser vivido até a última gota. Sem nenhum medo. Não mata.",
    "Toda mulher leva um sorriso no rosto e mil segredos no coração.",
    "Não tenho tempo pra mais nada, ser feliz me consome muito.",
    "Ela acreditava em anjo e, porque acreditava, eles existiam."
  ]

  const iniciaFala = () => {
    setFalando(true)
  }

  const finalizaFala = () => {
    setFalando(false)
  }

  function falar() {
    let frase = frases[parseInt(Math.random() * frases.length)]
    Speech.speak(frase, {
      language: 'pt',
      onStart: iniciaFala,
      onDone: finalizaFala
    })
  }

  function parar() {
    Speech.stop()
  }

  return (
    <SafeAreaView style={styles.Principal}>
      <Text style={styles.Titulo}>
        Fala Clarisse!
        &nbsp;<FontAwesome name='comment-o' size={50} />
      </Text>
      <Image source={clarice} style={styles.Imagem} />
      
      {/*condicionando o aparecimento do icone*/}
      {falando && <ActivityIndicator size='large' color='#00ff00' />}

      <FontAwesome.Button
        name='volume-up'
        backgroundColor="#0274d8"
        onPress={falar}
        styles={styles.Botao}>Ouvir a frase</FontAwesome.Button>

      <FontAwesome.Button
        name='stop-circle' 
        onPress={parar}
        backgroundColor={!falando ? '#cccccc' : '#d9534f'} //operador ternário
        disabled={!falando}
        styles={styles.Botao}>Parar</FontAwesome.Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  Principal: {
    flex: 1, //
    flexDirection: 'column', //
    justifyContent: 'space-around', //
    alignItems: 'center' //
  },

  Titulo: {
    color: '#1a287e',
    fontSize: 30
  },

  Imagem: {
    height: 400,
    width: '100%',
    resizeMode: 'center'
  },

  Botao: {
    width: 150,
    height: 30,
  }

})

//SafeAreaViewc oloca a area visivel pro usuario 
//styles usa a folha de estilo (StyleSheet) para definir nossos 
