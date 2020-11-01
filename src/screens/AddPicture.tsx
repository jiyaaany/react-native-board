import React from 'react';
import { Text, View } from 'react-native';

class AddPicture extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>사진추가</Text>
            </View>
        );
    }
}

export default AddPicture;