import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

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

  const arr = [0];
  arr.pop();
  for (let i = 1; i <= 10; i++) {
    arr.push(i);
  }

  const listChannel = arr.map((item) => (
    <Link
      style={styles.blue}
      key={item}
      // href={"/" + user_id + "/" + server_id + "/" + item}
      href={`/${user_id}/${server_id}/${item}`}
    >
      go to channel {item}
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
