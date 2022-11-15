// import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, Button, TouchableOpacity, TextInput, Image } from 'react-native';
//import { styles } from './styles';
// import { Gatinho } from './assets/src/components/Gatinho';
// import reactLogo from "./assets/tinyLogo.png";
// import reactCloud from "./assets/favicon.png";



// export default function App (){
//     const [nome, setNome] = useState("")
//     const [isTrue, setIsTrue] = useState(false)
//     const [isReact, setReact] = useState(false)

//     const handlePress = () => {
//         // console.log("Pressionei")
//         // alert("Pressionei")
//         setIsTrue(!isTrue)
//         setReact(!isTrue)

//     }

// return (
//     <View style={styles.container}>
//         <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png"}
//         } style={{width: 50, height: 50}}
// />
//         <Image 
//         source={isReact ? require('./assets/tinyLogo.png'): require ('./assets/favicon.png')}
//            style={{width: 50, height: 50}}/>
//         <Image source={reactLogo} style={{width:50, height: 50}}/>
//         <Image source={reactCloud} style={{width:50, height: 50}}/>


//         <Text style={styles.texto}>Hello World!!</Text>
//         <Gatinho nome="Mia"/>

//         <Text style={styles.texto}>Input:{nome}</Text>
//         <Text style={styles.texto}>{isTrue ? "É verdadeiro" : "É falso"}</Text>

//         <TextInput
//         style={{backgroundColor: "#fff", marginBottom: 20, width: "80%"}}
//         placeholder='Digite o nome do gatinho'
//         onChangeText={setNome}
//         value={nome}
//        />

//         <Button onPress={handlePress} title='Clique Aqui' color="#215491"/>

//         <TouchableOpacity onPress={() => setReact (isReact)} style={styles.botao}>
//             <Text style={styles.texto}>TouchableOpacity</Text>
//             </TouchableOpacity>
//      </View>
// )
// }

const Flexbox =() => {
    return (
        <View style = {styles.container}>
               <View style={styles.header}></View>

        <View style = {styles.container0}>
     
             <View style = {styles.bloco}></View>
             <View style = {styles.barra}></View>
      
             </View>

        <View style = {styles.container1}>
              <View style={styles.colunaDupla}></View>
              <View style={styles.colunaDupla1}></View>
              </View>  

         <View style={styles.meio}></View> 

        <View style = {styles.container2}>
     
              <View style={styles.quadrado}></View>
              <View style={styles.quadrado}></View>
              <View style={styles.quadrado}></View>
              <View style={styles.quadrado}></View>
              <View style={styles.quadrado}></View>
              <View style={styles.quadrado}></View>
     
              </View>

            <View style={styles.footer}></View>
 
    </View>
  
   )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#00CBB8",
   
    },   

    header: {
        height: 18,
        width: '100%',
        backgroundColor: "#D13354",
     
     },
     
     container0: {
        flex: 1,
        alignItems: 'center',
},   
    
    bloco: {
       height: 120,
       width: 120,
       backgroundColor: '#342754',
       marginTop: 20,
   
},
    
    barra: {
        height: 25,
        width: 150,
        backgroundColor: '#D14C4F',   
        margin: 10,

    },
    
    container1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      flexDirection: 'row',
      
 },


    colunaDupla: {
        height: '50%',
        width: '50%',
        backgroundColor: '#563E9A',
                
    },

    colunaDupla1: {
        height: '50%',
        width: '50%',
        backgroundColor: '#43D79E',
   
    },
    
    meio: {
        height: 18,
        width: '100%',
        backgroundColor: "#D13354",
        marginBottom: 50,
   
    },

    container2: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-around',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,

    },   
    
    quadrado: {
        height: 95,
        width: 95,
        backgroundColor: "#D13354",
        margin: 13,
  
    },

     footer: {
        height: 60,
        width: '100%',
        backgroundColor: '#342754',
        marginTop: 50,
        alignItems: 'flex-end',
    }

}
)

export default Flexbox