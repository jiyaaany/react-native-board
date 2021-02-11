import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, View, TouchableOpacity } from 'react-native';
import { TabNavigatorParams } from '../types/navigation';
import { Container, Header, Text, Body, Button, Title } from 'native-base';
import Post from '../components/Post';
import { PostInstance } from '../types/instance';

type P = {
    navigation: StackNavigationProp<TabNavigatorParams, 'Home'>;
};

type S = {
    posts: PostInstance[];
    isShowButton: boolean;
    prevScroll: number;
};

class Home extends React.Component<P, S> {
    state = {
        posts: [...Array(30).keys()].map((k: number) => k + 1).map((v: number) => ({
            id: v,
            title: `title${v}`,
            writer: `writer${v}`,
            thumbnail: 'http://via.placeholder.com/100x100',
            content: `content${v}content${v}content${v}content${v}content${v}content${v}content${v}content${v}content${v}content${v}`,
            reg_date: new Date().toString(),
        })),

        isShowButton: true,
        prevScroll: 0,
    };

    handleScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
        this.setState(({ prevScroll }) => ({
            prevScroll: nativeEvent.contentOffset.y,
            isShowButton: prevScroll >= nativeEvent.contentOffset.y,
        }));
    };
    
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>React Native Board</Title>
                    </Body>
                </Header>
                <ScrollView onScroll={this.handleScroll} scrollEventThrottle={16}>
                    {this.state.posts.map((post, index) => (
                        <TouchableOpacity key={index} onPress={() => {this.props.navigation.navigate('PostDetail', {id: post.id});}}>
                            <Post post={post} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                { this.state.isShowButton && (
                    <View style={{position: 'absolute', left: 0, right: 0, bottom: 50, justifyContent: 'center', flexDirection: 'row'}}>
                        <Button rounded warning large>
                            <Text>글쓰기</Text>
                        </Button>
                    </View>
                )}
            </Container>
        );
    }
}

export default Home;