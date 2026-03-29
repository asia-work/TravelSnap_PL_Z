import TripCard from "@/components/TripCard";
import { DaneTripCard } from "@/data/DaneTripCard";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  return (
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
  );
}
