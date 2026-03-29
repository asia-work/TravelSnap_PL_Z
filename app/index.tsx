import TripCard from "@/components/TripCard";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView>
      <TripCard
        title="Podróż po Wrocławiu"
        destination="Wrocław"
        date="20 marca 2025"
        rating={1}
      />
      <TripCard
        title="Podróż po Kłodzku"
        destination="Kłodzko"
        date="28 marca 2025"
        rating={2}
      />
      <TripCard
        title="Podróż po Warszawie"
        destination="Warszawa"
        date="14 marca 2025"
        rating={3}
      />
    </ScrollView>
  );
}
