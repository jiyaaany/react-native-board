import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen, faHome } from '@fortawesome/free-solid-svg-icons';
import Write from '../screens/Write';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

class TabNavigator extends React.Component {
    render() { 
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }: { focused: boolean, color: string, size: number }) => (
                        <FontAwesomeIcon 
                            icon={route.name === 'Home' ? faHome : faPen} 
                            color={color} 
                        />
                    ),
                    tabBarLabel: route.name === 'Home' ? '홈' : '글쓰기',
                })}
                tabBarOptions={{
                    activeTintColor: 'red',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Write" component={Write} />
            </Tab.Navigator>
        );
    }
}

export default TabNavigator;