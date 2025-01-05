import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserAvatar = ({ name, size = 50, backgroundColor = '#3D4A5A', textColor = '#FFFFFF', fontSize = 30 }) => {
  const initial = name ? name.charAt(0).toUpperCase() : '?';

  return (
    <View style={[styles.avatar, { width: size, height: size, borderRadius: size / 2, backgroundColor }]}>
      <Text style={[styles.initial, { color: textColor, fontSize }]}>{initial}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  initial: {
    fontWeight: '400',
  },
});

export default UserAvatar;
