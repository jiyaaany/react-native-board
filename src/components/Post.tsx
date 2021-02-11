import React from 'react';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image, View } from 'react-native';
import { PostInstance } from '../types/instance';

type P = {
    post: PostInstance
};

class Post extends React.Component<P> {
    render() {
        const { post } = this.props;
        return (
            <Card>
                <CardItem>
                    <Left>
                        {!!post.thumbnail && (
                            <Thumbnail source={{uri: post.thumbnail}} style={{width: 50, height: 50}} />
                        )}
                        <Body>
                            <Text>{post.title}</Text>
                            <Text note>{post.writer}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{uri: post.thumbnail}} style={{height: 200, width: null, flex: 1}} />
                </CardItem>
                <CardItem>
                    <View>
                        <Text>{post.content}</Text>
                    </View>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4 Comments</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Text>11h ago</Text>
                    </Right>
                </CardItem>
            </Card>
        );
    }
}

export default Post;