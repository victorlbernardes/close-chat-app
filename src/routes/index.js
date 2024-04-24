import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn  from '../pages/SignIn'
import Welcome from '../pages/Welcome'
import Menu from '../pages/Menu'
import Message from '../pages/Message'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{headerShown: false}}

            />
            <Stack.Screen
                name='SignIn'
                component={SignIn}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Menu'
                component={Menu}
                options={{
                    headerShown: false,
                    gestureEnabled: false
                }}
            />
            <Stack.Screen
                name='Message'
                component={Message}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}
