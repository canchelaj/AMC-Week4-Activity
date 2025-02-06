import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
        <Text style={styles.textBold}>khjgjkhaegrghdfkaghergergreghraehreahafdhrhetredf></Text>
        </View>
    </ScrollView>
  );
 
};
const styles = StyleSheet.create({
  container: {
      borderWidth: 1,
      padding: 20,
      backgroundColor: "",
 
  },
  textBold:{
      fontSize: 100,
      textAlign: "center",
      fontWeight: 'bold',
  },
  textItalic:{
      fontStyle: "italic"
  }
 
  })

export default App;