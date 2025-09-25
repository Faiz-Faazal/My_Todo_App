import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children?: ReactNode;
}

const GradientBackground: React.FC<Props> = ({ children }) => {
  return (
    <LinearGradient
      colors={["#1253AA", "#05243E"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default GradientBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});
