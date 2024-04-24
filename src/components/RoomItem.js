import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';


import { useNavigation } from '@react-navigation/native'

export default function RoomItem({ image, name, description, location, members }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Message', {
            profile: image,
            profileDescription: name,
        })}>
            <View style={styles.container}>
                <Image
                    source={image}
                    style={{ width: 120, height: 100 }}
                    resizeMode="contain"
                />
                <View style={styles.content}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <View style={styles.innerContent}>
                        <Text style={styles.subtitle}>Distância: {location},  </Text>
                        {members > 1 ? (
                            <Text style={styles.subtitle}>{members} membros</Text>
                        ) : (
                            <Text style={styles.subtitle}>{members} membro</Text>
                        )}
                    </View>
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
        fontSize: 25,
        fontWeight: "bold",
        color: 'black',
        marginBottom: 15,
        textAlign: 'center'
    },

    description: {
        fontSize: 15,
        color: 'black',
        marginBottom: 5,
        textAlign: 'justify'
    },
    innerContent: {
        fontSize: 16,
        color: "#000",
        flexDirection: "row",
        alignItems: 'flex-start',

    },
    subtitle: {
        fontSize: 12,
        color: 'black',
        marginBottom: 5,
        textAlign: 'justify'
    },
});