import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

function ToDoList({ tasks }) {

    return (
        <ScrollView>
            {tasks.map((task, index) => {
                return (
                    <Pressable key={index}>
                        <View style={[styles.task, styles.completed]}>
                            <Text style={styles.taskText}>{task}</Text>
                        </View>
                    </Pressable>
                )
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
});

export default ToDoList;