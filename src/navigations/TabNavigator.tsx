import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen, faHome, faImages, faSearch, faBell, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Write from '../screens/Write';
import Home from '../screens/Home';
import AddPicture from '../screens/AddPicture';
import Search from '../screens/Search';
import Notify from '../screens/Notify';

const Tab = createBottomTabNavigator();

class TabNavigator extends React.Component {
    render() { 
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }: { focused: boolean, color: string, size: number }) => {
                        const icons: { [routeName: string]: IconDefinition } = {
                            Home: faHome,
                            Search: faSearch,
                            Notify: faBell,
                            AddPicture: faImages,
                            Write: faPen,
                        };
                        return (
                            <FontAwesomeIcon 
                                icon={icons[route.name]} 
                                color={color} 
                                size={25}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'red',
                    inactiveTintColor: 'gray',
                    showLabel: false,
                }}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="AddPicture" component={AddPicture} />
                <Tab.Screen name="Notify" component={Notify} />
                <Tab.Screen name="Write" component={Write} />
            </Tab.Navigator>
        );
    }
}

export default TabNavigator;