import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const sectionsRow1 = ["Around the World", "Too Chill?", "Crypto Kings", "Bitcoin News"];
const sectionsRow2 = ["Tech Talk", "Health & Wellness", "Finance", "Travel", "Foodie Heaven"];

const CuratedLists = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>CURATED LISTS \\</Text>
        <View style={styles.horizontalLine} />
      </View>
      <ScrollView horizontal contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          {sectionsRow1.map((section, index) => (
            <TouchableOpacity key={index} style={styles.tab}>
              <Text style={styles.tabText}>{section}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {sectionsRow2.map((section, index) => (
            <TouchableOpacity key={index} style={styles.tab}>
              <Text style={styles.tabText}>{section}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    height:160,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    color: "#a5a5a5",
    fontSize: 17,
    fontWeight: "600",
    marginRight: 10,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#202020",
    marginTop:16,
  },
  scrollViewContent: {
    display:"flex",
    flexDirection:"column",
    paddingLeft: 5,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tab: {
    backgroundColor: "#0f0f14",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    marginBottom: 10,
    borderColor: "#202020",
    borderWidth: 0.5,
    minHeight: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default CuratedLists;
