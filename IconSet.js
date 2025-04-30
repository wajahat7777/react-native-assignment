import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

// Replace these with your actual SVG paths
const icons = [
  require('../SVGS/figma.png'),
  require('../SVGS/galleryicon.png'),
  require('../SVGS/send.png'),
  require('../SVGS/zip.png'),
  require('../SVGS/delete.png'),
  require('../SVGS/glow.png'),
];

const IconSet = () => {
  return (
    <View style={styles.container}>
      {icons.map((icon, i) => (
        <Image key={i} source={icon} style={styles.icon} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#d1d5db',
    borderRadius: 4,
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    marginHorizontal: 8,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
});

export default IconSet;