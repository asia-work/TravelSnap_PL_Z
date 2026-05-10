import { Colors } from "@/constants/Colors";
import { ScreenHeaderProps } from "@/models/ScreenHeaderProps";
import { StyleSheet, Text, View } from "react-native";

export default function ScreenHeader({
  screenHeaderProps,
}: {
  screenHeaderProps: ScreenHeaderProps;
}) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerH1}>TravelSnap</Text>
        <Text style={styles.headerp}>Twój dziennik podróży</Text>
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{screenHeaderProps.tripCount}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerH1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  headerp: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  badge: {
    borderRadius: 100,
    backgroundColor: Colors.accent,
    padding: 5,
  },
  badgeText: {
    color: "white",
  },
});
