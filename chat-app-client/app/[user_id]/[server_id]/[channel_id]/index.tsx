import { router, useLocalSearchParams } from "expo-router";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import { socket } from "../../../../utility/socket";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
  },
  blue: {
    color: "blue",
    fontSize: 20,
  },
  center: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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

  return (
    <>
      <GestureDetector gesture={fling}>
        <SafeAreaView style={styles.center}>
          <Text style={styles.text}>
            hi this is chat of {user_id} in channel {channel_id} of {server_id}
          </Text>
        </SafeAreaView>
      </GestureDetector>
    </>
  );
};

export default index;
