import React, { Component } from 'react'
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,Alert,BackHandler
} from 'react-native'
import Header from '../customcomponent/Header'
import ViewComp from '../customcomponent/ViewComp'
import BottomSheet from 'react-native-simple-bottom-sheet'
import { basecolor } from '../services/constant'
import ButtomCustom from '../customcomponent/ButtomCustom'
import { NavigationContainer } from '@react-navigation/native'

// const Meditation = ({ navigation }) => {
export default class Meditation extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode='stretch'
        style={{ height: '100%' }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Header title={'Set Duration'} navigation={this.props.navigation} />
            <ButtomCustom
              onPress={() => this.props.navigation.navigate('musicplayer')}
              title={'30 min'}
              backgroundColor={'#C441FD'}
            />
          </View>

          <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
            <ScrollView style={{ width:"100%"}}>
            <ViewComp
              title={'Type of meditation'}
              iconpath={"Meditation"}
            />
            <ViewComp
              title={'Type of meditation'}
              iconpath={"Meditation"}
            />
            <ViewComp
              title={'Type of meditation'}
              iconpath={"Meditation"}
            />
            <ViewComp
              title={'Type of meditation'}
              iconpath={"Meditation"}
            />
            <ViewComp
              title={'Type of meditation'}
              iconpath={"Meditation"}
            />
            <ViewComp
              title={'Type of meditation'}
              iconpath={"Meditation"}
            />
            <View style={{height:140}}></View>
        </ScrollView>
            <BottomSheet
              isOpen
              wrapperStyle={{
                backgroundColor: basecolor,
                borderColor: '#472f67',
                borderWidth: 1,
                paddingBottom: 20
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <View>
                  <Text allowFontScaling={false} style={styles.bottomText}>Meditation</Text>
                  <Text allowFontScaling={false} style={styles.bottomText2}>Name of the music</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity style={styles.Touchableprev}>
                    <Image
                      style={[styles.Imagebtn, { rotation: 180 }]}
                      source={require('../assets/next.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.Touchablecenter}>
                    <Image
                      style={styles.Image}
                      source={require('../assets/pause.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.Touchableprev}>
                    <Image
                      style={styles.Imagebtn}
                      source={require('../assets/next.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </BottomSheet>
          </View>
        </SafeAreaView>
      </ImageBackground>
    )
  }
}

// export default Meditation;
const styles = StyleSheet.create({
  bottomText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20
  },
  bottomText2: {
    color: 'gray',
    fontWeight: '600',
    fontSize: 16
  },
  Imagebtn: {
    height: 12,
    width: 12,
    tintColor: '#fff'
  },
  Image: {
    height: 25,
    width: 25,
    tintColor: '#AB29FC'
  },
  Touchableprev: {
    backgroundColor: '#AB29FC',
    padding: 12,
    borderRadius: 35
  },
  Touchablecenter: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 100,
    marginHorizontal: 10
  }
})
