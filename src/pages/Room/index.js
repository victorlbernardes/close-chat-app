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

import RoomList from '../../data/roomList';

import { useNavigation } from '@react-navigation/native'

import RoomItem from '../../components/RoomItem';
import SeparatorItem from '../../components/SeparatorItem';


export default function Room() {

    const navigation = useNavigation();
    
    const rooms = RoomList.room;
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={rooms}
                renderItem={({ item }) => <RoomItem {...item} />}
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
    },
});
