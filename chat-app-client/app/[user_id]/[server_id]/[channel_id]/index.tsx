import { router, useLocalSearchParams } from "expo-router";
import {  Image ,SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import { socket } from "../../../../utility/socket";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/Button";
import React from 'react';
// import { Image } from 'expo-image';

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
  },
  blue: {
    color: "blue",
    fontSize: 18,
  },
  center: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
    width: '100%',
  },
  top_area: {
    width: '100%',
    height: '90%',
    backgroundColor: '#353A3F',
    paddingBottom: 4
  },
  bottom_area: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  input_message: {
    width: '82%',
    height: '80%',
    backgroundColor: '#383A40',
    marginLeft: 5,
    padding: 10,
    borderRadius: 10,
    overflow: 'scroll',
    color: '#BBBEC2',
  },
  send_message_btn: {
    width: '15%',
    height: '80%',
    backgroundColor: "#5764F1",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 8,
    borderRadius: 30,
  },
  send_message_icon: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    width: "100%",
    height: "100%",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "flex-end"
    
  },
  message_container: {
    padding: 10,
    marginTop: 4,
  },
  user_name: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  message_content: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 10,
    marginTop: 3
  },
});

const index = () => {
  const { user_id, server_id, channel_id } = useLocalSearchParams();
  // const [isConnect, setIsConnect] = useState(socket.connected);

  // useEffect(() => {
  //   socket.connect();
  //   function onConnect() {
  //     setIsConnect(true);
  //     console.log(`connected`);
  //   }

  //   function onDisconnect() {
  //     setIsConnect(false);
  //     console.log(`disconnected`);
  //   }

  //   socket.on("connect", onConnect);
  //   socket.on("disconnect", onDisconnect);

  //   return () => {
  //     socket.off("connect", onConnect);
  //     socket.off("disconnect", onDisconnect);
  //   };
  // }, []);

  function back() {
    // socket.disconnect();
    router.back();
  }

  const fling = Gesture.Fling().direction(Directions.RIGHT).onFinalize(back);
  const send_message_btn_icon = require ('../../../../assets/images/send_message_icon.png');

  return (
    <>
      {/* <GestureDetector gesture={fling}>
        
      </GestureDetector> */}
      <View style={styles.center}>
          <View style={styles.top_area}>
            <ScrollView style={styles.container}>
            <View style={styles.message_container}>
                <Text style={styles.user_name}>This is me</Text>
                <Text style={styles.message_content}>My own chat</Text>
              </View>
              <View style={styles.message_container}>
                <Text style={styles.user_name}>David</Text>
                <Text style={styles.message_content}>This is a chat channel</Text>
              </View>
              <View style={styles.message_container}>
                <Text style={styles.user_name}>Andrew</Text>
                <Text style={styles.message_content}>My name is Dumbass, And I say hey, yeah, yeah, yeah yay
Hey, yay, yay
I said hey, what's goin' on?</Text>
              </View>
              <View style={styles.message_container}>
                <Text style={styles.user_name}>Michael</Text>
                <Text style={styles.message_content}>Hello there</Text>
              </View>
              <View style={styles.message_container}>
                <Text style={styles.user_name}>Steve</Text>
                <Text style={styles.message_content}>Mai cac?</Text>
              </View>
              <View style={styles.message_container}>
                <Text style={styles.user_name}>Steve</Text>
                <Text style={styles.message_content}>Mai cac?</Text>
              </View>
              <View style={styles.message_container}>
                <Text style={styles.user_name}>Steve</Text>
                <Text style={styles.message_content}>Mai cac?</Text>
              </View>
              <View style={styles.message_container}>
                <Text style={styles.user_name}>Steve</Text>
                <Text style={styles.message_content}>Mai cac?</Text>
              </View>

              <View style={styles.message_container}>
                <Text style={styles.user_name}>Steve</Text>
                <Text style={styles.message_content}>Mai cac?</Text>
              </View>
              <View style={styles.message_container}>
                <Text style={styles.user_name}>Steve</Text>
                <Text style={styles.message_content}>Mai cac?</Text>
              </View>
              <View style={styles.message_container}>
                <Text style={styles.user_name}>Steve</Text>
                <Text style={styles.message_content}>Mai cac?</Text>
              </View>
              <View style={styles.message_container}>
                <Text style={styles.user_name}>Steve</Text>
                <Text style={styles.message_content}>Mai cac?</Text>
              </View>
              <View style={styles.message_container}>
                <Text style={styles.user_name}>Steve</Text>
                <Text style={styles.message_content}>Mai cac?</Text>
              </View>
              <View style={styles.message_container}>
                <Text style={styles.user_name}>Steve</Text>
                <Text style={styles.message_content}>Mai cac?</Text>
              </View>
              <View style={styles.message_container}>
                <Text style={styles.user_name}>Steve</Text>
                <Text style={styles.message_content}>Mai cac?</Text>
              </View><View style={styles.message_container}>
                <Text style={styles.user_name}>Steve</Text>
                <Text style={styles.message_content}>Dit me may</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.bottom_area}>
            <TextInput style={styles.input_message} placeholder="Put your text here" placeholderTextColor="#BBBEC2"></TextInput>
            <Button buttonStyle={styles.send_message_btn} textStyle={styles.blue}>
              {/* <Image source={send_message_btn_icon} style={styles.send_message_icon} resizeMode="cover"></Image> */}
              Send
            </Button>
          </View>
        </View>
    </>
  );
};

export default index;
