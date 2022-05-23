import React, { Component } from "react"
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView
} from "react-native"
import ViewComp from "../customcomponent/ViewComp"
import { userprofile } from "../services/api.function"
import { connect } from "react-redux"
import Spinner from "react-native-loading-spinner-overlay"
import DeviceInfo from "react-native-device-info"


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
          console.log("request error", error.request)
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
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="stretch"
        style={{ height: "100%" }}
      >
      <Spinner visible={this.state.isLoading} />
        <SafeAreaView style={{flex:1,}}>
            <View
              style={{
                flex: 1,
                marginHorizontal: 10, 
                justifyContent: "space-evenly",
              }}
            >
              <View>
                <Text
                  style={{
                     color: "rgba(255,255,255,0.8)",
                    fontSize: 25,
                    fontFamily: CustomeFont.Poppins_Medium,
                    textTransform: "capitalize",
                    
                    marginTop:3     
                  }}
                >
                  {this.state.time}, {this.state.firstname}
                </Text>
                <Text
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: CustomeFont.Poppins_Light,
                    fontSize: 17,
                    marginTop: 10,
                    fontWeight:"normal"
                  }}
                >
                  Let's start this day together properly
                </Text>
                <Text
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: CustomeFont.Poppins_Medium,
                    fontSize:17,
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
              />
              <ViewComp
                onPress={() =>
                  this.props.navigation.navigate("NutritionScreen")
                }
                title={"Nutrition"}
                iconpath={"Nutrition"}
              />
              <ViewComp
                onPress={() => this.props.navigation.navigate("Yoga")}
                title={"Yoga"}
                iconpath={"Yoga"}
              />
              <ViewComp
                onPress={() => this.props.navigation.navigate("ChatScreen")}
                title={"Online therapy"}
                iconpath={"Onlinetherapy"}
              />
            </View>
          <View style={{marginTop:25}}/>
        </SafeAreaView>
      </ImageBackground>
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
