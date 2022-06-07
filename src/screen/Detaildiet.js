import React, { Component } from "react";
import { Text, View, ImageBackground, SafeAreaView, ActivityIndicator ,StyleSheet,Alert,BackHandler,Image} from "react-native";
import Header from "../customcomponent/Header";
import { GetDietTips, getUserGuide } from "../services/api.function";
import HTMLView from "react-native-htmlview";
import CustomeFont from "../CustomeFont"
import RenderModal from "../customcomponent/RenderModal"
import { ScrollView } from "react-native-gesture-handler";
import DiteView from "../customcomponent/DiteView"
export default class Detaildiet extends Component {
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
          
          <ScrollView contentContainerStyle={{paddingHorizontal:15,paddingTop:20,paddingBottom:100}}>
                <Text allowFontScaling={false}style={{...styles.text,fontFamily: CustomeFont.Poppins_Bold,fontSize: 20,}}>Nutrition and Mental Health Connection{"\n"}</Text>
                  <Text allowFontScaling={false}style={styles.text}>
                     Most of us know that healthy eating is good for our health as it keeps our weight in check and can help protect us from diseases like diabetes or even heart disease.
                     But did you know healthy eating can also support your mental health? There are no magic foods, quick-fix supplements, or special diets needed - it&#39;s 
                     about making healthy choices throughout the day, every day. 
                     This is what nutritionists call a &#39;healthy dietary pattern!&#39;{"\n"}
                    </Text>
                      <Text allowFontScaling={false}style={styles.text}>See the 5 top tips to work towards your own healthy dietary pattern:{"\n"}</Text>
                      <Text allowFontScaling={false}style={styles.text}>
                      <Text style={styles.text1}> 1.  Eat more: </Text> Vegetables and fruit, legumes, fish{"\n"}
                      <Text style={styles.text1}> 2.  Choose: </Text>Wholegrain bread and cereals, healthy fats{"\n"}
                      <Text style={styles.text1}> 3.  Enjoy in moderation: </Text> Poultry, dairy products, eggs{"\n"}
                      <Text style={styles.text1}> 4.  Eat less: </Text>Red meat, sugar added products, junk food{"\n"}
                      <Text style={styles.text1}> 5.  Take small steps towards positive changes every day {"\n"}</Text></Text>

                  <DiteView 
                     title="Tip 1. Eat more…" 
                    headertext="Vegetables, fruits, legumes, and fish are all essential parts of a healthy dietary pattern which we should focus on eating more of." 
                     title2="Vegetables" 
                     text = "Any vegetable is a good vegetable - the more you eat, the better! Vegetables are very low in calories and high in vitamins, making them the top choice for a mood- boosting dietary pattern." 
                     image={require("../../src/assets/Imagesfoodfacts/2.png")}/>
                  <DiteView 
                     title2="Fruit" 
                     text = "Sweeten up your day with fruit! It’s packed with fiber and vitamins and makes a great snack. When we’re anxious and stressed, our bodies crave vitamin C to help repair and protect our cells, and blueberries are packed full of it" 
                     image={require("../../src/assets/Imagesfoodfacts/3.png")}/>
                  <DiteView 
                     title2="Fish" 
                     text = "Fish is an excellent source of protein and vitamins. Its healthy fats mean eating just one serving of fish a week can improve your heart health. Oily fish like salmon, tuna, mackerel, herring, and sardines are a great choice as they are packed with healthy omega-3 fats. Aim for at least one serving a week of sustainably sourced fish." 
                     image={require("../../src/assets/Imagesfoodfacts/4.png")}/>
                  <DiteView 
                     title2="Legumes" 
                     text = "Many people struggle with eating more legumes, but there are many reasons to try. They are cheap, versatile, full of fiber and vitamins, make an excellent meat substitute, great for heart and gut health, and essential for a healthy dietary pattern." 
                     image={require("../../src/assets/Imagesfoodfacts/5.png")}/>

                   <DiteView 
                    title="Tip 2. Make the healthy choice" 
                    headertext="Choosing and eating wholegrain breads and cereals and healthy oils every day is an important part of a healthy dietary pattern. " 
                    title2="Wholegrain bread and cereals" 
                    text = "You’ve probably heard about whole grains before, so why is everyone recommending them? Wholegrain options contain the healthy fiber and nutrients from grains which keeps us feeling full and energized through the day. Here are some easy swaps:" 
                     image={require("../../src/assets/Imagesfoodfacts/6.png")}/>
                <DiteView 
                    title2="Healthy vegetable oils" 
                    text = "A healthful, high-quality diet requires dietary fats. Oils provide beneficial fatty acids. Choosing oils with a higher level of unsaturated fatty acids may provide the best health benefits. Extra-virgin olive oil, avocado oil, or flaxseed oil are excellent choices when it comes to healthy vegetable oils." 
                     image={require("../../src/assets/Imagesfoodfacts/7.png")}/>
                    <DiteView 
                      title="Tip 3. Enjoy in moderation" 
                      headertext="Eaten in the right amounts these foods can be part of a healthy dietary pattern." 
                      title2="Poultry" 
                      text = "Poultry like chicken and turkey can make a great alternative to red meat. Choose lean cuts and try to serve poultry with lots of vegetables and legumes." 
                     image={require("../../src/assets/Imagesfoodfacts/8.png")}/>
                    <DiteView 
                      title2="Dairy products" 
                      text = "Dairy products include milk, cheese, and yogurt and make up an important part of a healthy diet. Most dietary guidelines recommend 2 servings of dairy products a day." 
                     image={require("../../src/assets/Imagesfoodfacts/9.png")}/>
                    <DiteView 
                      title2="Nuts" 
                      text = "Delicious and nutritious nuts are full of protein, healthy fats, fiber, and nutrients. A small amount each day is an excellent addition to a healthy dietary pattern." 
                     image={require("../../src/assets/Imagesfoodfacts/10.png")}/>
                    <DiteView
                      title2="Eggs" 
                      text = "A few eggs a week provide a great source of protein, plus an alternative to red meat." 
                     image={require("../../src/assets/Imagesfoodfacts/11.png")}/>

                    <DiteView title="Tip 4. Eat less…" headertext="These foods are not part of a healthy dietary pattern so should be avoided or reduced." 
                    title2="Cut back on red meat" 
                    text = "Low intake of red meat is a key part of healthy dietary patterns, improving mental health. Work towards eating less red meat (like beef, lamb, and pork). Great swaps can include eggs, fish, nuts, and legumes. Cutting back on meat is excellent for reducing your risk of cancer and heart disease and reducing your environmental footprint!" 
                     image={require("../../src/assets/Imagesfoodfacts/12.png")}/>
                    <DiteView   
                      title2="Avoid processed meats" 
                      text = "Processed meats are not part of a healthy diet and can increase the risk for colorectal cancer. Processed meat is meat that has been treated in some way to preserve or flavor it through salting, curing, fermenting, and smoking, says Doyle. Think bacon, sausages, hot dogs, canned meat, and other cured meats like salami. And that includes deli meat — whether red (like roast beef or ham) or white (like turkey or chicken)." 
                     image={require("../../src/assets/Imagesfoodfacts/13.png")}/>

                    <DiteView title="Tip 5. Make small healthy changes every day" 
                    title2="Set some healthy goals" 
                    headertext="Make a change to feel a change! No matter how small, any positive change is an excellent step towards better health. Here are some tips to get started:"  
                    text = "Eating vegetables at every meal, eating two pieces of fruit a day, trying a new recipe with legumes each week. Setting healthy goals helps to stay motivated and focused."
                    />
                  <DiteView 
                    title2="Start with positive food goals" 
                    text = "The term diet can carry a lot of negative thoughts and behaviors. Start towards a healthier dietary pattern by focusing on the positives, like adding more fruits, vegetables, and legumes rather than restricting food."
                  />
                  <DiteView 
                    title2="Gain insights" 
                    text = "Keeping a food and mood journal is a great way to gain insights into the link between how you feel and what you eat."
                  />
                  <DiteView 
                    title2="Identify your triggers and plan ahead" 
                    text = "The term diet can carry a lot of negative thoughts and behaviors. Start towards a healthier dietary pattern by focusing on the positives, like adding more fruits, vegetables, and legumes rather than restricting food."
                  />
                  <DiteView 
                    title2="Build a support network" 
                    text = "Involve family and friends in reaching your health goals; everyone can benefit from working towards a healthy dietary pattern."/>
                  <DiteView 
                    title2="Be mindful" 
                    text = "Remove distractions, focus on the food, and enjoy your mealtimes. They’re something to look forward to and savor."/>
                  <DiteView 
                    title2="Don’t let a bad day keep you down" 
                    text = "Missed a goal today? No problems- give it another go tomorrow."/>


         {/* -------------------------------------------------------------------------------------------------------------------------------------------------- */}
     {/* <Text  style={{...styles.text1,alignSelf:"center",textDecorationLine:"underline"}}>Tip 1. Eat more…</Text>
                   <Text allowFontScaling={false}style={styles.text}>
                    Vegetables, fruits, legumes, and fish are all essential parts of a healthy dietary pattern which we should focus on eating more of.{"\n"}
                   </Text>
                  <Text  style={styles.text1}><Text style={styles.textcolor}>{'\u25CF'}</Text> Vegetables</Text>
                {this.state.VegLoading &&  <View style={{ position:"absolute",zIndex:111, height: 160,width:160,marginLeft:100}}>
                  <View style={{width: 150,height: 150,justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#2d1350"} /></View>
                </View> }
                    <Image
                      onLoadStart={()=>this.setState({VegLoading:true})}
                      onLoadEnd={()=>this.setState({VegLoading:false})}
                      source={require("../../src/screen/BrainFoodScence/Berries/1.jpg")}
                      resizeMode="contain"
                      style={{
                      width: 150,
                      height: 150,
                      borderRadius:10,
                      alignSelf:"center",marginVertical:10
                      }}
                      />
                    <Text allowFontScaling={false}style={styles.text}>
                   Any vegetable is a good vegetable - the more you eat, the better! Vegetables are very low in calories and high in vitamins, making them the top choice for a mood- boosting dietary pattern. {"\n\n"}
                    </Text>
                    <Text  style={styles.text1}><Text style={styles.textcolor}>{'\u25CF'}</Text> Fruit</Text>
                    {this.state.FruitLoading &&  <View style={{ position:"absolute",zIndex:111, height: 160,width:160,marginLeft:100}}>
                      <View style={{width: 150,height: 150,justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#2d1350"} /></View>
                     </View> }
                    <Image
                      onLoadStart={()=>this.setState({FruitLoading:true})}
                      onLoadEnd={()=>this.setState({FruitLoading:false})}
                      source={require("../../src/screen/BrainFoodScence/Berries/1.jpg")}
                      resizeMode="contain"
                      style={{
                      width: 150,
                      height: 150,
                      borderRadius:10,
                      alignSelf:"center",marginVertical:10
                      }}
                      />

                    <Text allowFontScaling={false}style={styles.text}>
                   Sweeten up your day with fruit! It’s packed with fiber and vitamins and makes a great snack. When we’re anxious and stressed, our bodies crave vitamin C to help repair and protect our cells, and blueberries are packed full of it.{"\n\n"}
                    </Text>
                    <Text  style={styles.text1}><Text style={styles.textcolor}>{'\u25CF'}</Text> Fish</Text>
                    {this.state.FishLoading &&  <View style={{ position:"absolute",zIndex:111, height: 160,width:160,marginLeft:100}}>
                      <View style={{width: 150,height: 150,justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#2d1350"} /></View>
                     </View> }
                    <Image
                      onLoadStart={()=>this.setState({FishLoading:true})}
                      onLoadEnd={()=>this.setState({FishLoading:false})}
                      source={require("../../src/screen/BrainFoodScence/Berries/1.jpg")}
                      resizeMode="contain"
                      style={{
                      width: 150,
                      height: 150,
                      borderRadius:10,
                      alignSelf:"center",marginVertical:10
                      }}
                      />

                    <Text allowFontScaling={false}style={styles.text}>
                   Fish is an excellent source of protein and vitamins. Its healthy fats mean eating just one serving of fish a week can improve your heart health. Oily fish like salmon, tuna, mackerel, herring, and sardines are a great choice as they are packed with healthy omega-3 fats. Aim for at least one serving a week of sustainably sourced fish.{"\n\n"}</Text>


                    <Text  style={styles.text1}><Text style={styles.textcolor}>{'\u25CF'}</Text> Legumes</Text>
                      <View>
                    {this.state.LegumesLoading &&  <View style={{ position:"absolute",zIndex:111, height: 160,width:160,marginLeft:100}}>
                      <View style={{width: 150,height: 150,justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#2d1350"} /></View>
                     </View> }
                    <Image
                      onLoadStart={()=>this.setState({LegumesLoading:true})}
                      onLoadEnd={()=>this.setState({LegumesLoading:false})}
                      source={require("../../src/screen/BrainFoodScence/Berries/1.jpg")}
                      resizeMode="contain"
                      style={{
                      width: 150,
                      height: 150,
                      borderRadius:10,
                      alignSelf:"center",marginVertical:10
                      }}
                      />
                      </View>

                  <Text allowFontScaling={false}style={styles.text}>
                  Many people struggle with eating more legumes, but there are many reasons to try. They are cheap, versatile, full of fiber and vitamins, make an excellent meat substitute, great for heart and gut health, and essential for a healthy dietary pattern.{"\n\n"}</Text> */}
         {/* -------------------------------------------------------------------------------------------------------------------------------------------------- */}


                    {/* <Text  style={{...styles.text1,alignSelf:"center",textDecorationLine:"underline"}}>Tip 2. Make the healthy choice</Text>
                   <Text allowFontScaling={false}style={styles.text}>
                      Choosing and eating wholegrain breads and cereals and healthy oils every day is an important part of a healthy dietary pattern. 
  {"\n"}                </Text>
                  <Text  style={styles.text1}><Text style={styles.textcolor}>{'\u25CF'}</Text>Wholegrain bread and cereals</Text>
                <View>
                {this.state.WholegrainLoading &&  <View style={{ position:"absolute",zIndex:111, height: 160,width:160,marginLeft:100}}>
                  <View style={{width: 150,height: 150,justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#2d1350"} /></View>
                </View> }
                    <Image
                      onLoadStart={()=>this.setState({WholegrainLoading:true})}
                      onLoadEnd={()=>this.setState({WholegrainLoading:false})}
                      source={require("../../src/screen/BrainFoodScence/Berries/1.jpg")}
                      resizeMode="contain"
                      style={{
                      width: 150,
                      height: 150,
                      borderRadius:10,
                      alignSelf:"center",marginVertical:10
                      }}
                      />
                    </View>
                    <Text allowFontScaling={false}style={styles.text}>
                      You’ve probably heard about whole grains before, so why is everyone recommending them? Wholegrain options contain the healthy fiber and nutrients from grains which keeps us feeling full and energized through the day. Here are some easy swaps:
{"\n"}</Text>


                    <Text  style={styles.text1}><Text style={styles.textcolor}>{'\u25CF'}</Text>Healthy vegetable oils</Text>
                  <View>
                      {this.state.OilsLoading &&  <View style={{ position:"absolute",zIndex:111, height: 160,width:160,marginLeft:100}}>
                      <View style={{width: 150,height: 150,justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#2d1350"} /></View>
                     </View> }
                    <Image
                      onLoadStart={()=>this.setState({OilsLoading:true})}
                      onLoadEnd={()=>this.setState({OilsLoading:false})}
                      source={require("../../src/screen/BrainFoodScence/Berries/1.jpg")}
                      resizeMode="contain"
                      style={{
                      width: 150,
                      height: 150,
                      borderRadius:10,
                      alignSelf:"center",marginVertical:10
                      }}
                      />
                      </View>
                    <Text allowFontScaling={false}style={styles.text}>
                      A healthful, high-quality diet requires dietary fats. Oils provide beneficial fatty acids. Choosing oils with a higher level of unsaturated fatty acids may provide the best health benefits. Extra-virgin olive oil, avocado oil, or flaxseed oil are excellent choices when it comes to healthy vegetable oils.{"\n"}
                    </Text>
                    */}
         {/* -------------------------------------------------------------------------------------------------------------------------------------------------- */}

                    {/* <Text  style={{...styles.text1,alignSelf:"center",textDecorationLine:"underline"}}>Tip 3. Enjoy in moderation</Text>
                    <Text allowFontScaling={false}style={styles.text}>
                    Eaten in the right amounts these foods can be part of a healthy dietary pattern.   
                    {"\n"}</Text>
                  <Text  style={styles.text1}><Text style={styles.textcolor}>{'\u25CF'}</Text>Poultry</Text>
                  <View>
                {this.state.WholegrainLoading &&  <View style={{ position:"absolute",zIndex:111, height: 160,width:160,marginLeft:100}}>
                  <View style={{width: 150,height: 150,justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#2d1350"} /></View>
                </View> }
                    <Image
                      onLoadStart={()=>this.setState({WholegrainLoading:true})}
                      onLoadEnd={()=>this.setState({WholegrainLoading:false})}
                      source={require("../../src/screen/BrainFoodScence/Berries/1.jpg")}
                      resizeMode="contain"
                      style={{
                      width: 150,
                      height: 150,
                      borderRadius:10,
                      alignSelf:"center",marginVertical:10
                      }}
                      />
                    </View>
                    <Text allowFontScaling={false}style={styles.text}>
                    Poultry like chicken and turkey can make a great alternative to red meat. Choose lean cuts and try to serve poultry with lots of vegetables and legumes.{"\n"}</Text>


                    <Text  style={styles.text1}><Text style={styles.textcolor}>{'\u25CF'}</Text>Dairy products</Text>
                  <View>
                      {this.state.OilsLoading &&  <View style={{ position:"absolute",zIndex:111, height: 160,width:160,marginLeft:100}}>
                      <View style={{width: 150,height: 150,justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#2d1350"} /></View>
                     </View> }
                    <Image
                      onLoadStart={()=>this.setState({OilsLoading:true})}
                      onLoadEnd={()=>this.setState({OilsLoading:false})}
                      source={require("../../src/screen/BrainFoodScence/Berries/1.jpg")}
                      resizeMode="contain"
                      style={{
                      width: 150,
                      height: 150,
                      borderRadius:10,
                      alignSelf:"center",marginVertical:10
                      }}
                      />
                      </View>
                    <Text allowFontScaling={false}style={styles.text}>
                      Dairy products include milk, cheese, and yogurt and make up an important part of a healthy diet. Most dietary guidelines recommend 2 servings of dairy products a day.
                        {"\n"}
                    </Text>


                  <Text  style={styles.text1}><Text style={styles.textcolor}>{'\u25CF'}</Text>Nuts</Text>
                  <View>
                      {this.state.OilsLoading &&  <View style={{ position:"absolute",zIndex:111, height: 160,width:160,marginLeft:100}}>
                      <View style={{width: 150,height: 150,justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#2d1350"} /></View>
                     </View> }
                    <Image
                      onLoadStart={()=>this.setState({OilsLoading:true})}
                      onLoadEnd={()=>this.setState({OilsLoading:false})}
                      source={require("../../src/screen/BrainFoodScence/Berries/1.jpg")}
                      resizeMode="contain"
                      style={{
                      width: 150,
                      height: 150,
                      borderRadius:10,
                      alignSelf:"center",marginVertical:10
                      }}
                      />
                      </View>
                    <Text allowFontScaling={false}style={styles.text}>
                    Delicious and nutritious nuts are full of protein, healthy fats, fiber, and nutrients. A small amount each day is an excellent addition to a healthy dietary pattern.
                    {"\n"}
                    </Text> */}

                   
         {/* -------------------------------------------------------------------------------------------------------------------------------------------------- */}
         
            </ScrollView> 
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  text: {
   color: "rgba(255,255,255,0.8)",fontFamily: CustomeFont.Poppins_Medium,fontSize: 13,
  },
text1: {
   color: "rgb(200, 104, 200)",fontFamily: CustomeFont.Poppins_Bold,fontSize: 15,
  },
img:
{
height:400,width:400
},
textcolor:{color:"rgb(200, 104, 200)"}

});

