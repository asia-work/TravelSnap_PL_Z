import { Trip } from "@/models/Trip";
import { Text, View } from "react-native";
import RatingStars from "./RatingStars";

export default function TripCard({
  id,
  title,
  destination,
  date,
  rating,
}: Trip) {
  return (
    <View>
      <Text> Tytuł: {title}</Text>
      <Text> Kierunek podróży: {destination}</Text>
      <Text> Data: {date}</Text>
      <Text> Ocena:{rating}</Text>
      <RatingStars stars={rating} />
    </View>
  );
}
