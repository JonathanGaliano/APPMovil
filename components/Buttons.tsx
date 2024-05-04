import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Linking, Alert, TouchableOpacity, TextInput, Modal, ScrollView } from 'react-native';

const ButtonComponent = () => {
  // Variable newlink (Almacena información de un nuevo enlace)
  const [newLink, setNewLink] = useState({ url: "", text: "", profilePicture: "", profileName: "" });
  const [modalVisible, setModalVisible] = useState(false);  
  const [links, setLinks] = useState([]);

  //funciones
  const ButtonPress = (url) => {
    Linking.openURL(url);
  };
  const AddLink = () => {
    setModalVisible(true);
  };
  const SaveLink = async () => {
    if (newLink.url && newLink.profilePicture && newLink.text && newLink.profileName) {
      try {
        const response = await fetch('http://192.168.104.137:3001/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newLink),
        });

        if (response.ok) {
          const updatedLinks = [...links, newLink];
          setLinks(updatedLinks);
          setModalVisible(false);
          setNewLink({ url: "", text: "", profilePicture: "", profileName: "" });

          console.log('Nuevo enlace agregado:', newLink);
          Alert.alert('Éxito', 'El enlace se ha guardado correctamente.');
        } else {
          console.error('Error al enviar los datos al servidor');
          Alert.alert('Error', 'Ha ocurrido un error al enviar los datos al servidor.');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        Alert.alert('Error', 'Ha ocurrido un error en la solicitud.');
      }
    } else {
      Alert.alert("Error", "Por favor completa todos los campos.");
    }
  };

  const CancelLinkPress = () => {
    setModalVisible(false);
    setNewLink({ url: "", text: "", profilePicture: "", profileName: "" });
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {links.map((link, index) => (
          <Text key={index} style={styles.text} onPress={() => ButtonPress(link.url)}>{link.text}</Text>
        ))}
      </ScrollView>
      <View style={styles.Addlinks}>
      <TouchableOpacity onPress={AddLink} style={styles.button}>
  <Text style={styles.buttonText}>+ New Link </Text>
</TouchableOpacity>
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
              placeholder="URL / Profile Picture URL"
              value={newLink.url}
              onChangeText={(text) => setNewLink({ ...newLink, url: text, profilePicture: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Text / Profile Name"
              value={newLink.text}
              onChangeText={(text) => setNewLink({ ...newLink, text: text, profileName: text })}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cancelarButton} onPress={CancelLinkPress}>
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
    borderColor: "grey",
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
    marginTop:0,
    bottom:100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: '#9D63F0',
    width: 280,
    height:40,
    borderRadius: 5,
    alignItems:"center",
  justifyContent: "center"
},
buttonText: {
  fontSize: 16,
  color: 'white',
  
},

  modalContent: {
    position:"absolute",
    top:200,
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
    opacity:0.8
  },
  buttonContainer: {
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

export default ButtonComponent;
