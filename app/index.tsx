import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  //Tworzymy state: count zaczyna się od 0
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {/*Wyświetlamy aktualną wartość*/}
      <Text style={styles.title}>Counter: {count}</Text>

      {/* Kliknięcie -> setCount -> re-render */}
      <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>+1</Text>
      </Pressable>

      {/*Reset do zera*/}
      <Pressable
        style={[styles.button, { backgroundColor: "#E94560" }]}
        onPress={() => setCount(0)}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F4F8",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#61DAFB",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0A1628",
  },
});

/* Zostawiłam gdyby było jeszcze potrzebne: 

    <ScrollView>
      {DaneTripCard.map((tripCardProps) => (
        <TripCard
          id={tripCardProps.id}
          key={tripCardProps.id}
          title={tripCardProps.title}
          destination={tripCardProps.destination}
          date={tripCardProps.date}
          rating={tripCardProps.rating}
        />
      ))}
    </ScrollView>
*/
