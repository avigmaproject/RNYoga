import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,

} from "react-native";
import ViewComp from "../customcomponent/ViewComp";
import Header from "../customcomponent/Header";
import { getnutrition } from "../services/api.function";
import Svg, {
  Use,
  Image,
} from 'react-native-svg';
import ButtomCustom from "../customcomponent/ButtomCustom";
import Background from "../assets/Background.svg"



export default class Nutrition extends Component {

  constructor() {
    super();
    this.state = {
      nutrition: []
    };
  }
  componentDidMount() {
    this.onHandlegetnutrition()
  }

  onHandlegetnutrition = async () => {
    let data = {
      NU_PKeyID: 1,
      Type: 1,
    }
    this.setState({ isLoading: true })
    await getnutrition(data)
      .then((res) => {
        console.log('res', JSON.stringify(res))
        console.log('resUSRDATA', res)
        this.setState({ nutrition: res, isLoading: false })
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




  render() {
    return (
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="stretch"
        style={{ height: "100%" }}
      >
        <SafeAreaView>
        <Header title={"Nutrition"} navigation={this.props.navigation} />
          <ScrollView>
            <View
              style={{
                marginHorizontal: 10,
                paddingBottom: 20
              }}
            >
              <ViewComp
                onPress={() =>
                  this.props.navigation.navigate("DetailGuide", {
                    title: "Guide",
                  })
                }
                title={"Guide"}
                iconpath={"Guide"}

              />
              <ViewComp
                onPress={() =>
                  this.props.navigation.navigate("Detaildiet", {
                    title: "Diet tips",
                  })
                }
                title={"Diet tips"}
                iconpath={"Diettips"} />
              <ViewComp
                onPress={() =>
                  this.props.navigation.navigate("Detailbadfood", {
                    title: "Bad foods",
                  })
                }
                title={"Bad food"}
                iconpath={"Badfood"} />
              <ViewComp
                onPress={() =>
                  this.props.navigation.navigate("Detailbrainfood", {
                    title: "Brain food",
                  })
                }
                title={"Brain food"}
                iconpath={"Brainfood"} />
              <ViewComp
                onPress={() =>
                  this.props.navigation.navigate("DetailRecipes", {
                    title: "Recipes",
                  })
                }
                title={"Recipes"}
                iconpath={"Recipes"} />
              <ViewComp
                onPress={() =>
                  this.props.navigation.navigate("DetailGroceryList", {
                    title: "Grocery list",
                  })
                }
                title={"Grocery list"}
                iconpath={"Grocery"} />

            </View>
            <View style={{ padding: 15 }}>
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Background height={"120"} width={"90%"} />
              </View>

              <View style={{ marginTop: 30 }}>
                <Text style={styles.calltext}>Do you want to make</Text>
                <Text style={styles.calltext}>a call with our psychologist?</Text>
              </View>

              <View style={{ width: '100%', marginTop: 40 }}>
                <ButtomCustom
                  margin={true}
                  backgroundColor={'#C441FD'}
                  title={'Schedule a call'}
                  onPress={() =>
                    this.props.navigation.navigate('ChatofflineScreen')
                  }
                />
              </View>
              <View style={{marginTop:25}}>
                <Text  style={styles.calltext2}>
                  You cannot book an appointment with our
                </Text>
                <Text  style={styles.calltext2}>
                  dietician beacause you are not a member of our
                </Text>
                <Text  style={styles.calltext2}>
                  membership
                </Text>

               <View style={{marginTop:15}}>
               <Text  style={styles.calltext2}>
                  if you want,you can do it right<Text style={{textDecorationLine: 'underline',color:'#fff',marginLeft:10,fontSize:12,marginTop:20}}>  here</Text>
                </Text>
               </View>

              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({

  calltext: { fontSize: 19, color: '#fff', fontWeight: 'bold', fontFamily: 'Poppins-Medium' },
  calltext2: { fontSize:12, color: '#ccc',fontFamily: 'Poppins-Medium' }

})
