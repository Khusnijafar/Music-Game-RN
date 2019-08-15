import React, { Component } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, AsyncStorage, Alert } from "react-native";
import { Container, View, Button, Header, Left, Right } from "native-base";
var Sound = require('react-native-sound');
import { connect } from "react-redux";
import { getPattern } from '../public/redux/action/pattern'
import { getSound } from '../public/redux/action/sound'
import { insertScore } from '../public/redux/action/boardScore'

class Home extends Component {
    constructor(props) {
      super(props)
      this.state = {
        button1: null,
        button2: null,
        button3: null,
        button4: null,
        pattern: null,
        buttonNumber: null,
        poin: 0,
        activepoint: false,
        combo: 0,
        poinplus: null,
        showpoin: false
      }
    }

    addPoint = () => {
      this.setState({
        poin: this.state.poin + this.state.poinplus,
        activepoint: false,
        showpoin: true,
        pattern: null
      })
    }
    
    sound1 = () => {
      console.warn(this.props.id_user);
        this.state.button1.stop(() => {
        this.state.button1.play()
      })
      if (this.state.pattern === 1) {
        if (this.state.activepoint) {
          this.addPoint()
        } 
      } else {
        Alert.alert('You Lose!')
        this.savePoint()
      }
    }

    sound2 = () => {
      console.warn(this.props.id_user);
      this.state.button2.stop(() => {
        this.state.button2.play()
      })
      if (this.state.pattern === 2) {
        if (this.state.activepoint) {
          this.addPoint()
        } 
      } else {
        Alert.alert('You Lose!')
          this.savePoint()
      }
    }

    sound3 = () => {
      this.state.button3.stop(() => {
        this.state.button3.play()
      })
      if (this.state.pattern === 3) {
        if (this.state.activepoint) {
          this.addPoint()
        } 
      } else {
        Alert.alert('You Lose!')
          this.savePoint()
      }
    }

    sound4 = () => {
      this.state.button4.stop(() => {
        this.state.button4.play()
      })
      if (this.state.pattern === 4) {
        if (this.state.activepoint) {
          this.addPoint()
        } 
      } else {
        Alert.alert('You Lose!')
          this.savePoint()
      }
    }

    savePoint = async () => {
      this.stopTimeout()
      await this.props.dispatch(insertScore({
          id_user: this.props.id_user,
          score: this.state.poin
      }))
        .then((res) => {
          this.props.navigation.navigate('LeaderBoards')
        })
        .catch((err) => {
          console.warn(err);
          alert('Sorry, internal sever error')
        })
    }
    stopTimeout = () => {
      clearTimeout(timecombo)
      clearTimeout(timepattern)
    }

    startPattern = async () => {
      await this.props.dispatch(getPattern())
        .then((res) => {
          let patterns = res.action.payload.data.result
          if (patterns) {
            let lengthdelay = 3000
            lengthcombo = patterns.length
            patterns.map((item) => {
              let delay = item.delay
              let childpattern = item.pattern.split("")              
              childpattern.push(0)
              timecombo = setTimeout(() => {
                 this.setState({
                   poinplus: item.poinplus
                 })

                 childpattern.map((item2, index) => {
                   timepattern = setTimeout(() => {
                     if (item2 === 0) {
                       this.setState({
                         combo: this.state.combo + 1
                       })
                       if (!this.props.id_user) {
                         Alert.alert('You should login')
                         this.stopTimeout()
                         delay = 0
                         lengthdelay = 0
                         childpattern = null
                         this.props.navigation.navigate('Login')
                         return false
                       }
                       if (parseInt(this.state.combo) === parseInt(lengthcombo)) {
                         Alert.alert('Game selesai')
                         this.savePoint()
                       }
                     }
                     this.setState({
                       pattern: parseInt(item2),
                       activepoint: true,
                       showpoin: false
                     })                     
                   }, index * delay)
                 })
              }, lengthdelay)
                lengthdelay += childpattern.length * delay + 3000
            })
          }
        })
      .catch((err) => {
      console.warn(err);
      })
    }

    componentWillMount = async () => {
      await this.props.dispatch(getSound())
          .then((res) => {
           let music = res.action.payload.data.result
            if (music) {          
              music.map((item) => {
                var whoosh = new Sound(item.sound, Sound.MAIN_BUNDLE, (error) => {
                  if (error) {
                    console.warn('failed to load the sound', error);
                    return;
                  }
                  console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
                })
                this.setState({
                  ["button" + item.no_button]: whoosh
                })
              })
            }
            this.startPattern()
            const { navigation } = this.props
            this.focusListener = navigation.addListener('didFocus', () => {
              this.setState({
                pattern: null,
                buttonNumber: null,
                poin: 0,
                activepoint: false,
                combo: 0,
                poinplus: null,
                showpoin: false
              })
              this.startPattern()
            })
          })
          .catch((err) => {
            console.warn(err)
            Alert.alert("Program Bermasalah coba ulangi lagi")
        })
    }

    render() {
    return (
        <Container>
            <View style={styles.container}>
                <Header>
                  <Button onPress={() => this.props.navigation.openDrawer()} style={styles.navbar}>
                    <Image source={require('../images/spongebob.png')} style={{position: 'absolute', width: 40, height: 40, left: 20, top: 8, borderRadius: 50, backgroundColor: '#FFFAFA' }}/>
                  </Button>
                </Header>
                <View>
                  <Text style={{ textAlign: 'center', fontSize: 20 }}>SCORE {this.state.poin}</Text>
                  <Text style={{ textAlign: 'center', fontSize: 20 }}>{this.state.poinplus}</Text>
                  <Text style={{ textAlign: 'center', fontSize: 20 }}>Combo Hits : {this.state.combo}</Text>
                </View>
                  <Image source={require('../images/gambarbottom.png')} style={{position: 'absolute', width: 209, height: 233, top: 333, left: 0}}/>
                  <Image source={require('../images/walk.png')} style={{position: 'absolute', width: 219, height: 233, top: 150, left: 140}}/>
                
                  <TouchableOpacity onPress={this.sound1} activeOpacity={0.4}>
                  {(this.state.pattern === 1) ?
                    <View style={[styles.buttonSatu, { marginLeft: 80 }, { backgroundColor: "rgba(235, 183, 69,.4)" }]}>
                        <View style={[styles.buttonDua, { backgroundColor: "rgb(235, 183, 69)" }]}>
                        </View>
                    </View> :
                    <View style={[styles.buttonSatu, { marginLeft: 80 }]}>
                        <View style={styles.buttonDua}>
                        </View>
                    </View>
                   } 
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.sound2} activeOpacity={0.4}>
                  {(this.state.pattern === 2) ?
                    <View style={[styles.buttonTiga, { backgroundColor: "rgba(235, 183, 69,.4)" }]}>
                        <View style={[styles.buttonEmpat, { backgroundColor: "rgb(235, 183, 69)" }]}>
                        </View>
                    </View> :
                    <View style={styles.buttonTiga}>
                        <View style={styles.buttonEmpat}>
                        </View>
                    </View>
                   } 
                  </TouchableOpacity>      
                  <TouchableOpacity onPress={this.sound3} activeOpacity={0.4}>
                  {(this.state.pattern === 3) ?
                    <View style={[styles.buttonLima, { backgroundColor: "rgba(235, 183, 69,.4)" }]}>
                        <View style={[styles.buttonEnam, { backgroundColor: "rgb(235, 183, 69)" }]}>
                        </View>
                    </View> :
                    <View style={styles.buttonLima}>
                        <View style={styles.buttonEnam}>
                        </View>
                    </View>
                   } 
                  </TouchableOpacity> 
                  <TouchableOpacity onPress={this.sound4} activeOpacity={0.4}>
                  {(this.state.pattern === 4) ?
                    <View style={[styles.buttonTujuh, { backgroundColor: "rgba(235, 183, 69,.4)" }]}>
                        <View style={[styles.buttonDelapan, { backgroundColor: "rgb(235, 183, 69)" }]}>
                        </View>
                    </View> :
                    <View style={styles.buttonTujuh}>
                        <View style={styles.buttonDelapan}>
                        </View>
                    </View>
                   } 
                  </TouchableOpacity> 
            </View>
        </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pattern: state.pattern.patternList,
    sound: state.sound.soundList,
    score: state.boardScore.scoreList,
    id_user: state.user.id_user,
    token: state.user.token
  }
}

export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  navbar : {
    position: 'absolute',
    width: 411,
    height: 52,
    left: 0,
    top: 0,
    backgroundColor: '#87CEFA',
  },
  buttonSatu : {
    width: 85,
    height: 85,
    marginTop: 60,
    borderRadius: 60,
    backgroundColor: "#D3D3D3",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonDua : {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#A9A9A9",
  },
  buttonTiga : {
    width: 85,
    height: 85,
    marginTop: -35,
    marginLeft: 200,
    borderRadius: 60,
    backgroundColor: "#D3D3D3",
    justifyContent: "center",
    alignItems: "center"
   },
   buttonEmpat : {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#A9A9A9",
   },
   buttonLima : {
    backgroundColor: '#87CEFA',
    borderRadius: 60,
    width: 120,
    height: 120,
    marginTop: 20,
    marginLeft: 40,
    justifyContent: 'center',
    alignItems: 'center'
   },
   buttonEnam : {
    backgroundColor: '#1E90FF',
    borderRadius: 60,
    width: 60,
    height: 60,
   },
   buttonTujuh : {
    backgroundColor: '#87CEFA',
    borderRadius: 60,
    width: 120,
    height: 120,
    marginTop: -50  ,
    marginLeft: 200,
    justifyContent: 'center',
    alignItems: 'center'
   },
   buttonDelapan : {
    backgroundColor: '#1E90FF',
    borderRadius: 60,
    width: 60,
    height: 60,
   },
});


