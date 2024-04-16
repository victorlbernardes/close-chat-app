import React from "react";
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';

import ChatBubble from "react-native-chat-bubble";

export default function ChatMessageItem({ id, isOwnMessage, message }) {

    const incomingMessageColor = '#FFD580';
    return (
        <View style={styles.containerChat}>

            <ScrollView>
                {isOwnMessage ? (
                    <ChatBubble
                        isOwnMessage={isOwnMessage}
                        bubbleColor="#FF7518"
                        tailColor="#FF7518"
                        withTail={true}
                        style={styles.textOwn}
                    >
                        <Text style={styles.textOwn}>{message}</Text>
                    </ChatBubble>
                ) : (
                    <ChatBubble
                        isOwnMessage={isOwnMessage}
                        bubbleColor='#FFD580'
                        tailColor='#FFD580'
                        withTail={true}
                        style={styles.text}
                    >
                        <Text style={styles.textOwn}>{message}</Text>
                    </ChatBubble>
                )}

            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    containerChat: {
        marginTop: 1,
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
    bottomBar: {
        flexDirection: 'row',
        padding: 10,
        height: 60,
        marginBottom: 36,
    },

});