import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import COLORS from "../constants/colors";
import { auth } from "../firebase";
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function RateApp() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (text) => {
    setComment(text);
  };

  const handleSubmit = async () => {
    // Create an object with the feedback data to send to the server
    const feedbackData = {
      rating,
      comment,
      email: auth.currentUser?.email,
      timestamp: new Date(), // Current timestamp
    };

    // Add the feedback data to Firestore
    const docRef = await addDoc(
      collection(firestore, "feedback"),
      feedbackData
    );
    console.log("Document written with ID: ", docRef.id);
    // firestore
    //   .collection("feedback")
    //   .add(feedbackData)
    //   .then((docRef) => {
    //     console.log("Feedback Data saved successfully with ID:", docRef.id);
    //   })
    //   .catch((error) => {
    //     console.error("Error saving feedback:", error);
    //     // Handle the error, e.g., show an error message to the user
    //   });
  };

  const renderStars = () => {
    const maxRating = 5; // You can change this to the maximum rating you want
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <Text
          key={i}
          style={[styles.star, i <= rating ? styles.filledStar : null]}
          onPress={() => handleRatingChange(i)}
        >
          &#9733; {/* Unicode star character */}
        </Text>
      );
    }

    return stars;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/Feedback.png")} style={styles.image} />
      <Text style={styles.title}>Feedback Form</Text>
      <View style={styles.rating}>
        <Text style={styles.label}>Rating:</Text>
        {renderStars()}
      </View>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TextInput
        style={styles.commentInput}
        value={comment}
        onChangeText={handleCommentChange}
        placeholder="Comment"
        multiline
        numberOfLines={4}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  image: {
    width: "90%",
    aspectRatio: 16 / 9,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginRight: 10,
  },
  star: {
    fontSize: 24,
    cursor: "pointer",
    color: "gray", // Default star color
  },
  filledStar: {
    color: "gold", // Selected star color
  },
  commentInput: {
    width: "45%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});

export default RateApp;
