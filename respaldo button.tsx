
// import { View, Button,Text, StyleSheet, Linking, Alert } from 'react-native';
// import React, { useState } from 'react';

// const Form = () => {
//   const handleButtonPress = (url) => {
//     Linking.openURL(url); // Abre la URL en el navegador por defecto del dispositivo
//     const [profilePicture, setProfilePicture] = useState('');
//     const [image, setPostimage] = useState('');
//     const [profileName, setUsername] = useState('');
//     const [postPicture, setPostPicture] = useState('');
//     const handleSubmit = async () => {
//       const formData = {
//         profilePicture,
//         image,
//         profileName,
//         postPicturee,
//       };
//     }
  
//       try {
//         const response = await fetch("http://192.168.198.137:3001/posts", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });
  
//         if (response.ok) {
//           console.log("Datos enviados correctamente");
//           Alert.alert("Éxito", "Los datos se han enviado correctamente al servidor.");
//         } else {
//           console.error("Error al enviar los datos al servidor");
//           Alert.alert("Error", "Ha ocurrido un error al enviar los datos al servidor.");
//         }
//       } catch (error) {
//         console.error("Error en la solicitud:", error);
//         Alert.alert("Error", "Ha ocurrido un error en la solicitud.");
//       }
//     };
//   return (
//     <>
//     <View style={styles.container}>
//       {/* aqui se asigna la URL deseada a cada botón */}

//       <View>
//         <Text style={styles.text} onPress={() => handleButtonPress('https://github.com/')}>Github</Text>
//         <Text style={styles.text} onPress={() => handleButtonPress('https://www.front-endmentor.io/')}>frontendmentor</Text>
//         <Text style={styles.text} onPress={() => handleButtonPress('https://www.linkedin.com/feed/')}>linkedin</Text>
//         <Text style={styles.text} onPress={() => handleButtonPress('https://www.twitter.com')}> Twitter </Text>
//       </View>

//       <Button title="Publicar" onPress={handleSubmit} />
//     </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor:"grey",
//     position:  "absolute",
//     // borderWidth: 2,
//     // borderColor: 'black',
//     borderRadius: 10,
//     padding: 25,
//     width: '85%',
//     height: "80%"
//     // bottom:0,
//   },

//   text: {
//     backgroundColor: "#515454",
//     marginTop:10,
//     top:"70%",
//     textAlign: "center",
//     borderWidth: 1,
//     borderColor: "#7C7E7E",
//     borderRadius: 5,
//     padding: 10,
//     width: "100%",
//     height: "14%"
//   }
// });

// export default Form;