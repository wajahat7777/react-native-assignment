import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const Button = ({ title, type = 'normal', icon, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={[
        buttonStyles.base,
        type === 'normal' && buttonStyles.normal,
        type === 'glow' && buttonStyles.glow,
        type === 'delete' && buttonStyles.delete,
        type === 'action' && buttonStyles.action,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon && (
        <Image source={icon} style={buttonStyles.iconImage} />
      )}
      <Text
        style={[
          buttonStyles.text,
          type === 'delete' && buttonStyles.deleteText,
          type === 'action' && buttonStyles.actionText,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const buttonStyles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginVertical: 6,
  },
  normal: {
    backgroundColor: '#2563eb',
  },
  glow: {
    backgroundColor: '#2563eb',
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.95,
    shadowRadius: 18,
    elevation: 18,
  },
  delete: {
    backgroundColor: '#b91c1c',
  },
  action: {
    backgroundColor: '#e5e7eb',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  deleteText: {
    color: '#fff',
  },
  actionText: {
    color: '#1e293b',
    fontWeight: '700',
  },
  iconImage: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: 'contain',
  },
});

export default Button;