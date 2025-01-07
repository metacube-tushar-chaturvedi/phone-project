import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const avatarColors = [
  '#1F1F1F', // Jet Black
  "#2E4053", // Dark Slate Blue
  "#34495E", // Midnight Blue
  "#2C3E50", // Dark Charcoal
  "#1ABC9C", // Dark Turquoise
  "#16A085", // Deep Teal
  "#8E44AD", // Dark Purple
  "#2980B9", // Navy Blue
  "#27AE60", // Forest Green
  "#D35400", // Dark Orange
  "#C0392B", // Crimson
  "#7F8C8D", // Concrete Gray
  "#2C2C2C", // Onyx
  "#34495E", // Dark Steel Blue
  "#22313F"  // Dark Sapphire
];

function Randomcolor(){
  const index = Math.floor(Math.random() * avatarColors.length);
  return avatarColors[index];
}

const UserAvatar = ({ name, size = 50, backgroundColor = Randomcolor(), textColor = '#FFFFFF', fontSize = 30 }) => {
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
