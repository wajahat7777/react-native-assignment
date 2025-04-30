import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Second Screen</Text>
      <Button title="Go Back" type="normal" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 24,
  },
});

export default SecondScreen; 