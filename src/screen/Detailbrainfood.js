import React, { Component } from "react";
import { Text, View, ImageBackground, SafeAreaView, FlatList,StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../customcomponent/Header";
import { GetBrainFood } from "../services/api.function";
import CustomeFont from "../CustomeFont"
import HTMLView from "react-native-htmlview";
import RenderModal from "../customcomponent/RenderModal"

export default class Detailbrainfood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            BrainFood: [{ 1: 1 }],
            userTitle: this.props.route.params.title

        }
    }

    componentDidMount() {
        this.onHandleGetBrainFood()
    }

    onHandleGetBrainFood = async () => {
        let data = {
            BRF_PKeyID:1,
            Type:1
        }
        this.setState({ isLoading: true })
        await GetBrainFood(data)
            .then((res) => {
                console.log('res: ', JSON.stringify(res))
                console.log('resresresresresres', res);
                this.setState({ BrainFood: res[0], isLoading: false })
                console.log('onHandleGetBrainFood', this.state.BrainFood);
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
                <Text style={{
                    fontWeight: "600",
                    fontSize: 18,
                    color: "#fff",
                    lineHeight: 20,
                    textTransform:"capitalize",marginBottom:5
                }}>{item.BRF_Name}</Text>
               {/* <Text style={{marginLeft:10}}>  */}
                    <HTMLView
                    value={item.BRF_Description}
                    stylesheet={styles}
                  />
                {/* </Text> */}
                {/* <Text style={{ marginTop: 20, color: '#ccc', fontSize: 13,lineHeight:20,  
                     textTransform:"capitalize"}}>{item.BRF_Description}</Text> */}
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
                    <ScrollView>
                   
                    <View>
                        <FlatList
                            renderItem={this.onrender}
                            data={this.state.BrainFood}
                        />
                    </View>
                    </ScrollView>
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