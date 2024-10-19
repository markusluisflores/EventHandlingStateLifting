import React from "react";
import { Text, View } from "react-native";

function ToDoList({ tasks }) {

    return (
        <View>
            {tasks.map((task) => {
                return (
                    <View>
                        <Text>{task}</Text>
                    </View>
                )
            })}
        </View>
    );
}

export default ToDoList;