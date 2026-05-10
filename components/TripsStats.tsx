import { Colors } from "@/constants/Colors";
import { Trip } from "@/models/Trip";
import { StyleSheet, Text, View } from "react-native";

export default function TripsStats({ trips }: { trips: Trip[] }) {
  const calculateRatingMean = (trips: Trip[]): string => {
    let ratingSum = 0;
    let numberOfTrips = trips.length;
    for (let trip of trips) {
      ratingSum += trip.rating;
    }
    return ratingSum !== 0 ? (ratingSum / numberOfTrips).toFixed(1) : "0";
  };

  const uniqueCountryCount = (): number => {
    let uniqueCountries = new Set();
    for (let trip of trips) {
      uniqueCountries.add(trip.destination);
    }
    return uniqueCountries.size;
  };

  return (
    <View style={styles.view}>
      <Text style={styles.container}>Podróże: {trips.length}</Text>
      <Text style={styles.container}>
        Średnia ocena: {calculateRatingMean(trips)}
      </Text>
      <Text style={styles.container}>
        Unikalne kraje: {uniqueCountryCount()}{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    gap: 8,
  },
  container: {
    color: "white",
    flex: 1,
    backgroundColor: Colors.card,
    padding: 12,
  },
});
