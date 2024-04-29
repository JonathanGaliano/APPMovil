import {View, StyleSheet, FlatList, Text, ActivityIndicator, Alert,} from "react-native";
    import React from "react";
    import Card, { StaticProps } from "../components/static-data";
    import { usePosts } from "../hooks/usePosts";
    
    export default function Dashboard() {
        const { data, isLoading } = usePosts();

        // const renderStories = (item: StaticProps) => {
        // Alert.alert("Viendo la historia de ", item.profileName);
        // };

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
            {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
            {/* <FlatList
            data={data}
            renderItem={({ item }) => (
                <Card {...item} handlePress={renderStories} />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            /> */}

        <FlatList
        data={data}
        renderItem={({ item }) => (
            <Card {...item} handlePress={renderStories} />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
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

        // FlatList: {
        //     flex: 1,
        //     marginHorizontal: 5,
        //     height:10,
        // },
    });