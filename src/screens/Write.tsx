import React from 'react';
import { Text, View } from 'react-native';

class Write extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>글쓰기</Text>
            </View>
        );
    }
}

export default Write;