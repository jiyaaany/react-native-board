import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigatorParams } from '../types/navigation';

type P = {
    navigation: StackNavigationProp<TabNavigatorParams, 'Home'>;
};

class Home extends React.Component<P> {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>홈</Text>
            </View>
        );
    }
}

export default Home;