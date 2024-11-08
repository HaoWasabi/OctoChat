import { Redirect, router, useLocalSearchParams } from "expo-router";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import { socket } from "../../../../utility/socket";
import { useEffect, useState, useRef } from "react";
import { Button } from "../../../../components/Button";
import { useSession } from "../../../../components/Seesionprovider";
import { channelMessage } from "../../../../types/model";
import { sendMessageRespone } from "../../../../types/request";

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
    height: "100%",
    width: "100%",
  },
  top_area: {
    width: "100%",
    height: "90%",
    backgroundColor: "#353A3F",
    paddingBottom: 4,
  },
  bottom_area: {
    width: "100%",
    height: "10%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  input_message: {
    width: "82%",
    height: "80%",
    backgroundColor: "#383A40",
    marginLeft: 5,
    padding: 10,
    borderRadius: 10,
    overflow: "scroll",
    color: "#BBBEC2",
  },
  send_message_btn: {
    width: "15%",
    height: "80%",
    backgroundColor: "#5764F1",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 8,
    borderRadius: 30,
  },
  send_message_icon: {
    flex: 1,
    width: "100%",
    height: "100%",
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
    marginTop: 3,
  },
});

const index = () => {
  const { user_id, server_id, channel_id } = useLocalSearchParams();
  const { session } = useSession();
  if (!session) {
    Alert.alert("Lỗi", "Vui lòng đăng nhập");
    return <Redirect href="/" />;
  }

  const currentUser = JSON.parse(session);
  const scrollViewRef = useRef<ScrollView>(null);

  const [history, setHistory] = useState(Array<channelMessage>);
  const [message, setMessage] = useState(Array<channelMessage>);
  const [currentMessage, setCurrenMessage] = useState("");

  const [isConnect, setIsConnect] = useState(socket.connected);

  const getHistoryMessage = async (page = 1) => {
    try {
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_SERVER_URL}/channel/${channel_id}/message`
      );
      if (!res.ok) {
        Alert.alert("Lỗi", "Không thể lấy được lịch sử");
        return;
      }
      const json = (await res.json()) as Array<channelMessage>;
      setHistory(json);
    } catch (error) {
      console.log(error);
    }
  };

  //initalize
  useEffect(() => {
    getHistoryMessage();
    socket.connect();

    function onConnect() {
      setIsConnect(true);
      console.log(`connected`);
    }

    function onDisconnect() {
      setIsConnect(false);
      console.log(`disconnected`);
    }

    function reciveMessage(value: Array<channelMessage>) {
      // const test = [...message, ...value];
      setMessage((prev) => [...prev, value[0]]);
    }

    socket.emit("joinRoom", channel_id);
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("messageRecive", reciveMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("messageRecive", reciveMessage);
    };
  }, []);

  const handleSend = async () => {
    if (currentMessage === "") return;

    const newMessage = {
      user_id: currentUser.id,
      user_name: currentUser.user_name,
      channel_id: channel_id,
      message: currentMessage,
    };
    try {
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_SERVER_URL}/channel/${channel_id}/message/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMessage),
        }
      );
      if (!res.ok) {
        Alert.alert("Lỗi", "Xảy ra lỗi trong lúc nhắn tin");
        return;
      }

      const json = (await res.json()) as sendMessageRespone;

      if (!json.success) Alert.alert("Lỗi", json.message);
      setCurrenMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const back = async () => {
    router.back();
  };

  //history message
  const historyMessage = history.map((item) => (
    <View key={item.id} style={styles.message_container}>
      <Text style={styles.user_name}>{item.user_name}</Text>
      <Text style={styles.message_content}>{item.message}</Text>
    </View>
  ));

  const current_message = message.map((item) => (
    <View key={item.id} style={styles.message_container}>
      <Text style={styles.user_name}>{item.user_name}</Text>
      <Text style={styles.message_content}>{item.message}</Text>
    </View>
  ));

  const fling = Gesture.Fling().direction(Directions.RIGHT).onFinalize(back);

  return (
    <>
      {/* <GestureDetector gesture={fling}>
        
      </GestureDetector> */}
      <View style={styles.center}>
        <View style={styles.top_area}>
          <ScrollView
            onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}
            ref={scrollViewRef}
            style={styles.container}
          >
            {historyMessage}
            {current_message}
          </ScrollView>
        </View>
        <View style={styles.bottom_area}>
          <TextInput
            style={styles.input_message}
            placeholder="Put your text here"
            placeholderTextColor="#BBBEC2"
            value={currentMessage}
            onChangeText={(e) => {
              setCurrenMessage(e);
            }}
          ></TextInput>
          <Button
            onPress={handleSend}
            buttonStyle={styles.send_message_btn}
            textStyle={styles.blue}
          >
            {/* <Image source={send_message_btn_icon} style={styles.send_message_icon} resizeMode="cover"></Image> */}
            Send
          </Button>
        </View>
      </View>
    </>
  );
};

export default index;
