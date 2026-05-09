import FormAddTrip from "@/components/FormAddTrip";
import TripsRatingList from "@/components/TripsRatingList";
import { Trip } from "@/models/Trip";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function HomeScreen() {
  //Lista podróży - tablica obiektów Trip
  const [trips, setTrips] = useState<Trip[]>([]);

  const handleDelete = (id: number) => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  return (
    <ScrollView style={styles.container}>
      <FormAddTrip trips={trips} setTrips={setTrips} />
      <TripsRatingList trips={trips} deleteTrip={handleDelete} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F0F4F8",
  }
});
