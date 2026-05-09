import TripCard from "@/components/TripCard";
import { Trip } from "@/models/Trip";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");
  //Lista podróży - tablica obiektów Trip
  const [trips, setTrips] = useState<Trip[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleAddTrip = () => {
    setErrorMsg("");
    if (!title.trim() || !destination.trim()) {
      setErrorMsg("Musisz uzupełnić tytuł oraz destynację");
      return;
    }
    let ratingTmp: number = Number(rating) || 1;

    if (ratingTmp < 1 || ratingTmp > 5) {
      setErrorMsg("Rating musi być liczbą pomiędzy 1 a 5");
      return;
    }
    let dateTmp = date.trim();
    let yearTmp = dateTmp.substring(0, 4);
    let monthTmp = dateTmp.substring(5, 7);

    let yearVerification = Number(yearTmp) || -1;
    if (yearVerification === -1) {
      setErrorMsg("Błędny rok");
      return;
    }

    let monthVerification = Number(monthTmp) || -1;
    if (
      monthVerification === -1 ||
      monthVerification < 1 ||
      monthVerification > 12
    ) {
      setErrorMsg("Błędny miesiąc");
      return;
    }

    const newTrip: Trip = {
      id: Date.now(),
      title: title.trim(),
      destination: destination.trim(),
      date: date.trim() || "Brak Daty",
      rating: ratingTmp,
    };
    setTrips([...trips, newTrip]);
    setTitle("");
    setDestination("");
    setDate("");
    setRating("");
  };
  const handleUsun = (id: number) => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>
        {" "}
        TravelSnap: Liczba podróży: {trips.length}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Tytuł podróży..."
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Destynacja..."
        value={destination}
        onChangeText={setDestination}
      />
      <TextInput
        style={styles.input}
        placeholder="Data (e.g. 2024-07)..."
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Ocena (1-5)..."
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
      />
      <View>
        <Text style={{ color: "red" }}>{errorMsg}</Text>
      </View>

      <Pressable style={styles.addBtn} onPress={handleAddTrip}>
        <Text style={styles.addText}>+ Dodaj podróż</Text>
      </Pressable>

      {trips.map((trip) => (
        <TripCard
          id={trip.id}
          key={trip.id}
          title={trip.title}
          destination={trip.destination}
          date={trip.date}
          rating={trip.rating}
          onUsun={() => handleUsun(trip.id)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F0F4F8",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 48,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CED4DA",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#FFF",
    marginBottom: 8,
  },
  addBtn: {
    backgroundColor: "#61DAFB",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 4,
    marginBottom: 16,
  },
  addText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0A1628",
  },
});
