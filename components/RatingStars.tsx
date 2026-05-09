import { Text } from "react-native";

export default function RatingStars({ stars }: { stars: number }) {
  switch (stars) {
    case 1:
      return <Text>★☆☆☆☆</Text>;
    case 2:
      return <Text>★★☆☆☆</Text>;
    case 3:
      return <Text>★★★☆☆</Text>;
    case 4:
      return <Text>★★★★☆</Text>;
    case 5:
      return <Text>★★★★★</Text>;
    default:
      return <Text>błędna ocena</Text>;
  }
  // // Opcjonalne inne podejście
  // return <Text>{"★".repeat(stars) + "☆".repeat(5 - stars)}</Text>;
}
