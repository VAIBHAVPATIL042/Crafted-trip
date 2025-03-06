import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import FeedbackForm from "../../components/FeedbackForm"; // Ensure correct import path

const FeedbackScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Give Your Feedback</Text>
      <FeedbackForm />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default FeedbackScreen;
