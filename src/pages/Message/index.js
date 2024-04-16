import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    FlatList
} from 'react-native';
import ChatMessageItem from '../../components/ChatMessageItem';

import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native'

import messageListData from '../../data/messageList';

export default function Message() {
    const navigation = useNavigation();

    let [typeText, setTypeText] = useState("");
    let [messageList, setMessageList] = useState(messageListData.message);
    let [lastMessageId, setLastMessageId] = useState(0);

    const sendAction = () => {
       let newId = messageList[messageList.length-1].id + 1; 
        let newMessage = {id:newId, isOwnMessage:true, message:typeText};
        setMessageList(messageList => [...messageList, newMessage]);
        setTypeText("")
        setLastMessageId(newId);
    };
    return (

        <View style={styles.container}>
            <View style={styles.containerHeaderInfo}>
                <Text>NOME DO CANAL</Text>
            </View>
            <View style={styles.containerChat}>

                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={messageList}
                        renderItem={({ item }) => <ChatMessageItem {...item} />}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.bottomBar}>
                    <View style={styles.containerText}>
                        <TextInput
                            placeholder="Digite sua mensagem..."
                            onChangeText={(value) => {
                                setTypeText(value)
                              }}
                            value={typeText} />
                    </View>
                    <Icon.Button
                        name={'send'}
                        color='#FF7518'
                        style={styles.bottomBarSendButton}
                        onPress={sendAction}
                    >
                    </Icon.Button>
                </View>
            </KeyboardAvoidingView>
        </View>

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
    bottomBar: {
        flexDirection: 'row',
        padding: 10,
        height: 60,
        marginBottom: 36,
    },
    containerText: {
        borderWidth: 1,
        borderColor: '#FF7518',
        backgroundColor: "white",
        fontSize: 16,
        padding: 10,
        height: 50,
        marginBottom: 36,
        flex: 2
    },
    bottomBarSendButton: {
        backgroundColor: '#FFE5B4',
        paddingBottom: 15,
        height: 50,

    }
});