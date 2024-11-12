import { Redirect, useLocalSearchParams } from "expo-router";
import { Alert, SafeAreaView, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { type serverChannel } from "../../../types/model";

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
  const { user_id, server_id } = useLocalSearchParams();
  const [channelList, setChannelList] = useState(Array<serverChannel>);

  const getChannelList = async () => {
    try {
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_SERVER_URL}/${server_id}/channel`
      );
      if (!res.ok) {
        Alert.alert("Lỗi hệ thống vui lòng thử lại sau");
        return <Redirect href={"/login"} />;
      }

      const json = (await res.json()) as Array<serverChannel>;

      setChannelList(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChannelList();
  }, []);

  // const arr = [0];
  // arr.pop();
  // for (let i = 1; i <= 10; i++) {
  //   arr.push(i);
  // }

  const listChannel = channelList.map((item) => (
    <Link
      style={styles.blue}
      key={item.id}
      // href={"/" + user_id + "/" + server_id + "/" + item}
      href={`/${user_id}/${server_id}/${item.id}`}
    >
      go to {item.channel_name}
    </Link>
  ));

  return (
    <>
      <SafeAreaView style={styles.center}>
        <Text style={styles.text}>
          hi this is home of {user_id} in {server_id}
        </Text>
        {listChannel}
      </SafeAreaView>
    </>
  );
};

export default index;
