import React, { Component } from "react";
import { Text, View, ImageBackground, SafeAreaView, FlatList ,StyleSheet} from "react-native";
import Header from "../customcomponent/Header";
import { GetDietTips, getUserGuide } from "../services/api.function";
import HTMLView from "react-native-htmlview";
import CustomeFont from "../CustomeFont"
import RenderModal from "../customcomponent/RenderModal"

export default class Detaildiet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dietstips: [{1:1}],
      userTitle: this.props.route.params.title
     
    }
  }

  componentDidMount() {
    this.onHandleGetDietTips()
  }

  onHandleGetDietTips = async () => {
    let data = {
        DT_PKeyID:1,
        Type:1
    }
    this.setState({ isLoading: true })
    await GetDietTips(data)
      .then((res) => {
        console.log('res: ', JSON.stringify(res))
        console.log('resresresresresres', res);
        this.setState({ dietstips: res[0], isLoading: false })
        console.log('onHandleGetDietTips', this.state.dietstips);
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
          console.log('request error', error.request)
        }
      })
  }

  onrender = ({ item }) => {
    console.log('itemitem', item);
    return (
      <View style={{ padding: 15 }}>
        <Text allowFontScaling={false}style={{
          fontWeight: "600",
          fontSize: 18,
          color: "#fff",
          lineHeight: 20,
           textTransform:"capitalize"
        }}>{item.DT_Name}</Text>

              <HTMLView
                    onLinkPress={(url) =>
                      this.props.navigation.navigate("Faq", {
                        url,
                        title: "Product",
                        routes: "quiz",
                      })
                    }
                    value={item.DT_Description}
                    stylesheet={styles}
                  />
        {/* <Text style={{ marginTop: 20,color: '#ccc',fontSize:13,lineHeight:20,}}>{item.DT_Description}</Text> */}
      </View>
    )
  }
  render() {
    return (
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="stretch"
        style={{ height: "100%", flex: 1 }}
      >
 <RenderModal visible={this.state.isLoading}/>

        <SafeAreaView>
          <Header
            title={`${this.props.route.params.title}`}
            navigation={this.props.navigation}
          />
          
            <View>
              <FlatList
                renderItem={this.onrender}
                data={this.state.dietstips}
              />
            </View> 
        </SafeAreaView>
      </ImageBackground>
    );
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
    color:"white",  fontFamily: CustomeFont.Poppins_Light,textTransform:"capitalize"
  },
ol:{
color:"white"
},
ul:{
color:"white"
}
});
