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
import RecipeButton from "../customcomponent/RecipeButton";


export default class DetailRecipes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserRecipes: [{ 1: 1 }],
            userTitle: this.props.route.params.title,
            isBreakFast: true,
            isSnak: false,
            isLunch: false,
            isdinner: false,
            UserRecipesSnacks:[],UserRecipesBreakFast:[],UserRecipesLunch:[],UserRecipesDinner:[]

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
                // console.log('res: ', JSON.stringify(res))
                console.log('resresresresresres', res[0]);
                for(let i = 0;i< res[0].length ; i++){
                    if(res[0][i].UR_TypesName === "Snacks"){
                         this.setState({ UserRecipesSnacks:  [...this.state.UserRecipesSnacks ,res[0][i]], isLoading: false })
                    }else  if(res[0][i].UR_TypesName === "BreakFast"){
                         this.setState({ UserRecipesBreakFast: [...this.state.UserRecipesBreakFast ,res[0][i]], isLoading: false })
                    }else  if(res[0][i].UR_TypesName === "Lunch"){
                         this.setState({ UserRecipesLunch:  [...this.state.UserRecipesLunch ,res[0][i]], isLoading: false })
                    }else  if(res[0][i].UR_TypesName === "Dinner"){
                         this.setState({ UserRecipesDinner:  [...this.state.UserRecipesDinner ,res[0][i]], isLoading: false })
                    }
                }
                this.setState({ UserRecipes: res[0], isLoading: false })
                // console.log('onHandleGetDietTips', this.state.UserRecipesSnacks);
                // console.log('onHandleGetDietTips', this.state.UserRecipesBreakFast);
                // console.log('onHandleGetDietTips', this.state.UserRecipesLunch);
                // console.log('onHandleGetDietTips', this.state.UserRecipesDinner);

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
    return (
        <View style={{ padding: 5 }}>
            <ViewComp
                onPress={() => this.props.navigation.navigate("RecipeDetail",{item})}
                title={item.UR_Name}
                iconpath={"Diettips"}
                recipes = {true}
                filepath={item.UR_filePath}
              />

            {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#663b89', '#3e265f', '#3d265e']} style={{
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
                        <Text
                            style={{
                                fontSize: 16,
                                color: "#fff",
                                fontFamily: CustomeFont.Poppins_Medium
                            }}
                        >
                            {item.UR_Name}
                        </Text>
                        <Text
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
            </LinearGradient> */}
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
             <Header
              title={`${this.props.route.params.title}`}
               navigation={this.props.navigation}/>
                <ScrollView contentContainerStyle={{paddingBottom:100}}>
                        <FlatList
                            renderItem={this.onrender}
                            data={this.state.isLunch ? this.state.UserRecipesLunch : this.state.isBreakFast ? this.state.UserRecipesBreakFast: this.state.isSnak ? this.state.UserRecipesSnacks :this.state.isdinner ? this.state.UserRecipesDinner : []}
                        />
                </ScrollView>
            </SafeAreaView>
            <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, bottom: 10, width: '98%', height: 44, alignContent: 'center', backgroundColor: basecolor }}>
                <RecipeButton  statue={this.state.isBreakFast} title = {"Breakfast"}   
                onPress={() => {
                    this.setState({
                        isBreakFast: true,
                        isLunch: false,
                        isSnak: false,
                        isdinner: false
                        })
                     }}/>
                <RecipeButton statue={this.state.isLunch} title = {"Lunch"} onPress={() => {
                    this.setState({
                        isBreakFast: false,
                        isLunch: true,
                        isSnak: false,
                        isdinner: false
                    })}}/>
                <RecipeButton statue={this.state.isSnak} title = {"Snaks"}  onPress={() => {
                    this.setState({
                        isBreakFast: false,
                        isLunch: false,
                        isSnak: true,
                        isdinner: false
                    })
                }}/>
                <RecipeButton statue={this.state.isdinner} title = {"Dinner"} 
                onPress={() => {
                    this.setState({
                        isBreakFast: false,
                        isLunch: false,
                        isSnak: false,
                        isdinner: true
                    })
                }}  />


                {/* <LinearGradient style={{ borderRadius: 6 }} start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 0, y: 1.2 }} colors={this.state.isBreakFast ? ['#D970F5', '#A33AF3'] : ["rgba(0,0,0,0)", "rgba(0,0,0,0)"]}>
                    <TouchableOpacity style={{ padding: 10 }} 
                     onPress={() => {
                        this.setState({
                            isBreakFast: true,
                            isLunch: false,
                            isSnak: false,
                            isdinner: false
                        })
                     }}>
                <Text style={{ color: 'white', fontFamily: CustomeFont.Poppins_Medium, fontSize: 14 }}>Breakfast</Text>
                </TouchableOpacity>
                </LinearGradient> */}
                {/* <LinearGradient style={{ borderRadius: 6 }} start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 0, y: 1.2 }}
                    colors={this.state.isLunch ? ['#D970F5', '#A33AF3'] : ["rgba(0,0,0,0)", "rgba(0,0,0,0)"]}
                ><TouchableOpacity onPress={() => {
                    this.setState({
                        isBreakFast: false,
                        isLunch: true,
                        isSnak: false,
                        isdinner: false
                    })
                }} style={{ padding: 10 }}><Text style={{ color: 'white', fontFamily: CustomeFont.Poppins_Medium, fontSize: 14 }}>Lunch</Text></TouchableOpacity></LinearGradient> */}
                {/* <LinearGradient style={{ borderRadius: 6 }} start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 0, y: 1.2 }}
                    colors={this.state.isSnak ? ['#D970F5', '#A33AF3'] : ["rgba(0,0,0,0)", "rgba(0,0,0,0)"]}
                ><TouchableOpacity onPress={() => {
                    this.setState({
                        isBreakFast: false,
                        isLunch: false,
                        isSnak: true,
                        isdinner: false
                    })
                }} style={{ padding: 10 }}><Text style={{ color: 'white', fontFamily: CustomeFont.Poppins_Medium, fontSize: 14 }}>Snaks</Text></TouchableOpacity></LinearGradient>
                <LinearGradient style={{ borderRadius: 6 }} start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 0, y: 1.2 }}
                    colors={this.state.isdinner ? ['#D970F5', '#A33AF3'] : ["rgba(0,0,0,0)", "rgba(0,0,0,0)"]}
                ><TouchableOpacity onPress={() => {
                    this.setState({
                        isBreakFast: false,
                        isLunch: false,
                        isSnak: false,
                        isdinner: true
                    })
                }} style={{ padding: 10 }}><Text style={{ color: 'white', fontFamily: CustomeFont.Poppins_Medium, fontSize: 14 }}>Dinner</Text></TouchableOpacity></LinearGradient> */}
            </View>
        </ImageBackground>
    );
}
}
