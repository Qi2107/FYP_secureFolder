import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Alert
} from "react-native";
import { auth } from "../firebase";
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    Alert.alert("Feedback submitted", "Feedback has been submitted, thank you for your time!");
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
    <ImageBackground source={require('../assets/rateapp.jpg')} style={styles.imageBackground}>
      <View style={styles.container}>
        <Text style={styles.title}>Feedback Form</Text>
        <View style={styles.rating}>
          <Text style={styles.label}>Rating:</Text>
          {renderStars()}
        </View>
        <Text style={styles.emailText}>Email: {auth.currentUser?.email}</Text>
        <TextInput
          style={styles.commentInput}
          value={comment}
          onChangeText={handleCommentChange}
          placeholder="Comment"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 24,
    marginRight: 10,
    color: 'white',
  },
  emailText: {
    fontSize: 20,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 5,
    marginBottom: 10,
  },
  star: {
    fontSize: 36,
    color: "silver",
    marginBottom: 5,
  },
  filledStar: {
    color: "gold",
  },
  commentInput: {
    width: '80%',
    borderWidth: 2,
    marginTop: 20,
    padding: 10,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#F9F9F9'
  },
  submitButton: {
    backgroundColor: '#0782F9',
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0660B8',
    width: 315,
    padding: 15,
    marginBottom: 50,
  },
  submitText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

export default RateApp;
