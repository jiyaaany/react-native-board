import { faTextWidth } from '@fortawesome/free-solid-svg-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TabNavigatorParams } from '../types/navigation';

type P = {
    navigation: StackNavigationProp<TabNavigatorParams, 'Home'>;
};

class Home extends React.Component<P> {
    render() {
        // console.log(Object.keys(this.props));
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>홈</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddPicture')}>
                    <Text>사진 추가</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetail', {id: 1})}>
                    <Text>게시글</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Home;