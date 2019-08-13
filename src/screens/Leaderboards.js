import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { View, Container } from 'native-base'
import Leaderboard from 'react-native-leaderboard';

class LeaderBoards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {userName: 'Joe', highScore: 152},
                {userName: 'Jenny', highScore: 120},
                //...
            ] //can also be an object of objects!: data: {a:{}, b:{}}
        }
    }
    
    render() {
        return (
            <Container>
            <View style={styles.container}>
                <View style={styles.navbar}><Text style={{position: 'absolute', fontSize: 20, left: 26, top: 12, fontWeight: "bold"}} >LeaderBoards</Text></View>
                <View style={styles.yellowBox}>
                    <Text style={{position: 'absolute', color: '#FFFFFF', fontWeight: 'bold', left: 60, top: 30, fontSize: 18}}>Rank</Text>
                    <Text style={{position: 'absolute', color: '#FFFFFF', fontWeight: 'bold', left: 65, top: 50, fontSize: 18}}>100</Text>
                    <Image source={require('../images/spongebob.png')} style={{position: 'absolute', width: 60, height: 60, left: 126, top: 25, borderRadius: 50, backgroundColor: '#FFFAFA'}}/>
                    <Text style={{position: 'absolute', color: '#FFFFFF', fontWeight: 'bold', left: 100, top: 100, fontSize: 18}}>Khusni Jafar</Text>
                    <Text style={{position: 'absolute', color: '#FFFFFF', fontWeight: 'bold', right: 50, top: 30, fontSize: 18}}>Points</Text>
                    <Text style={{position: 'absolute', color: '#FFFFFF', fontWeight: 'bold', right: 55, top: 50, fontSize: 18}}>9999</Text>
                </View>
                <View style={styles.list}><Leaderboard 
                data={this.state.data} 
                sortBy='highScore' 
                labelBy='userName'/></View>
            </View>
            <View>
                <Image source={require('../images/home.png')} style={{ width: 40, height: 40, resizeMode: "cover", borderRadius: 70, left: 150 }}/>
                    <TouchableOpacity onPress={() =>this.props.navigation.navigate('Home')}><Text style={{left: 150}}> Home</Text></TouchableOpacity>
            </View>
            </Container>
        )
    }
}

export default LeaderBoards

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#FFFAFA',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navbar : {
        position: 'absolute',
        width: 411,
        height: 52,
        left: 0,
        top: 0,
        backgroundColor: '#A9A9A9',
    },
    yellowBox : {
        position: 'absolute',
        backgroundColor: '#20B2AA',
        width: 299,
        height: 132,
        top: 80,
        borderRadius: 10
    },
    list : {
        position: 'absolute',
        width: 350,
        top: 230,
    },
    
})
