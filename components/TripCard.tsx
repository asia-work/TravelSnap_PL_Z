import { TripCardProps } from "@/models/TripCardProps";
import { Text, View } from "react-native";
import RatingStars from "./RatingStars";

export default function TripCard({
  title,
  destination,
  date,
  rating,
}: TripCardProps) {
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
