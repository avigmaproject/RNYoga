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
import CustomeFont from "../CustomeFont";

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
      showtext:true,
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
        console.log('res', res[0])

          // for(let i = 0; i < res[0].length ; i++){
          //   if(res[0][i].YG_Timer === 30){
          //     this.setState({TimerThirty:  [...this.state.TimerThirty ,res[0][i]], isLoading: false })
          //   }else  if(res[0][i].YG_Timer === 60){
          //     this.setState({ TimerSixty: [...this.state.TimerSixty ,res[0][i]], isLoading: false })
          //   }else  if(res[0][i].YG_Timer === 90){
          //     this.setState({ TimerNinty:  [...this.state.TimerNinty ,res[0][i]], isLoading: false })
          //   }
          // }
          this.setState({
            isLoading: false,
          TimerThirty:res[0]
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
           
      {/* <RenderModal visible={this.state.isLoading}/> */}
        <SafeAreaView>
        {/* <View
              style={{ flexDirection: "row", justifyContent: "space-between" ,alignItems:"center"}}
            > */}
              <Header
                title={"Yoga"}
                navigation={this.props.navigation}
            
              />
              {/* <ButtomCustom
                margintop={true}
                backgroundColor={"#C441FD"}
                title={this.state.timer}
                onPress={() => this.panelRef.current.togglePanel()}
              /> */}
            {/* </View> */}
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
              {this.state.showtext ? (<Text allowFontScaling={false}
                  style={styles.text1}
                >
                Yoga is a Sanskrit word that means union – union of the breath and the body, the mind and the heart, so that you can be in a state of harmony within yourself. Moving toward this place of inner peace is a perfect solution for anxiety. With yoga, you will bring yourself into the present moment, where no fears or worries can exist. You will breathe deeply which activates....
                </Text>) :(<Text allowFontScaling={false}
                  style={styles.text1}
                >
                Yoga is a Sanskrit word that means union – union of the breath and the body, the mind and the heart, so that you can be in a state of harmony within yourself. Moving toward this place of inner peace is a perfect solution for anxiety. With yoga, you will bring yourself into the present moment, where no fears or worries can exist. You will breathe deeply which activates your parasympathetic nervous system (the rest and digest mode). You will also challenge your body to move and flow in new ways which begins to rewire the neural pathways in your brain to create a happier and healthier body and mind. 19.1% of adults in the US experience anxiety and related symptoms each year. Throughout many studies, yoga is a consistent treatment, either as a stand alone therapy or as adjunctive treatment to reduce the incidence of anxiety in women. The more frequently you practice, the more beneficial the results are. That is why our Yoga Instructor Chelsea created 20-minute sessions for you to include into your daily routine so that you can experience the benefits for yourself!
                </Text>)}
              
               

                <Text onPress={()=> this.setState({showtext:!this.state.showtext})} allowFontScaling={false}
                  style={{
                    fontWeight: "500",
                    fontSize: 15,
                    color: "#fff",
                    lineHeight: 20,
                    marginBottom: 20,
                    marginTop: 20
                  }}
                >
                  {this.state.showtext ?  "Learn more" : "Show less"}
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
                data={ this.state.TimerThirty}
              />
            </ScrollView>
            
          </ScrollView>
        </SafeAreaView>
        {/* <BottomSheet
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
        </BottomSheet> */}
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
text1:{ color: "rgba(255,255,255,0.8)",fontFamily: CustomeFont.Poppins_Medium,fontSize: 13,marginTop:10,textAlign:"justify"},

  text: { color: "#fff", fontWeight: "bold", fontSize: 20 },
});