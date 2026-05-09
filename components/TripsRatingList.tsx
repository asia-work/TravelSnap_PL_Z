import { Trip } from "@/models/Trip";
import { View } from "react-native";
import TripCard from "./TripCard";

export default function TripsRatingList({
  trips,
  deleteTrip,
}: {
  trips: Trip[];
  deleteTrip: (id: number) => void;
}) {
  return (
    <View>
      {trips.map((trip) => (
        <TripCard
          id={trip.id}
          key={trip.id}
          title={trip.title}
          destination={trip.destination}
          date={trip.date}
          rating={trip.rating}
          onUsun={() => deleteTrip(trip.id)}
        />
      ))}
    </View>
  );
}
