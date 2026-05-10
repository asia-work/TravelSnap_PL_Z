import { Colors } from "@/constants/Colors";
import { Trip } from "@/models/Trip";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import RatingStars from "./RatingStars";
export default function TripCard({
  id,
  title,
  destination,
  date,
  rating,
  onUsun,
}: Trip) {
  return (
    <View style={stylesTripCard.card}>
      {/*Header: ikona + tekst obok siebie*/}
      <View style={stylesTripCard.header}>
        <Ionicons name="location" size={20} color="#E94560" />
        <View style={{ marginLeft: 8 }}>
          <Text style={stylesTripCard.title}> Tytuł: {title}</Text>
          <Text style={stylesTripCard.destination}>
            Kierunek podróży: {destination}
          </Text>
        </View>
      </View>
      {/*Data*/}
      <View style={stylesTripCard.dateRow}>
        <Ionicons name="calendar" size={14} color="#61DAFB" />
        <Text style={stylesTripCard.dateText}> Data: {date}</Text>
      </View>
      {/*Gwiazdki*/}
      <RatingStars stars={rating} />
      {onUsun && (
        <Pressable onPress={onUsun}>
          <Text style={stylesTripCard.textButtonDelete}>Usuń</Text>
        </Pressable>
      )}
    </View>
  );
}
const stylesTripCard = StyleSheet.create({
  textButtonDelete: {
    backgroundColor: Colors.accent,
    color: "white",
    marginTop: 8,
    fontWeight: "bold",
    borderRadius: 12,
    padding: 5,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    // Cien iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    // Cien Android
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  title: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  destination: { fontSize: 13, color: Colors.textSecondary, marginTop: 2 },
  dateRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  dateText: { fontSize: 12, color: "#61DAFB", marginLeft: 6 },
});
