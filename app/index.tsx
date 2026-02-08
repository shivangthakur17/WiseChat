import React from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <Text style={styles.greeting}>Good afternoon</Text>
 
        <View style={styles.grid}>
          {["Liked Songs", "Top Hits", "Chill Mix", "Daily Mix", "Workout", "Focus"].map((item) => (
            <View key={item} style={styles.gridItem}>
              <Text style={styles.gridText}>{item}</Text>
            </View>
          ))}
        </View>
 
        <Text style={styles.sectionTitle}>Recently played</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {["Pop Mix", "Hip Hop", "Indie", "Throwbacks"].map((item) => (
            <View key={item} style={styles.playlistCard}>
              <View style={styles.cover} />
              <Text style={styles.playlistText}>{item}</Text>
            </View>
          ))}
        </ScrollView>
 
        <Text style={styles.sectionTitle}>Made for you</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {["Daily Mix 1", "Daily Mix 2", "Daily Mix 3"].map((item) => (
            <View key={item} style={styles.playlistCard}>
              <View style={styles.cover} />
              <Text style={styles.playlistText}>{item}</Text>
            </View>
          ))}
        </ScrollView>
 
        <Text style={styles.sectionTitle}>Recommended for today</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {["Chill Vibes", "Mood Booster", "Energy"].map((item) => (
            <View key={item} style={styles.playlistCard}>
              <View style={styles.cover} />
              <Text style={styles.playlistText}>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
 
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.alertButton}
        onPress={() => Alert.alert("Alert Button pressed")}
      >
        <Text style={styles.alertButtonText}>Alert</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#121212",
  },
  container: {
    padding: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  gridItem: {
    width: "48%",
    height: 60,
    backgroundColor: "#1f1f1f",
    borderRadius: 6,
    justifyContent: "center",
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  gridText: {
    color: "#ffffff",
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 12,
  },
  playlistCard: {
    width: 140,
    marginRight: 16,
    marginBottom: 24,
  },
  cover: {
    width: 140,
    height: 140,
    backgroundColor: "#333333",
    borderRadius: 8,
    marginBottom: 8,
  },
  playlistText: {
    color: "#ffffff",
    fontSize: 14,
  },
  alertButton: {
    margin: 16,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#1DB954",
  },
  alertButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
 
 