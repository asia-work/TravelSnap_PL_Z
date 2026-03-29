import { ScrollView, StyleSheet, Text, View } from "react-native";

interface TripCardProps {
  title: string;
  destination: string;
  date: string;
  rating: number;
}
function TripCard({ title, destination, date, rating }: TripCardProps) {
  return (
    <View>
      <Text> Tytuł: {title}</Text>
      <Text> Kierunek podróży: {destination}</Text>
      <Text> Data: {date}</Text>
      <Text> Ocena:{rating}</Text>
      {rating === 1 && <Text>★☆☆☆☆</Text>}
      {rating === 2 && <Text>★★☆☆☆</Text>}
      {rating === 3 && <Text>★★★☆☆</Text>}
      {rating === 4 && <Text>★★★★☆</Text>}
      {rating === 5 && <Text>★★★★★</Text>}
    </View>
  );
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#e94560",
    marginBottom: 24,
  },
  author: {
    fontSize: 16,
    color: "#888",
    fontStyle: "italic",
  },
});
