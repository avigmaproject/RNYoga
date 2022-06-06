import React, { Component } from "react";
import { Text, View, ImageBackground, SafeAreaView, FlatList,StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../customcomponent/Header";
import CustomeFont from "../CustomeFont"
import ViewComp from "../customcomponent/ViewComp";

export default class Detailbrainfood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            BrainFood: [
            {
            foodid:1,
            foodname:"Avocado",
            image1:require("../screen/BrainFoodScence/Avocado/1.jpg"),
            screen:"AvocadoScene"
            },
            {
            foodid:2,
            foodname:"Barries",
            image1:require("../screen/BrainFoodScence/Berries/1.jpg"),
            screen:"BarriesScene"
            },
            {
            foodid:3,
            foodname:"Chamomile",
            image1:require("../screen/BrainFoodScence/Chamomile/1.jpg"),
            screen:"ChamomileScene"
            },
            {
            foodid:4,
            foodname:"Curcumin",
            image1:require("../screen/BrainFoodScence/Curcumin/1.jpg"),
            screen:"CurcuminScene"
            },
            {
            foodid:5,
            foodname:"Dark Chocolate",
            image1:require("./BrainFoodScence/DarkChocolate/1.jpg"),
            screen:"DarkChocolateScene"
            },
            {
            foodid:6,
            foodname:"Dark Leafy Greens",
            image1:require("./BrainFoodScence/DarkLeafyGreens/1.jpg"),
            screen:"DarkLeafyGreensScene"
            },
            {
            foodid:7,
            foodname:"Eggs",
            image1:require("../screen/BrainFoodScence/Eggs/1.jpg"),
            screen:"EggsScene"
            },
            {
            foodid:8,
            foodname:"Nuts and Seeds",  
            image1:require("./BrainFoodScence/NutsandSeeds/1.jpg"),
            screen:"NutsandSeedsScene"

            },
            {
            foodid:9,
            foodname:"Salmon",
            image1:require("../screen/BrainFoodScence/Salmon/1.jpg"),
            screen:"SalmonScene"
            }
            ],
            userTitle: this.props.route.params.title

        }
    }
    onrender = ({ item }) => {
        console.log('itemitem', item);
        return (
                <ViewComp
                onPress={() =>
                  this.props.navigation.navigate(item.screen, {
                    title: item.foodname,
                  })
                }
                nutrition={true}
                title={item.foodname}
                filepath={item.image1} />
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
                        navigation={this.props.navigation}
                    />
                    <ScrollView contentContainerStyle={{paddingBottom:50}}>
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
