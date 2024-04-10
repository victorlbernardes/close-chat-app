import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Profile from '../Profile'
import Room from '../Room'
import Chat from '../Chat'

const Tab = createBottomTabNavigator();

export default function Menu() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'black',
                tabBarActiveBackgroundColor: '#FF7518',
                tabBarInactiveBackgroundColor: '#FFD580',
                tabBarStyle: [
                    {
                        "display": "flex"
                    },
                    null
                ]
            }}
        >
            <Tab.Screen name="Room"
                component={Room}
                options={{
                    tabBarLabel: 'Salas',
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="room" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="comments" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="person" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}