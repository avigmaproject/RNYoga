import React, { Component } from "react"
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
  StyleSheet,
Button
} from "react-native"
import { basecolor } from "../services/constant"
import VideoPlayer from "react-native-video-player"
import Video from "react-native-video"
import CustomeFont from "../CustomeFont"
import HTMLView from "react-native-htmlview";
import Right from "../assets/Right.svg";
import Play from "../assets/Play.svg";
import Left from "../assets/Left.svg"
export default class FullScreenVideo extends Component {
  constructor() {
    super()
    this.state = {
      data:[],
      videosArray: ["https://musicsvideosfiles.s3.amazonaws.com/Yoga/1+-+Find+your+Centre.mp4",
        "https://musicsvideosfiles.s3.amazonaws.com/Yoga/1+-+Find+your+Centre.mp4",
        "https://musicsvideosfiles.s3.amazonaws.com/Yoga/1+-+Find+your+Centre.mp4",
        "https://musicsvideosfiles.s3.amazonaws.com/Yoga/1+-+Find+your+Centre.mp4"]
    }
  }

componentDidMount(){
this.setState({data:this.props.route.params.item})
console.log("minallll",this.props.route.params.item)
}

  render() {
const {data} = this.state
    return (
      <View style={{ backgroundColor: basecolor, flex: 1 }}>
        {/* <SafeAreaView> */}
          <View style={{justifyContent:"center",alignItems:"center",}}>
       <View style={{width:"100%"}}>
          <VideoPlayer
            video={{
              uri:
                data.YG_File_Path
            }}
            resizeMode={"cover"}
            showDuration	
            style={{  height: 300,}}
            ref={r => this.player = r}
          />
          </View>
        {/* <View style={{position:"absolute",zIndex:11,}}>   
          <View style={{ flexDirection: 'row', alignItems: 'center' ,width:"80%"}}>
                  <TouchableOpacity style={{marginRight:20}} onPress={() => this.player.seek(-10)} >
                      <Left height="50" width="50"/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.player.resume()} style={{marginHorizontal:20}}>
                      <Play height="70" width="70"/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft:20}}  onPress={() => this.player.seek(10)}>
                      <Right height="50" width="50"/>
                  </TouchableOpacity>
                </View>
</View> */}
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
            <Text
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
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: CustomeFont.Poppins_Medium,
                          color: "white"
                        }}
                      >
                        The name of yoga lessions #1
                      </Text>
                      <Text
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
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 3,
              marginHorizontal: 20,
              width: 28,
              position: "absolute",
              top: "5%"
            }}
          >
            <Image
              resizeMode="contain"
              style={{ height: 30, width: 30 }}
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