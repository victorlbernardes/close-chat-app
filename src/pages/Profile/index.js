import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.profileInfo}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={require('../../assets/profile.png')} // Substitua por um path válido para a foto do usuário
                        style={styles.avatar}
                    />
                    <TouchableOpacity style={styles.editIcon}>
                        <Icon name="edit" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Nome: </Text>
                    <Text style={styles.value}>Ademir</Text>
                    <TouchableOpacity style={styles.editIcon}>
                        <Icon name="edit" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Descrição:</Text>
                    <Text style={styles.value}>Flamenguista e Nerd</Text>
                    <TouchableOpacity style={styles.editIcon}>
                        <Icon name="edit" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.floatingButton}>
                <Icon name="plus" size={30} color="white" />
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:20,
      },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    profileInfo: {
        marginTop: 20,
    },
    fieldContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 16,
        color: '#666',
        flex: 1,
        marginRight: 10,
    },
    editIcon: {
        backgroundColor: '#FF7518',
        borderRadius: 10,
        padding: 10,
    },
    logoutButton: {
        backgroundColor: '#FF7518',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'green',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

});