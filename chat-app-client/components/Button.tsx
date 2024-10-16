import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

type probs = {
  buttonStyle?: object;
  textStyle?: object;
  children: React.ReactNode;
} & TouchableOpacityProps;

export const Button = ({
  buttonStyle,
  textStyle,
  children,
  ...otherprob
}: probs) => {
  const styles = StyleSheet.create({
    text: {
      color: "#00ffff",
      fontWeight: "bold",
      marginBottom: "10%",
      fontSize: 26,
    },
    center: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    submitButton: {
      marginVertical: "2%",
      paddingVertical: "2%",
      paddingHorizontal: "20%",
      backgroundColor: "blue",
    },
    submitText: {
      color: "white",
    },
  });

  return (
    <>
      <TouchableOpacity {...otherprob} style={buttonStyle}>
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    </>
  );
};
