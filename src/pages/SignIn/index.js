import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Animatable.View
                animation="fadeInLeft"
                delay={500}
                style={styles.containerHeader}
            >
                <Text style={styles.message}>Bem-Vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp"
                style={styles.containerForm}
            >
                <Text style={styles.tilte}>Email</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}
                />

                <               Text style={styles.tilte}>Senha</Text>
                <TextInput
                    placeholder="Digite a senha"
                    style={styles.input}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Menu')}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('Welcome')}
                >
                    <Text style={styles.registerText}>Não Possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1832cf7',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    tilte: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#e1832cf7',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'

    },
    registerText:{
        color: '#a1a1a1'
    },

})