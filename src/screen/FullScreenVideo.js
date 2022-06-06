import React, { Component } from "react"
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
  StyleSheet,Alert,BackHandler,
Button,ActivityIndicator
} from "react-native"
import { basecolor } from "../services/constant"
import VideoPlayer from "react-native-video-player"
// import Video from "react-native-video"
import CustomeFont from "../CustomeFont"
import HTMLView from "react-native-htmlview";
import Right from "../assets/Right.svg";
import Play from "../assets/Play.svg";
import Left from "../assets/Left.svg"
import RenderModal from "../customcomponent/RenderModal"

export default class FullScreenVideo extends Component {
  constructor() {
    super()
    this.state = {
      data:[],
      showControl:false,
      playbutton:true,
      videosArray: ["https://musicsvideosfiles.s3.amazonaws.com/Yoga/1+-+Find+your+Centre.mp4",
        "https://musicsvideosfiles.s3.amazonaws.com/Yoga/1+-+Find+your+Centre.mp4",
        "https://musicsvideosfiles.s3.amazonaws.com/Yoga/1+-+Find+your+Centre.mp4",
        "https://musicsvideosfiles.s3.amazonaws.com/Yoga/1+-+Find+your+Centre.mp4"],
        isLoading:true
    }
  }

componentDidMount(){
this._unsubscribe = this.props.navigation.addListener("focus", () => {
this.setState({data:this.props.route.params.item})
    })
}
_OnPlayPause (){
this.setState({playbutton:!this.state.playbutton})
if(this.state.playbutton){
this.player.pause()
}else{
this.player.resume()
}
}
componentWillUnmount(){
this.player.stop()
}
_onVideoLoadStart =() =>{
alert("veo strt")
this.setState({isLoading:true})
}
_onVideoProgress =() =>{
// alert("_onVideoProgress")
this.setState({isLoading:false})
}
onPlaybackResume =() =>{
// alert("onPlaybackResume")
this.setState({isLoading:false})
}
_goBack(){
 this.player.stop()
this.props.navigation.goBack()}
  render() {
const {data,isLoading} = this.state
console.log("video path",isLoading)
    return (
      <View style={{ backgroundColor: basecolor, flex: 1 }}>
        {/* <SafeAreaView> */}
          <View style={{justifyContent:"center",alignItems:"center",}}>
      {/* <RenderModal visible={this.state.isLoading}/> */}
       <View style={{width:"100%"}}>
          <VideoPlayer
            video={{
              uri:"https://musicsvideosfiles.s3.amazonaws.com/Yoga/1+-+Find+your+Centre.mp4"
               // data.YG_File_Path
            }}
            autoplay={true}
            resizeMode={"cover"}
            showDuration
            style={{  height: 300}}
            playInBackground={false}
            onVideoLoadStart={()=>this._onVideoLoadStart()}
            // onVideoLoad={()=>this.setState({isLoading:true})}
            // onBuffer={()=>this.setState({isLoading:true})}
            onVideoProgress={()=>this._onVideoProgress()}
            onPlaybackResume={()=>this.onPlaybackResume()}
            ref={r => this.player = r}
            thumbnail={require("../assets/yoga.jpg")}
            endThumbnail={require("../assets/yoga.jpg")}
              customStyles={{seekBarBackground:{backgroundColor:"#78678f",},
               seekBarKnob:{backgroundColor:"rgba(254, 189, 250,0.9)"},
                seekBarProgress:{backgroundColor:"#ED6BFD"},
                playArrow:{color:"#ED6BFD"},
                playIcon:{color:"#ED6BFD"},
                playButton:{backgroundColor:"rgba(254, 189, 250,0.9)"},
                // playControl:{display:"none",marginLeft:50},
                seekBarFullWidth:{width:"80%"},
                // controls:{display:"none"},
 }}
          />
          </View>
        <TouchableOpacity 
            onPress={()=>this.setState({showControl:!this.state.showControl})}
            style={{width:"100%",height: 200,position:"absolute",zIndex:11,justifyContent:"center",alignItems:"center"}}>
            {this.state.showControl && ( <View>   
                <View style={{ flexDirection: 'row', alignItems: 'center' ,width:"80%"}}>
                  <TouchableOpacity style={{marginRight:20}} onPress={() => this.player.seek(-10)} >
                      <Left height="50" width="50"/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this._OnPlayPause()} style={{marginHorizontal:20}}>

                    {this.state.playbutton ?(<Image
                      style={{ width: 90, height: 70, borderRadius: 10 }}
                      resizeMode={"cover"}
                      source={require("../assets/stop.png")}
                    />  ) :( <Play height="70" width="70"/>) }
                     
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft:20}}  onPress={() => this.player.seek(10)}>
                      <Right height="50" width="50"/>
                  </TouchableOpacity>
                </View></View>)}
          </TouchableOpacity>
        {/* <Button
          onPress={() => this.player.stop()}
          title="Stop"
        />
        <Button
          onPress={() => this.player.pause()}
          title="Pause"
        />
        <Button
          onPress={() => this.player.resume()}
          title="Resume"
        /> */}
      </View>

          <ScrollView style={{}}>
            <Text allowFontScaling={false}
              style={{
                fontSize: 15,
                fontFamily: CustomeFont.Poppins_Medium,
                color: "white",
                marginHorizontal: 25,
                marginTop: 10
              }}
            >
            {data.YG_Name}
             {/* // The name of yoga lessions #1 */}
            </Text>
                <View style={{marginHorizontal: 25,marginTop:5,margin:20}}>
                  <HTMLView
                      value={data.YG_Description}
                      stylesheet={styles}
                      />
                  </View>
            {/* <Text
              style={{
                fontSize: 12,
                fontFamily: CustomeFont.Poppins_Light,
                color: "white",
                marginHorizontal: 25,
                marginTop: 15,
                marginBottom: 30
              }}
            >
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.{" "}
            </Text> */}
            <FlatList
              data={this.state.videosArray}
              renderItem={(item) => {
                return (
                  <View
                    style={{
                      marginBottom: 25,
                      flexDirection: "row",
                      marginHorizontal: 20,
                      overflow: "hidden"
                    }}
                  >
                    <Image
                      style={{ width: 90, height: 70, borderRadius: 10 }}
                      resizeMode={"cover"}
                      source={require("../assets/yoga.jpg")}
                    />
                    <View
                      style={{
                        paddingHorizontal: 15,
                        justifyContent: "center",
                        alignItems: "flex-start"
                      }}
                    >
                      <Text allowFontScaling={false}
                        style={{
                          fontSize: 15,
                          fontFamily: CustomeFont.Poppins_Medium,
                          color: "white"
                        }}
                      >
                        The name of yoga lessions #1
                      </Text>
                      <Text allowFontScaling={false}
                        numberOfLines={2}
                        style={{
                          fontSize: 12,
                          fontFamily: CustomeFont.Poppins_Light,
                          color: "white",
                          marginTop: 5
                        }}
                      >
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the visual
                        form of a document or a typeface without relying on
                        meaningful content.{" "}
                      </Text>
                    </View>
                  </View>
                )
              }}
            />
          </ScrollView>
 {this.state.isLoading &&  <View style={{ position:"absolute",height: 300,width:"100%",}}>
          <View style={{ height: 300,width:"100%",justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#D970F5"} /></View>
         </View> }
          <TouchableOpacity
            onPress={() =>this._goBack()}
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 3,
              marginHorizontal: 20,
              width: 28,
              position: "absolute",
              top: "7.5%",
              left:10
            }}
          >
            <Image
              resizeMode="contain"
              style={{ height: 35, width: 35 }}
              source={require("../assets/backarrow.png")}
            />
          </TouchableOpacity>
        {/* </SafeAreaView> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
color:"white"
  },
  a: {
    fontWeight: "300",
    color: "blue", // make links coloured pink
  },
p:{
color:"white",  fontFamily: CustomeFont.Poppins_Light,
},ol:{
color:"white"
},
ul:{
color:"white"
},  bottomText: {
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
    height: 50,
    width: 50,
    // tintColor: '#fff'
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
});

//  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                   <TouchableOpacity style={styles.Touchableprev}>
//                     <Image
//                       style={[styles.Imagebtn, { rotation: 180 }]}
//                       source={require('../assets/next.png')}
//                     />
//                   </TouchableOpacity>
//                   <TouchableOpacity style={styles.Touchablecenter}>
//                     <Image
//                       style={styles.Image}
//                       source={require('../assets/pause.png')}
//                     />
//                   </TouchableOpacity>
//                   <TouchableOpacity style={styles.Touchableprev}>
//                     <Image
//                       style={styles.Imagebtn}
//                       source={require('../assets/next.png')}
//                     />
//                   </TouchableOpacity>
//                 </View>
//               </View>