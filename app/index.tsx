import FormAddTrip from "@/components/FormAddTrip";
import TripCard from "@/components/TripCard";
import { Trip } from "@/models/Trip";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet
} from "react-native";

export default function HomeScreen() {
  //Lista podróży - tablica obiektów Trip
  const [trips, setTrips] = useState<Trip[]>([]);

  const handleDelete = (id: number) => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  return (
    <ScrollView style={styles.container}>
      <FormAddTrip trips={trips} setTrips={setTrips} />

      {trips.map((trip) => (
        <TripCard
          id={trip.id}
          key={trip.id}
          title={trip.title}
          destination={trip.destination}
          date={trip.date}
          rating={trip.rating}
          onUsun={() => handleDelete(trip.id)}
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
