import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
  Modal,
} from "react-native";
import ProgressBar from "react-native-progress/Bar";
import Sound from "react-native-sound";
import Slider from "@react-native-community/slider";
import SoundPlayer from "react-native-sound-player";
Sound.setCategory("Playback");

const sound1 = new Sound(
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  null,
  (error) => {
    if (error) {
      console.log("failed to load the sound", error);
      return;
    }
    // loaded successfully
    console.log(
      "duration in seconds for song 1: " +
        sound1.getDuration() +
        " number of channels: " +
        sound1.getNumberOfChannels()
    );
  }
);

const sound2 = new Sound(
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  null,
  (error) => {
    if (error) {
      console.log("failed to load the sound", error);
      return;
    }
    // loaded successfully
    console.log(
      "duration in seconds for song 2: " +
        sound2.getDuration() +
        " number of channels: " +
        sound2.getNumberOfChannels()
    );
  }
);

const SplashScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isshown, setshown] = useState(false);

  const onclick = () => {
    if (isshown) {
      setshown(false);
      sound1.pause();
      sound2.pause();
    } else {
      setshown(true);

      sound1.play(() => sound1.release());
      sound2.play(() => sound2.release());
    }
  };

  const increaseDecreaseVolume = (currentVal) => {
    if (currentVal > 0.5) {
      // sound 1 value will be reduced
      // sound2 value will be increased
      sound2.setVolume(currentVal);
      sound1.setVolume(1 - currentVal);
    }
    if (currentVal < 0.5) {
      // sound2 value will be decreased
      // sound 1 value will be increased
      sound2.setVolume(currentVal);
      sound1.setVolume(1);
    }
    if (currentVal === 0.5) {
      sound1.setVolume(1);
      sound2.setVolume(1);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.backimg}
        source={require("../assets/background.png")}
      >
        <View style={styles.container}>
          <Text allowFontScaling={false} style={styles.typetext}>
            Type of meditation
          </Text>
          <Text allowFontScaling={false} style={styles.nametext}>
            Name of the music
          </Text>
          <View style={{}}>
            <Image
              style={styles.centerimg}
              source={require("../assets/circle-illustration.png")}
            />
          </View>
          <View style={{ justifyContent: "flex-end", flex: 1 }}>
            <View style={styles.timemain}>
              <View style={styles.heartbox}>
                <TouchableOpacity>
                  <Image
                    style={styles.heartimg}
                    source={require("../assets/heart.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.heartbox}>
                <Text allowFontScaling={false} style={styles.timetext}>
                  00:30:00
                </Text>
              </View>
              <View style={[styles.heartbox, { alignItems: "flex-end" }]}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Image
                    style={styles.heartimg}
                    source={require("../assets/setting.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.lineback}>
              <TouchableOpacity style={styles.holdposition}>
                <Text allowFontScaling={false} style={styles.holdtext}>
                  Hold on the play button to close the player
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 40,
                marginHorizontal: 50,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.clickbtn}>
                  <Image
                    style={[styles.aeroimg]}
                    source={require("../assets/left.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => {
                    onclick();
                  }}
                >
                  <Image
                    style={styles.playbtn}
                    source={
                      isshown
                        ? require("../assets/pause.png")
                        : require("../assets/play.png")
                    }
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <TouchableOpacity style={styles.clickbtn}>
                  <Image
                    style={styles.aeroimg}
                    source={require("../assets/right.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#2D1350CE",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <View
                style={{
                  backgroundColor: "#3C245D",
                  height: 300,
                  borderRadius: 15,
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Image
                      style={styles.closeimg}
                      source={require("../assets/closs-icon.png")}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text
                    allowFontScaling={false}
                    style={{ color: "#fff", fontSize: 20, marginTop: 20 }}
                  >
                    Balance
                  </Text>

                  <Text
                    allowFontScaling={false}
                    style={{ color: "gray", marginTop: 10 }}
                  >
                    Adjust the slider to the volume
                  </Text>
                </View>
                <Slider
                  style={{ width: 300, height: 40, alignSelf: "center" }}
                  minimumValue={0}
                  maximumValue={1}
                  value={0.5}
                  onValueChange={(currentVal) => {
                    return increaseDecreaseVolume(currentVal);
                  }}
                  minimumTrackTintColor="#FFFFFF"
                  maximumTrackTintColor="#000000"
                />
                {/* <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 30,
                    paddingHorizontal: 15,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      let updatedVol = song1Vol - 0.1;
                      console.log(updatedVol, "updated");
                      sound1.setVolume(updatedVol);
                    }}
                  >
                    <Image
                      style={styles.volmic}
                      source={require("../assets/speaker.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      let updatedVol2 = sound2Vol - 0.1;
                      console.log(updatedVol2, "updated");
                      sound1.setVolume(updatedVol2);
                    }}
                  >
                    <Image
                      style={styles.volmic}
                      source={require("../assets/microphone.png")}
                    />
                  </TouchableOpacity>
                </View> */}
                <View style={{ marginTop: 20, alignItems: "center" }}>
                  <ProgressBar
                    color="#707070"
                    progress={0.3}
                    width={290}
                    height={10}
                    borderRadius={88}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 40,
    flex: 1,
  },
  backimg: {
    flex: 1,
  },
  volmic: {
    tintColor: "#fff",
    width: 25,
    height: 25,
  },
  typetext: {
    color: "white",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "center",
  },
  nametext: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 15,
    color: "gray",
  },
  timemain: {
    flexDirection: "row",
  },
  heartimg: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    tintColor: "#AB29FC",
  },
  heartbox: {
    flex: 1,
  },
  timetext: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  lineback: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#79449d",
    marginTop: 50,
  },
  holdposition: {
    position: "absolute",
    top: -10,
    left: "10%",
    backgroundColor: "#3C245D",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  holdtext: {
    color: "#707070",
    fontSize: 13,
  },
  aeroimg: {
    width: 38,
    height: 38,
    // resizeMode: 'contain',
    // tintColor: 'white'
  },
  clickbtn: {
    // width: 40,
    // height: 40,
    // borderRadius: 100,
    // backgroundColor: '#79449d',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  centerimg: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
    // tintColor: '#79449d'
  },
  playbtn: {
    height: 60,
    width: 60,
    resizeMode: "contain",
    // tintColor: '#ED6BFD'
  },
  Touchablecenter: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 100,
    marginHorizontal: 10,
  },
  closeimg: {
    marginTop: -20,
    height: 40,
    width: 40,
  },
});

export default SplashScreen;
