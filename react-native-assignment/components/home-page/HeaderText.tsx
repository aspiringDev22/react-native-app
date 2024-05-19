import React from 'react'
import { StyleSheet, Text } from 'react-native'

const HeaderText = () => {
  return (
    <>
    <Text style={styles.headerText1}>Ser Vitalik</Text>
    <Text style={styles.headerText2}>Needs to chill</Text>
    <Text style={styles.headerTextDetails}>Vitalik's Ticket price up by <Text style={styles.highlightText}> 300%.. </Text>view details</Text>
    </>
  )
}

const styles = StyleSheet.create({
    headerText1: {
      color: 'white',
      fontSize: 50,
      fontWeight:"800",
      textTransform:"uppercase",
      fontFamily: 'SpaceMono'
    },
    headerText2: {
      color: '#a5a5a5',
      fontSize: 42,
      fontWeight:"800",
      textTransform:"uppercase",
      fontFamily: 'SpaceMono'
    },
    headerTextDetails:{
  color:"#a5a5a5",
  fontSize: 15,
  marginTop:15,
  fontWeight:"600",
    },
    highlightText:{
      color:"#b4f5a5",
    },
  });
  

export default HeaderText