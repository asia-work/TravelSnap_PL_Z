import { Trip } from "@/models/Trip";
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
    <View>
      <Text> Tytuł: {title}</Text>
      <Text> Kierunek podróży: {destination}</Text>
      <Text> Data: {date}</Text>
      <Text> Ocena:{rating}</Text>
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
    color: "red",
    marginTop: 8,
    fontWeight: "bold",
  },
});
