import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';


import { useNavigation } from '@react-navigation/native'

export default function PersonalChattem({ image, name, }) {

    const navigation = useNavigation();

    const handleItemPress = (name) => {
        alert("Abrir tela do chat da sala " + `${name}`);
    };

    return (
        <TouchableOpacity onPress={() => {handleItemPress(name);}}>
            <View style={styles.container}>
                <Image
                    source={require('../assets/profile.png')}
                    style={{ width: 50, height: 50 }}
                    resizeMode="contain"
                />
                <View style={styles.content}>
                    <Text style={styles.title}>{name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 20,
    },

    content: {
        flex: 1,
        marginLeft: 16,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'black',
        textAlign: 'justify'
    },
});