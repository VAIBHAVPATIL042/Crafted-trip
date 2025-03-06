import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = () => {
    const ratingNumber = parseInt(rating, 10);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (ratingNumber < 1 || ratingNumber > 5) {
      Alert.alert('Invalid Rating', 'Rating must be between 1 and 5.');
      return;
    }

    if (email && !emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // Handle form submission logic here
    console.log('Feedback submitted:', { name, email, message, rating });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    setRating('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Email (optional):</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Feedback Message:</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter your feedback"
        multiline
      />
      <Text style={styles.label}>Rating:</Text>
      <TextInput
        style={styles.input}
        value={rating}
        onChangeText={setRating}
        placeholder="Enter your rating (1-5)"
        keyboardType="numeric"
      />
      <Button title="Submit Feedback" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default FeedbackForm;