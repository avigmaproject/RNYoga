import React, { Component } from "react";
import { Text, View, ActivityIndicator ,StyleSheet,Image} from "react-native";
import CustomeFont from "../CustomeFont"

export default class DiteView extends Component {
constructor(props) {
    super(props)
    this.state = {
      isLoading:false,
     
    }
  }

  render() {
    return (
      <View>
            {this.props.title && ( <Text  style={{...styles.text1,alignSelf:"center",textDecorationLine:"underline"}}>{this.props.title}</Text>)}
            {this.props.headertext && ( <Text allowFontScaling={false}style={styles.text}>{this.props.headertext} {"\n"}</Text>)}  
                <Text  style={styles.text1}><Text style={styles.textcolor}>{'\u25CF'}</Text> {this.props.title2}</Text>
                {this.props.image && (<View>
                {this.state.isLoading &&  <View style={{ position:"absolute",zIndex:111, height: 160,width:160,marginLeft:100}}>
                  <View style={{width: 150,height: 150,justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#2d1350"} /></View>
                </View> }
                    <Image
                      onLoadStart={()=>this.state.isLoading}
                      onLoadEnd={()=>this.state.isLoading}
                      source={this.props.image}
                      resizeMode="stretch"
                      style={{
                      width: 300,
                      height: 200,
                      borderRadius:10,
                      alignSelf:"center",marginVertical:10
                      }}
                      />
                    </View>)}           
 
                    <Text allowFontScaling={false}style={styles.text}>
                    {this.props.text}{"\n"}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text: {
   color: "rgba(255,255,255,0.8)",fontFamily: CustomeFont.Poppins_Medium,fontSize: 13,marginTop:5,lineHeight:20
  },
text1: {
  color:"rgb(200, 104, 200)",fontFamily: CustomeFont.Poppins_Bold,fontSize: 15,
  },
img:
{
height:400,width:400
},
textcolor:{color:"rgb(200, 104, 200)"}

});
