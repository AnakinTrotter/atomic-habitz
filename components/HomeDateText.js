import React from 'react'
import { Text, StyleSheet } from 'react-native'

const HomeDateText = () => {
  return (
    <Text style={styles.dateText}>{getDate()}</Text>
  );
}

const styles = StyleSheet.create({
  dateText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5
  }
});

const getDate = () => {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let now = new Date();
  return `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}th`;
}

export default HomeDateText;