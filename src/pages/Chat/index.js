import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image
} from 'react-native';

import PersonalList from '../../data/personalList';

import { useNavigation } from '@react-navigation/native'

import PersonalChatItem from '../../components/PersonalChatItem';
import SeparatorItem from '../../components/SeparatorItem';


export default function Chat() {

    const navigation = useNavigation();
    
    const rooms = PersonalList.chat;
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={rooms}
                renderItem={({ item }) => <PersonalChatItem {...item} />}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={SeparatorItem}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#FFE5B4',
    },
});
