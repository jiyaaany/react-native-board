import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigatorParams } from 'src/types/navigation';

type P = {
    navigation: StackNavigationProp<StackNavigatorParams, 'PostDetail'>;
    route: RouteProp<StackNavigatorParams, 'PostDetail'>;
};

class PostDetail extends React.Component<P> {
    render() {
        return(
            <View>
                <Text>
                    게시글 {this.props.route.params.id}
                </Text>
            </View>
        );  
    }
}

export default PostDetail;