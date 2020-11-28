import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import AddPicture from '../screens/AddPicture';
import PostDetail from'../screens/PostDetail';

const Stack = createStackNavigator();

class MainNavigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="TabNavigator"
                        component={TabNavigator}
                        options={{ title: 'React Native Board' }}
                    />

                    <Stack.Screen
                        name="AddPicture"
                        component={AddPicture}
                        options={{ title: 'Add Picture' }}
                    />

                    <Stack.Screen
                        name="PostDetail"
                        component={PostDetail}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default MainNavigator;