import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

//Random Color
const Color = () => {
  const letters = '0123456789ABCDEF';
  let color = '';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const morningActivities = [ 'Breakfast', 'Washing face', 'Toothbrush', 'Play Basketball', 'Online games', 'Drink', 'Skin care', 'Pray'];
  const afternoonActivities = ['Reading Bible', 'Play Online Games', 'Social media', 'Eat', 'Drink', 'Online Class', 'Pray', 'Sleep'];
  const eveningActivities = ['Taking bath', 'Dinner', 'Toothbrush', 'Online Games', 'Read Bible', 'Pray', 'Relax', 'Social Media', 'Read Bible'];

  const handlePress = (activity) => {
    setSelectedItem(activity === selectedItem ? null : activity);
    console.log(activity);
  };

 
  const getItemStyle = (item) => {
    const color = Color();
    if (item === selectedItem) {
      return { backgroundColor: color, borderWidth: 2, borderColor: 'white' };
    }
    return { backgroundColor: color };
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.sectionHeader}>MORNING</Text>
        <FlatList
          data={morningActivities}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={[styles.itemContainer, getItemStyle(item)]}>
                <Text style={styles.textBold}>
                  <Text style={styles.textItalic}>{item}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <Text style={styles.sectionHeader}>AFTERNOON</Text>
        <FlatList
          data={afternoonActivities}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={[styles.itemContainer, getItemStyle(item)]}>
                <Text style={styles.textBold}>
                  <Text style={styles.textItalic}>{item}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <Text style={styles.sectionHeader}>EVENING</Text>
        <FlatList
          data={eveningActivities}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={[styles.itemContainer, getItemStyle(item)]}>
                <Text style={styles.textBold}>
                  <Text style={styles.textItalic}>{item}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#f0ffff",
  },
  container: {
    borderWidth: 1,
    padding: 20,
    backgroundColor: "#f0ffff",
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#333',
  },
  textBold: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
  },
  textItalic: {
    fontStyle: "italic",
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
    padding: 10,
  },
});

export default App