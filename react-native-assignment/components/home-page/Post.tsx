import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  profile: string;
  name: string;
  idName: string;
  isVerified: boolean;
  content: string;
  rank: string;
  tip: string;
  holders: string;
  ethVal: string;
}

const Post = ({
  profile,
  name,
  idName,
  isVerified,
  content,
  rank,
  tip,
  holders,
  ethVal,
}: Props) => {
  return (
    <View style={postStyles.postContainer}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image
          source={{ uri: profile || "https://picsum.photos/60" }}
          style={postStyles.profileImage}
        />
        <View style={postStyles.header}>
          <Text style={postStyles.name}>{name}</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={postStyles.idName}>{idName} \</Text>
            {isVerified && (
              <Text style={postStyles.verified}>
                {" "}
                <AntDesign name="star" size={15} color="#b4f5a5" /> Verified
                Profile
              </Text>
            )}
          </View>
        </View>
      </View>
      <View style={postStyles.postContent}>
        <Text style={postStyles.content}>
          {content}<Text style={{color:"gray"}}>view more</Text>
        </Text>
        <View style={postStyles.footer}>
          <View
            style={postStyles.footerContainer}
          >
            <Text style={postStyles.rank}>{rank}</Text>
            <Text style={postStyles.tip}>{tip}</Text>
          </View>
          <View
               style={postStyles.footerWrapper}
          >
            <Text style={postStyles.holders}>{holders}</Text>
            <Text style={postStyles.ethVal}>{ethVal}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const postStyles = StyleSheet.create({
  postContainer: {
    marginBottom: 20,
    backgroundColor: "#0f0f14",
    padding: 15,
    borderRadius: 10,
    flexDirection: "column",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  postContent: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 10,
    gap: 6,
  },
  name: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
  },
  verified: {
    color: "#b4f5a5",
    fontSize: 14,
    marginRight: 5,
  },
  idName: {
    color: "#a5a5a5",
    fontSize: 14,
  },
  content: {
    color: "#e8e8e8",
    fontSize: 16,
    marginBottom: 30,
    fontWeight:700,
  },
  footer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  footerContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 15,
    borderColor:"black",
    borderWidth:2,
    borderLeftWidth:0,
    borderRightWidth:0,
  },
  footerWrapper:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 15,
        paddingBottom: 15,
  },
  rank: {
    color: "#89898a",
    fontSize: 17,
  },
  tip: {
    color: "#b4f5a5",
    fontSize: 17,
    fontWeight:'bold'
  },
  holders: {
    color: "#89898a",
    fontSize: 17,
  },
  ethVal: {
    color: "#b4f5a5",
    fontSize: 17,
    fontWeight:'bold'
  },
});

export default Post;
