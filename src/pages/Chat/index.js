import React from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import PersonalList from '../../data/personalList';

import { useNavigation } from '@react-navigation/native'

import PersonalChatItem from '../../components/PersonalChatItem';
import SeparatorItem from '../../components/SeparatorItem';
import Icon from 'react-native-vector-icons/FontAwesome';


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
            <TouchableOpacity style={styles.floatingButton}>
                <Icon name="plus" size={30} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#FFE5B4',
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
