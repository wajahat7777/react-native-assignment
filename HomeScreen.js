import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import IconSet from '../components/IconSet';

const figmaIcon = require('../SVGS/figma.png');
const deleteIcon = require('../SVGS/delete.png');
const zipIcon = require('../SVGS/zip.png');
const sendIcon = require('../SVGS/send.png');
const galleryIcon = require('../SVGS/galleryicon.png');
const glowIcon = require('../SVGS/glow.png');

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Normal State</Text>
      <Text style={styles.subLabel}>Normal Button</Text>
      <Button title="BUTTON" type="normal" style={styles.button} />

      <Text style={styles.subLabel}>Frame 1321315466</Text>
      <Button 
        title="Download ZIP file of component" 
        type="normal" 
        icon={zipIcon} 
        style={styles.longButton} 
      />

      <Text style={styles.subLabel}>Button with glow</Text>
      <Button 
        title="BUTTON" 
        type="glow" 
        icon={glowIcon} 
        style={styles.button} 
      />

      <Text style={styles.subLabel}>Delete Button</Text>
      <Button 
        title="Delete" 
        type="delete" 
        icon={deleteIcon} 
        style={styles.button} 
      />

      <Text style={styles.subLabel}>Action Button</Text>
      <Button 
        title="Open in Figma" 
        type="action" 
        icon={figmaIcon} 
        style={styles.actionButton} 
      />
      <Button 
        title="Move Component" 
        type="action" 
        icon={galleryIcon} 
        style={styles.actionButton} 
        onPress={() => navigation.navigate('Second')} 
      />
      <Button 
        title="Move Component" 
        type="action" 
        icon={galleryIcon} 
        style={[styles.actionButton, styles.actionButtonHover]} 
      />
      <Button 
        title="Instant Preview" 
        type="action" 
        icon={sendIcon} 
        style={styles.actionButton} 
      />

      <Text style={styles.iconLabel}>Icons to be exported AS SVG ONLY.</Text>
      <IconSet />
      <Button 
        title="Delete" 
        type="delete" 
        icon={deleteIcon} 
        style={styles.button} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 24,
  },
  label: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  subLabel: {
    color: '#cbd5e1',
    fontSize: 14,
    marginTop: 16,
    marginBottom: 4,
  },
  button: {
    width: 140,
    marginBottom: 8,
  },
  longButton: {
    width: 320,
    marginBottom: 8,
  },
  actionButton: {
    width: 220,
    marginBottom: 8,
  },
  actionButtonHover: {
    backgroundColor: '#f1f5f9',
  },
  iconLabel: {
    color: '#94a3b8',
    fontSize: 13,
    marginTop: 24,
    marginBottom: 8,
  },
});

export default HomeScreen;
