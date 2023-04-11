import { View, Text, StyleSheet } from "react-native";

export default function ResultIMC({ result, messageResult }) {
  return (
    <View style={styles.container}>
      <Text style={styles.messageResult}> {messageResult}</Text>
      <Text style={styles.result}> {result} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  messageResult: {
    fontSize: 18,
  },
  result: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f51643",
  },
});
