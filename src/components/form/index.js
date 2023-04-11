import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useState } from "react";

import ResultIMC from "./resultIMC";
import { Info } from "./infos";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [result, setResult] = useState(null);
  const [messageIMC, setMessageIMC] = useState("Preencha o peso e a altura");
  const [textButton, setTextButton] = useState("Calcular");
  const [verifier, setVerifier] = useState(false);

  function CalculatorIMC() {
    return setResult((weight / (height * height)).toFixed(2));
  }

  function ValidateIMC() {
    if (weight != null && height != null) {
      CalculatorIMC();
      setVerifier(true);
      console.log(height, weight, result);
      setHeight(null);
      setWeight(null);
      setMessageIMC("Seu IMC é igual a : ");
      setTextButton("Calcular novamente");

      return;
    }
    setVerifier(false);
    setResult(null);
    setTextButton("Calcular");
    setMessageIMC("Preencha o peso e a altura");
  }
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Altura</Text>
        <TextInput
          onChangeText={(text) => setHeight(text)}
          value={height}
          placeholder="Ex. 1.75"
          placeholderTextColor="#948f92"
          keyboardType="numeric"
          style={styles.input}
        />
        <Text style={styles.label}>Peso</Text>
        <TextInput
          onChangeText={(text) => setWeight(text)}
          value={weight}
          placeholder="Ex. 75.4"
          placeholderTextColor="#948f92"
          keyboardType="numeric"
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => ValidateIMC()} style={styles.button}>
            <Text style={styles.placeholder}> {textButton} </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ResultIMC messageResult={messageIMC} result={result} />
      {verifier ? <Info imc={result} /> : ""}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    padding: 10,
    width: "90%",
    height: "90%",
    alignItems: "center",
    backgroundColor: "#a8a3a8",
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    color: "#000",
  },
  input: {
    backgroundColor: "#4f4d4e",
    color: "#fff",
    borderRadius: 8,
    width: "50%",
    padding: 6,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#4f4d4e",
    width: "auto",
    padding: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  placeholder: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
