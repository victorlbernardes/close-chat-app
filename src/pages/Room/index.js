import React from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import RoomList from '../../data/roomList';

import { useNavigation } from '@react-navigation/native'

import RoomItem from '../../components/RoomItem';
import SeparatorItem from '../../components/SeparatorItem';
import Icon from 'react-native-vector-icons/FontAwesome';


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
