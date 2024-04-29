// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

// const UserProfileForm = () => {
//   const [profilePicture, setProfilePicture] = useState('');
//   const [image, setPostimage] = useState('');
//   const [profileName, setUsername] = useState('');
//   const [postPicture, setPostPicture] = useState('');
//   const handleSubmit = async () => {
//     const formData = {
//       profilePicture,
//       image,
//       profileName,
//       postPicture,
//     };

//     try {
//       const response = await fetch("http://192.168.198.137:3001/posts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log("Datos enviados correctamente");
//         Alert.alert("Éxito", "Los datos se han enviado correctamente al servidor.");
//       } else {
//         console.error("Error al enviar los datos al servidor");
//         Alert.alert("Error", "Ha ocurrido un error al enviar los datos al servidor.");
//       }
//     } catch (error) {
//       console.error("Error en la solicitud:", error);
//       Alert.alert("Error", "Ha ocurrido un error en la solicitud.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Foto de perfil"
//         value={profilePicture}
//         onChangeText={setProfilePicture}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Foto de publicación"
//         value={image}
//         onChangeText={setPostPicture}
//       />
//       {/* <TextInput
//         style={styles.input}
//         placeholder="ggg"
//         value={postPicture}
//         onChangeText={setPostimage}
//       /> */}
//       <TextInput
//         style={[styles.input, styles.lastInput]}
//         placeholder="Nombre de usuario"
//         value={profileName}
//         onChangeText={setUsername}
//       />

//       <Button title="Publicar" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     bottom:80,
//     position:  "absolute",
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 0,
//     right:100
//   },
//   input: {
//     fontSize: 14,
//     backgroundColor: 'white',
//     textAlign: 'center',
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 5,
//     padding: 10,
//     width: '100%',
//   },
//   lastInput: {
//     marginBottom: 20,
//   },
// });

// export default UserProfileForm;

import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Linking, Alert, TouchableOpacity, TextInput, Modal, ScrollView } from 'react-native';

const Form = () => {
  const [profilePicture, setProfilePicture] = useState('');
  const [image, setPostimage] = useState('');
  const [profileName, setUsername] = useState('');
  const [postPicture, setPostPicture] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [newLink, setNewLink] = useState({ url: "", text: "" });
  const [link, setLink] = useState([
    { url: 'https://github.com/', text: 'Github' },
    { url: 'https://www.front-endmentor.io/', text: 'Frontendmentor' },
    { url: 'https://www.linkedin.com/feed/', text: 'Linkedin' },
    { url: 'https://www.twitter.com', text: 'Twitter' }
  ]);

  const ButtonPress = (url) => {
    Linking.openURL(url); // Abre la URL en el navegador por defecto del dispositivo
  };

  const AddLink = () => {
    setModalVisible(true);
  };

  const SaveLink = () => {
    if (newLink.url && newLink.text) {
      // Agrega nuevo enlace al arreglo de enlaces
      setLink([...link, newLink]);
      setModalVisible(false);
      setNewLink({ url: "", text: "" });
    } else {
      Alert.alert("Error", "Por favor ingresa una URL y un texto para el nuevo enlace.");
    }
  };

  const handleCancelLinkPress = () => {
    setModalVisible(false);
    setNewLink({ url: "", text: "" });
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {/* Mostrar todos los enlaces */}
        {link.map((link, index) => (
          <Text key={index} style={styles.text} onPress={() => ButtonPress(link.url)}>{link.text}</Text>
        ))}
        
      </ScrollView>
      <View style={styles.Addlinks}>
          <Button title="+ New Link" onPress={AddLink} />
        </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Agregar un nuevo Link</Text>
            <TextInput
              style={styles.input}
              placeholder="URL"
              value={newLink.url}
              onChangeText={(text) => setNewLink({ ...newLink, url: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Text"
              value={newLink.text}
              onChangeText={(text) => setNewLink({ ...newLink, text: text })}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cancelarButton} onPress={handleCancelLinkPress}>
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.BotonG} onPress={SaveLink}>
                <Text style={styles.guardarText}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor:"red",
    flex: 1,
    position: "absolute",
    bottom:140,
    borderRadius: 10,
    padding: 0,
    width: '85%',
    height: "30%",
  
  },
  text: {
    backgroundColor: "#515454",
    borderWidth: 1,
    borderColor: "#7C7E7E",
    borderRadius: 5,
    padding: 10,
    width: "90%",
    justifyContent:"center",
    textAlign: "center",
    alignContent:"center",
    textAlignVertical:"center",
    marginBottom: 10,
    left:15,
    
  
  },
  Addlinks: {
    position:"absolute",
    // width:"70%",
    // height:90,
    marginTop:0,
    bottom:110,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row", // Cambiar a fila para mostrar los enlaces en línea
    flexWrap: "wrap", // Permitir el ajuste de línea de los enlaces
    backgroundColor:"red"
  },

  modalContent: {
    position:"absolute",
    top:290,
    left:32,
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    maxWidth: 300,
  },
  modalTitle: {
    // backgroundColor:"red",
    width:"100%",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.90)",
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 20
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "100%",
    opacity:0.7
    
  },
  buttonContainer: {
    // flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cancelarButton: {
    backgroundColor: "#E1E1E3",
    paddingVertical: 8,
    borderRadius: 5,
  },
  cancelText: {
    fontSize: 15,
    textAlign:"center"
  },
  BotonG: {
    backgroundColor: "#224FEA",
    paddingVertical: 9,
    borderRadius: 5,
  },
  guardarText:{
    fontSize: 15,
    color: "#fff",
    textAlign:"center"
  },
 
});

export default Form;