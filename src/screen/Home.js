import React, { Component } from "react"
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView,
Alert,
Dimensions, Platform, PixelRatio ,BackHandler
} from "react-native"
import ViewComp from "../customcomponent/ViewComp"
import { userprofile } from "../services/api.function"
import { connect } from "react-redux"
import Spinner from "react-native-loading-spinner-overlay"
import DeviceInfo from "react-native-device-info"
const {
  width,
  height,
} = Dimensions.get('window');

import CustomeFont from "../CustomeFont"
let hasNotch = DeviceInfo.hasNotch()

class Home extends Component {
  constructor() {
    super()
    this.state = {
      firstname: "",
      isLoading: false,
      time: "Morning"
    }
  }
  normalize(size, multiplier = 2) {
  const scale = (width / height) * multiplier;

  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

  componentDidMount = async () => {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      this.GetUserProfile()
    })
  }
  GetUserProfile = async () => {
    this.setState({ isLoading: true })
    let data = {
      Type: 2
    }
    console.log("userprofile", data, this.props.token)
    await userprofile(data, this.props.token)
      .then((res) => {
        console.log("res: ", res[0][0])
        this.setState({
          firstname: res[0][0].User_Name,
          isLoading: false
        })
        this.getTime()
      })
      .catch((error) => {
        if (error.response) {
          this.setState({ isLoading: false })
          console.log("error.response", error.response)
        } else if (error.request) {
          this.setState({ isLoading: false })
          Alert.alert("Network issue",`${error.request._response}`,[
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => BackHandler.exitApp() }
      ])
          console.log("request error", error.request._response)
        } else if (error) {
          alert("Server Error")
          this.setState({ isLoading: false })
        }
      })
  }
  getTime = () => {
    let time = ""
    var today = new Date()
    var curHr = today.getHours()
    if (curHr < 12) {
      time = "Morning"
    } else if (curHr < 18) {
      time = "Afternoon"
    } else {
      time = "Evening"
    }
    this.setState({ time })
  }
  render() {
    return (
<View style={{flex:1,backgroundColor:"#2D1350"}}>
      <ImageBackground
        source={require("../assets/background1.png")}
        resizeMode="stretch"
        style={{ height: "100%" }}
      >
      <Spinner visible={this.state.isLoading} />
        <SafeAreaView style={{flex:1}}>
            <View
              style={{
                flex: 1,
                marginHorizontal: 10, 
                justifyContent: "space-evenly",
              }}
            >
              <View>
                <Text
                  allowFontScaling={false}
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize:27,
                    fontFamily: CustomeFont.Poppins_Medium,
                    textTransform: "capitalize",
                    marginTop:3,     
                  }}
                >
                  {this.state.time}, {this.state.firstname}
                </Text>
                <Text allowFontScaling={false}
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: CustomeFont.Poppins_Light,
                    fontSize: this.normalize(17),
                    marginTop: 10,
                  }}
                >
                  Let's start this day together properly
                </Text>
                <Text allowFontScaling={false}
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: CustomeFont.Poppins_Medium,
                    fontSize:this.normalize(17),
                    marginTop: 30,
                    marginBottom:5
                  }}
                >
                  Select a state
                </Text>
              </View>
              <ViewComp
                onPress={() => this.props.navigation.navigate("Meditation")}
                title={"Meditation"}
                iconpath={"Meditation"}
                home={true}
              />
              <ViewComp
                onPress={() =>
                  this.props.navigation.navigate("NutritionScreen")
                }
                title={"Nutrition"}
                iconpath={"Nutrition"}
                home={true}

              />
              <ViewComp
                onPress={() => this.props.navigation.navigate("Yoga")}
                title={"Yoga"}
                iconpath={"Yoga"}
                margintop={10}
                home={true}

              />
              <ViewComp
                onPress={() => this.props.navigation.navigate("ChatScreen")}
                title={"Online Therapy"}
                iconpath={"Onlinetherapy"}
                home={true}

              />
            </View>
          <View style={{marginTop:25}}/>
        </SafeAreaView>
      </ImageBackground>
</View>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  token: state.authReducer.token
})

const mapDispatchToProps = {
  // signout,
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
