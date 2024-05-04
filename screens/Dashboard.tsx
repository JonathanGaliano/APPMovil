import {View, StyleSheet, FlatList, Text, ActivityIndicator, Alert,} from "react-native";
    import React from "react";
    import Card, { StaticProps } from "../components/static-data";
    import { usePosts } from "../hooks/usePosts";
    
    export default function Dashboard() {
        const { data, isLoading } = usePosts();

        const renderStories = async (item: StaticProps) => {
                await fetch("http://192.168.104.137:3001//posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item)
            });
        };
    
        return (
        <View>
            {isLoading && <ActivityIndicator size="large" color="red"/>}

            <FlatList
            data={data}
            renderItem={({ item }) => (
                <Card {...item} handlePress={renderStories} />
            )}
            keyExtractor={(item, index) => index.toString()}
        
            />

        </View>
        );
    }
    
    const styles = StyleSheet.create({
        scrollContainer: {
        backgroundColor: "lightblue",
        height: 210,
        width:100,
        },

        // loading: {
        //     position: 'absolute',
        //     top:40,
        //     justifyContent:"center",
        //     alignItems:"center",
        //     backgroundColor:"blue",
        //     width: 400
        // }
        // container: {
        //     backgroundColor:"red",
        //     position:"absolute",
        //     top:65,
        // }
        // FlatList: {
        //     flex: 1,
        //     marginHorizontal: 5,
        //     height:10,
        // },
    });