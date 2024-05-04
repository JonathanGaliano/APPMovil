import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

    export interface StaticProps {
    profilePicture: string;
    name: string;
    profileName: string;
    Description: string;
    handlePress?: (props: StaticProps) => void;
    }

    //componente statico donde se muestra
    export default function Static(props: StaticProps) {
    return (
        <TouchableOpacity
        onPress={() => props.handlePress?.(props)}
        style={styles.container}
        >

        <Text style={styles.name}>{props.name}</Text>
        <Image
            style={styles.profilePicture}
            source={{
            uri: props.profilePicture,
            }}
            width={100}
            height={100}
        />
        <Text style={styles.profileName}>{props.profileName}</Text>
        <Text style={styles.description}>{props.Description}</Text>
        </TouchableOpacity>

        
    );
    }

    const styles = StyleSheet.create({
    container: {
        position: "relative",
        backgroundColor: "grey",
        borderRadius: 12,
        marginHorizontal: 0,
        marginVertical: 80,
        padding: 0,
        width: 300,
        // height: 180,
        height: 600,
        top:0
        

    },
    profileName: {
        position: "absolute",
        // backgroundColor:"red",
        height:30,
        width:"100%",
        textAlign: "center",
        top:180,
        color: "#A2B813",
        fontSize: 15,
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    profilePicture: {
        position: "absolute",
        top: 30,
        left: 100,
        borderRadius: 50,
        borderColor: "black",
        borderWidth: 1,
        
    },

    name: {
        position: "absolute",
        color:"#E4E6DA",
        top:150,
        right: 50,
        fontSize: 25,
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: 5, height: -1 },
        textShadowRadius: 10,
    },

    description: {
        position: "absolute",
        textAlign:"center",
        marginTop:230,
        height: "10%",
        width:"100%",
        fontSize: 15,
        color:"white",
        textShadowColor: "rgba(0, 0, 0, 0.90)",
        textShadowOffset: { width: -2, height: 5 },
        textShadowRadius: 10
    }
    });