import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function EmptyState() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.View}>
        <Ionicons name="airplane-outline" size={64} color={Colors.primary} />
        <Text style={styles.headerH1}>Brak podróży</Text>
        <Text style={styles.headerp}>Dodaj swoją pierwszą podróż</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    height: 300,
  },
  View: { justifyContent: "center", alignItems: "center", gap: 12 },
  headerH1: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  headerp: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
});
