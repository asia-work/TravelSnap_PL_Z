import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
export default function RatingStars({ stars }: { stars: number }) {
  return (
    <View style={stylesRatingStars.stars}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Ionicons
          key={i}
          name={i <= stars ? "star" : "star-outline"}
          size={16}
          color={Colors.accent}
        />
      ))}
    </View>
  );
}
const stylesRatingStars = StyleSheet.create({
  stars: { flexDirection: "row", gap: 2 },
});
