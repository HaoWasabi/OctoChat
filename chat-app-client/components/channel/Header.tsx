import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { TabBarIcon } from "../navigation/TabBarIcon";
import { router } from "expo-router";

const styles = StyleSheet.create({
  test: {
    color: "white",
  },
  header: {
    display: "flex",
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#5c5b57",
    height: "5%",
    justifyContent: "center",
  },
  icon: {
    marginLeft: 5,
    width: "10%",
  },
});

const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => {
            router.back();
          }}
        >
          <TabBarIcon style={styles.icon} size={40} name="arrow-back" />
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

export default Header;
