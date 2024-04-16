import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity
} from 'react-native';
import ChatBubble from "react-native-chat-bubble";

export default function PersonalChatItem({ image, name }) {

    const handleItemPress = (name) => {
        alert("Abrir tela do chat da sala " + `${name}`);
    };

    return (
        <ScrollView>
                    <ChatBubble
                        isOwnMessage={true}
                        bubbleColor="#FF7518"
                        tailColor="#FF7518"
                        withTail={true}
                        style={styles.chatBubble}
                    >
                        <Text style={styles.textOwn}>Eai tudo bem?</Text>
                    </ChatBubble>
                    <ChatBubble
                        isOwnMessage={false}
                        bubbleColor="#FFD580"
                        withTail={true}
                        style={styles.chatBubble}
                    >
                        <Text style={styles.text}>Opa, tudo sim e com você?</Text>
                    </ChatBubble>
                    <ChatBubble
                        isOwnMessage={true}
                        bubbleColor="#FF7518"
                        tailColor="#FF7518"
                        withTail={true}
                        style={styles.chatBubble}
                    >
                        <Text style={styles.textOwn}>Tudo na paz Tudo certo para hoje a noite? Que horas você vai passar aqui?.</Text>
                    </ChatBubble>
                    <ChatBubble
                        isOwnMessage={false}
                        bubbleColor="#FFD580"
                        withTail={true}
                        style={styles.chatBubble}
                    >
                        <Text style={styles.text}>Sim vou passar ai as 19 ou 19:30</Text>
                    </ChatBubble>
                </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE5B4'
    },
    containerHeaderInfo: {
        paddingTop: 40,
        backgroundColor: 'red'
    },
    containerChat: {
        marginTop: 20,
        flex: 1,
        paddingHorizontal: 10
    },
    chatBubble: {
        padding: 10,
    },
    text: {
        color: 'black',
    },
    textOwn: {
        color: 'white',
    },
});