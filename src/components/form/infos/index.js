import { View, Text, StyleSheet } from "react-native";

// IMC <18,5kg/m2 (baixo peso); IMC >18,5 até 24,9kg/m2 (eutrofia); IMC ≥25 até 29,9kg/m2 (sobrepeso); e IMC >30,0kg/m2 (obesidade).

export function Info({ imc, conferirIMC }) {
  function conferirIMC() {
    if (imc < 18.5) {
      return <Text> Você está abaixo do peso! </Text>;
    }
    if (imc > 18.5 && imc <= 24.9) {
      return <Text> Você está em eutrofia!{"\n"} (nutrição de qualidade)</Text>;
    }
    if (imc >= 25 && imc <= 29.9) {
      return <Text> Você está em sobrepeso!</Text>;
    }
    if (imc > 30) {
      return <Text> Você está obeso!</Text>;
    }
  }
  conferirIMC = conferirIMC();

  return (
    <View style={styles.container}>
      <Text style={styles.info}> {conferirIMC} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 8,
    alignItems: "center",
  },
  info: {
    fontSize: 16,
    textAlign: "center",
  },
});
