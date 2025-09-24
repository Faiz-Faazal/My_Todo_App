
import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface Props {
  children?: React.ReactNode;
}

const GradientBackground: React.FC<Props> = ({ children }) => {
  return (
    <LinearGradient
      colors={["#1253AA", "#05243E"]} // your app colors
      style={styles.container}
    >
        {children}
    </LinearGradient>
  );
};

export default GradientBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
