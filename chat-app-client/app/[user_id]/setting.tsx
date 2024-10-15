import { SafeAreaView, Text, StyleSheet } from "react-native";
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

const setting = () => {
  return (
    <SafeAreaView style={styles.center}>
      <Text style={styles.text}>hi this is setting</Text>
    </SafeAreaView>
  );
};

export default setting;
