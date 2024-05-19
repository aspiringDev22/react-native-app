import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import CuratedLists from "@/components/home-page/CuratedLists";
import HeaderText from "@/components/home-page/HeaderText";
import Post from '@/components/home-page/Post';
import postsData from '@/constants/data';


export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://picsum.photos/id/45/200/300" }}
          style={styles.image}
        />
      </View>
      {/* Profile Image of page with header text */}
      <HeaderText />
      {/* Curated lists shown with horizontal scrollable list items */}
      <CuratedLists />
      <View style={styles.horizontalTabHeaderContainer}>
        <Text style={styles.horizontalTabHeader}>CASTS FOR YOU \\</Text>
        <View style={styles.horizontalLine} />
      </View>
      {/* Posts container with the data rendered from postsData(custom data) */}
      <View style={styles.postsContainer}>
        {postsData.map((post:any,i:number) => (
          <Post
            key={i}
            profile={post.profile}
            name={post.name}
            idName={post.idName}
            isVerified={post.isVerified}
            content={post.content}
            rank={post.rank}
            tip={post.tip}
            holders={post.holders}
            ethVal={post.ethVal}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 20,
    marginTop: 70,
  },
  imageContainer: {
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#b4f5a5",
    padding: 5,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  horizontalTabHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
  },
  horizontalTabHeader: {
    color: "#a5a5a5",
    fontSize: 17,
    fontWeight: "600",
    marginRight: 10,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#202020",
    marginTop: 16,
  },
  postsContainer: {
    marginTop: 20,
    width: '100%',
  },
});
