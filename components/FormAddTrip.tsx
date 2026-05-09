import { Trip } from "@/models/Trip";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function FormAddTrip({
  trips,
  setTrips,
}: {
  trips: Trip[];
  setTrips: React.Dispatch<React.SetStateAction<Trip[]>>;
}) {
  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const validateTrip = (ratingTmp: number): boolean => {
    setErrorMsg("");
    if (!title.trim() || !destination.trim()) {
      setErrorMsg("Musisz uzupełnić tytuł oraz destynację");
      return false;
    }

    if (ratingTmp < 1 || ratingTmp > 5) {
      setErrorMsg("Rating musi być liczbą pomiędzy 1 a 5");
      return false;
    }
    let dateTmp = date.trim();
    let yearTmp = dateTmp.substring(0, 4);
    let monthTmp = dateTmp.substring(5, 7);

    let yearVerification = Number(yearTmp) || -1;
    if (yearVerification === -1) {
      setErrorMsg("Błędny rok");
      return false;
    }

    let monthVerification = Number(monthTmp) || -1;
    if (
      monthVerification === -1 ||
      monthVerification < 1 ||
      monthVerification > 12
    ) {
      setErrorMsg("Błędny miesiąc");
      return false;
    }
    return true;
  };

  const resetTempTripStates = () => {
    setTitle("");
    setDestination("");
    setDate("");
    setRating("");
  };

  const handleAddTrip = () => {
    let ratingTmp: number = Number(rating) || 1;

    let validateResult = validateTrip(ratingTmp);
    if (!validateResult) return;

    const newTrip: Trip = {
      id: Date.now(),
      title: title.trim(),
      destination: destination.trim(),
      date: date.trim() || "Brak Daty",
      rating: ratingTmp,
    };
    setTrips([...trips, newTrip]);

    resetTempTripStates();
  };

  return (
    <View>
      <Text style={stylesFormAddTrip.heading}>
        TravelSnap: Liczba podróży: {trips.length}
      </Text>

      <TextInput
        style={stylesFormAddTrip.input}
        placeholder="Tytuł podróży..."
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={stylesFormAddTrip.input}
        placeholder="Destynacja..."
        value={destination}
        onChangeText={setDestination}
      />
      <TextInput
        style={stylesFormAddTrip.input}
        placeholder="Data (e.g. 2024-07)..."
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={stylesFormAddTrip.input}
        placeholder="Ocena (1-5)..."
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
      />
      <View>
        <Text style={{ color: "red" }}>{errorMsg}</Text>
      </View>

      <Pressable style={stylesFormAddTrip.addBtn} onPress={handleAddTrip}>
        <Text style={stylesFormAddTrip.addText}>+ Dodaj podróż</Text>
      </Pressable>
    </View>
  );
}
const stylesFormAddTrip = StyleSheet.create({
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
