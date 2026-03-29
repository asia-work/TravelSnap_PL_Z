import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Jak masz na imię?</Text>

      <TextInput
        style={styles.input}
        placeholder="Wpisz swoje imię..."
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.greeting}>
        {name ? `Hello, ${name}!` : "Type your name above"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#F0F4F8",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CED4DA",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#FFF",
  },
  greeting: {
    fontSize: 24,
    marginTop: 16,
    color: "#61DAFB",
    fontWeight: "bold",
  },
});
