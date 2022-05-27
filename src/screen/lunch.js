import React, { Component } from "react";
import { Text, View, ImageBackground, SafeAreaView, FlatList, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../customcomponent/Header";
import CustomeFont from "../CustomeFont";
import { GetUserRecipes } from "../services/api.function";
import { basecolor } from "../services/constant";
import LinearGradient from 'react-native-linear-gradient';
import ViewComp from "../customcomponent/ViewComp";
import AntDesign from "react-native-vector-icons/AntDesign"


export default class lunch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserRecipes: [],
            userTitle: this.props.route.params.title,
            isBreakFast: true,
            isSnak: false,
            isLunch: false,
            isdinner: false

        }
    }

    componentDidMount() {
        this.onHandleGetUserRecipes()
    }

    onHandleGetUserRecipes = async () => {
        let data = {
            UR_PKeyID: 1,
            Type: 1
        }
        this.setState({ isLoading: true })
        await GetUserRecipes(data)
            .then((res) => {
                console.log('res: ', JSON.stringify(res))
                console.log('resresresresresres', res);
                this.setState({ UserRecipes: res[0], isLoading: false })
                console.log('onHandleGetDietTips', this.state.UserRecipes);
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

    onrender2 = ({ item }) => {
        console.log('itemitem', item);
        return (
            <View style={{ padding: 5 }}>
            
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#663b89', '#3e265f', '#3d265e']} style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: 25,
                    height: 90,

                    borderRadius: 10
                }} >
                    <TouchableOpacity
                        onPress={this.props.onPress}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: 10
                        }}
                        activeOpacity={1}
                    >
                        <View style={{ position: "absolute", zIndex: 1, marginLeft: "25%", }}>
                            <Text allowFontScaling={false}
                                style={{
                                    fontSize: 16,
                                    color: "#fff",
                                    fontFamily: CustomeFont.Poppins_Medium
                                }}
                            >
                                {item.UR_TypesName}
                            </Text>
                            <Text allowFontScaling={false}
                                style={{
                                    fontSize: 12,
                                    color: "#fff",
                                    fontFamily: CustomeFont.Poppins_Medium
                                }}
                            >
                                30 minutes
                            </Text>
                        </View>
                        <View
                            style={{
                                paddingHorizontal: 5,
                            }}
                        >
                            <Image
                                resizeMode="contain"
                                style={{
                                    width: 60,
                                    height: 60,
                                    marginLeft: "10%"
                                }}
                                source={this.props.UR_filePath}
                            />
                        </View>
                        <View style={{ position: "absolute", zIndex: 1, marginLeft: "87%" }}>
                            <AntDesign name={"right"} size={15} color="#bcbcbc" />
                        </View>

                    </TouchableOpacity>
                </LinearGradient>
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

                <SafeAreaView>
                    <ScrollView>

                        <Header
                            title={`${this.props.route.params.title}`}
                            navigation={this.props.navigation}
                        />
                        {
                            this.state.isBreakFast==true  &&
                            <FlatList
                            renderItem={this.onrender2}
                            data={this.state.UserRecipes}
                        />
                        }


                        <View style={{}}>
                           
                        </View>
                    </ScrollView>
                </SafeAreaView>
                
            </ImageBackground>
        );
    }
}
