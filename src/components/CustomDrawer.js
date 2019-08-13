
import React, { Component } from 'react';
import { Image, StyleSheet, Text, } from 'react-native';
import { Container, View, Content, List, ListItem, Body, Left, Header } from 'native-base';
import {  } from 'react-navigation';

class CustomDrawer extends Component {
    render() {
        return(
            <Container>
                <Header style={{ height: 300, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
                    <Body>
                        <View style={styles.photoDrawer}>
                            <Image source={require('../images/spongebob.png')}
                            style={{ width: 140, height: 140, resizeMode: "cover", borderRadius: 70 }}/>
                        </View>
                        <View style={[styles.textCenter, { width: "100%", justifyContent: "center", marginTop: 20 }]}>
                            <Text style={{ textAlign: "center", fontWeight: 'bold' }}>Spongebob Squarepants</Text>
                            <Text style={{ textAlign: "center" }}> Kocheng Orenn</Text>
                            <Text style={{ textAlign: "center" }}> Palangka Raya</Text>
                        </View>
                    </Body>
                </Header>
                <Content>
                    <List>
                        <View>
                            <ListItem onPress={() => this.props.navigation.navigate('LeaderBoards')}>
                                <Left>
                                    <Image source={require('../images/crown.png')} style={{ width: 30, height: 30, marginRight: 10, marginTop: -5 }} />
                                    <Text>LeaderBoards</Text>
                                </Left>
                            </ListItem>
                            <ListItem onPress={() => this.props.navigation.navigate('Login')}>
                                <Left>
                                    <Image source={require('../images/logout.png')} style={{ width: 30, height: 30, marginRight: 10, marginTop: -5, }} />
                                    <Text>Logout</Text>
                                </Left>
                            </ListItem>
                        </View>
                    </List>
                </Content>
            </Container>
        )
    }
}

export default CustomDrawer

const styles = StyleSheet.create({
    photoDrawer: {
        width: 140,
        height: 140,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#FFFFFF",
        borderRadius: 70
    },
    textCenter: {
        justifyContent: "center"
    },
});