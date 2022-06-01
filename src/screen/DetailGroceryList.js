import React, { Component } from "react";
import { Text, View, ImageBackground, SafeAreaView, FlatList ,StyleSheet,Alert,BackHandler} from "react-native";
import Header from "../customcomponent/Header";
import { GetGroceryList } from "../services/api.function";
import CustomeFont from "../CustomeFont"
import HTMLView from "react-native-htmlview";
import { ScrollView } from "react-native-gesture-handler";
import RenderModal from "../customcomponent/RenderModal"

export default class DetailGroceryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            GroceryList: [],
            userTitle: this.props.route.params.title

        }
    }

    componentDidMount() {
        this.onHandleGetGroceryList()
    }

    onHandleGetGroceryList = async () => {
        let data = {
            GR_PKeyID: 1,
            Type:1
        }
        this.setState({ isLoading: true })
        await GetGroceryList(data)
            .then((res) => {
                console.log('res: ', JSON.stringify(res))
                console.log('resresresresresres', res);
                this.setState({ GroceryList: res[0], isLoading: false })
                console.log('onHandleGetGroceryList', this.state.GroceryList);
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
                }}>{item.GR_Name}</Text>
                <HTMLView
                    value={item.GR_Description}
                    stylesheet={styles}
                  />
                {/* <Text style={{ marginTop: 20, color: '#ccc', fontSize: 13,lineHeight:20,}}>{item.GR_Description}</Text> */}
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

                    <ScrollView contentContainerStyle={{paddingBottom:100}}>
                        <FlatList
                            renderItem={this.onrender}
                            data={this.state.GroceryList}
                        />
                    </ScrollView>

                </SafeAreaView>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
  text: {
   color: "rgba(255,255,255,0.8)",fontFamily: CustomeFont.Poppins_Medium
  },
b: {
   color: "rgba(255,255,255,0.9)",fontFamily: CustomeFont.Poppins_Bold
  },
  a: {
    fontWeight: "300",
    color: "blue", // make links coloured pink
  },
p:{
color:"white",  fontFamily: CustomeFont.Poppins_Light,
},ol:{
color:"rgb(200, 104, 200)"
},
ul:{
color:"rgb(200, 104, 200)"
}
});
