import { View, Text, StyleSheet } from "react-native";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GK HEALTH</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    height: 50,
    marginBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f51643",
  },
});
