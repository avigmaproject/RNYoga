import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
FlatList,Alert,BackHandler
} from "react-native";
import Header from "../customcomponent/Header";
import ButtomCustom from "../customcomponent/ButtomCustom";
import BottomSheet from "react-native-simple-bottom-sheet";
import { basecolor } from "../services/constant";
import VideoListV from "../customcomponent/VideoListV";
import { GetUserYoga } from "../services/api.function";
import RenderModal from "../customcomponent/RenderModal"

const DATA = [
  {
    id: "1",
    title: "30 min",
  },
  {
    id: "2",
    title: "60 min",
  },
  {
    id: "3",
    title: "90 min",
  },

];
export default class Yoga extends Component {
  constructor({item}) {
    super();
    this.state = {
      Yoga: [],
        TimerNinty:[],
     TimerSixty:[],
     TimerThirty:[],
      visible: false,
      message: "",
      timer: "30 min",
      videosArray: ["https://musicsvideosfiles.s3.amazonaws.com/Yoga/1+-+Find+your+Centre.mp4",
        "https://musicsvideosfiles.s3.amazonaws.com/Yoga/1+-+Find+your+Centre.mp4",
        "https://musicsvideosfiles.s3.amazonaws.com/Yoga/1+-+Find+your+Centre.mp4",
        "https://musicsvideosfiles.s3.amazonaws.com/Yoga/1+-+Find+your+Centre.mp4"]
    };
    this.panelRef = React.createRef();
  }
  onOpenTimer = (item) => {
    this.panelRef.current.togglePanel();
    this.setState({ timer: item.title });
  };

  componentDidMount() {
    this.onHandleGetUserYoga()
  }

  onHandleGetUserYoga = async () => {
    let data = {
      Type: 1
    }
    this.setState({ isLoading: true })
    await GetUserYoga(data)
      .then((res) => {
        console.log('res', res)
          for(let i = 0; i < res[0].length ; i++){
            if(res[0][i].YG_Timer === 30){
              this.setState({TimerThirty:  [...this.state.TimerThirty ,res[0][i]], isLoading: false })
            }else  if(res[0][i].YG_Timer === 60){
              this.setState({ TimerSixty: [...this.state.TimerSixty ,res[0][i]], isLoading: false })
            }else  if(res[0][i].YG_Timer === 90){
              this.setState({ TimerNinty:  [...this.state.TimerNinty ,res[0][i]], isLoading: false })
            }
          }
          this.setState({
            isLoading: false,
          })
       
      })
      .catch((error) => {
        if (error.response) {
          console.log('responce_error', error.response)
          this.setState({
            isLoading: false,
            color: 'red',
            visible: true,
            message: 'Some Response Error'
          })
        } else if (error.request) {
          this.setState({
            isLoading: false,
            color: 'red',
            visible: true,
            message: 'Some Request Error'
          })
              Alert.alert("Network issue",`${error.request._response}`,[
                 {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => BackHandler.exitApp() }
                  ])
          console.log('request error', error.request)
        }
      })
  }
onrender  = ({item})=>{
return( 
    <VideoListV 
      data={item}
      onPress={() => {
      this.props.navigation.navigate('FullScreenVideo',{item})
       }}
    />
)
}
  render() {
    return (
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="stretch"
        style={{ height: "100%" }}
      >
           
      <RenderModal visible={this.state.isLoading}/>
        <SafeAreaView>
        <View
              style={{ flexDirection: "row", justifyContent: "space-between" ,alignItems:"center"}}
            >
              <Header
                title={"Set Duration"}
                navigation={this.props.navigation}
            
              />
              <ButtomCustom
                margintop={true}
                backgroundColor={"#C441FD"}
                title={this.state.timer}
                onPress={() => this.panelRef.current.togglePanel()}
              />
            </View>
          <ScrollView>
            
            <View>
              <View
                style={{
                  marginHorizontal: 20,
                  // marginVertical: 20,
                  borderBottomColor: "#472f67",
                  borderBottomWidth: 1,
                }}
              >
              <Text allowFontScaling={false}
                  style={{
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "#fff",
                    marginVertical: 20,
                  }}
                >
                 {"Why yoga is good for anxiety? "}
                </Text>
              <Text allowFontScaling={false}
                  style={{
                   fontWeight: "300",
                    fontSize: 15,
                    color: "#fff",
                    lineHeight: 20,
                  }}
                >
                 {"Anxiety is the body’s response to stress and is part of the natural fight, flight, or freeze reflex.  Anxiety might resemble a feeling of distress, unease, or dread. Its intention is to keep a person alert or aware during times of threat.  Sometimes, anxiety can get in the way of everyday life..."}
                </Text>
               
                <Text allowFontScaling={false}
                  style={{
                    fontWeight: "500",
                    fontSize: 15,
                    color: "#fff",
                    lineHeight: 20,
                    marginBottom: 20,
                    marginTop: 20
                  }}
                >
                  Learn more
                </Text>
              </View>
            </View>
          <View style={{ height: 20 }}></View>
            <ScrollView contentContainerStyle={{paddingBottom:100}}>
              <FlatList
                ListEmptyComponent={()=>{
                return(

                <View style={{height:"100%",width:"100%",justifyContent:"center",alignItems:"center",}}>
                <Text allowFontScaling={false} style={{fontSize:20,color:"#fff"}}>No Video Found</Text>
                </View>

                )}}
                renderItem={this.onrender}
                data={this.state.timer === "30 min" ? this.state.TimerThirty :this.state.timer === "60 min"? this.state.TimerSixty: this.state.TimerNinty }
              />
            </ScrollView>
            
          </ScrollView>
        </SafeAreaView>
        <BottomSheet
          ref={(ref) => (this.panelRef.current = ref)}
          wrapperStyle={{
            backgroundColor: basecolor,
            borderColor: "#472f67",
            borderWidth: 1,
            paddingBottom: 20,
          }}
          // outerContentStyle={{ backgroundColor: "pink" }}
          isOpen={this.state.visible}
        >
          <View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 10,

              }}
            >
              <Text allowFontScaling={false} style={styles.text}>Select Time</Text>
            </View>
            {DATA.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => this.onOpenTimer(item)}
                  style={styles.button}
                >
                  <Text allowFontScaling={false} style={styles.text}>{item.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </BottomSheet>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#432B62",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,

  },
  text: { color: "#fff", fontWeight: "bold", fontSize: 20 },
});