import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const avatarColors = [
  '#1F1F1F',
  '#2E4053',
  '#34495E',
  '#2C3E50',
  '#1ABC9C',
  '#16A085',
  '#8E44AD',
  '#2980B9',
  '#27AE60',
  '#D35400',
  '#C0392B',
  '#7F8C8D',
  '#2C2C2C',
  '#34495E',
  '#22313F',
];

function Randomcolor() {
  const index = Math.floor(Math.random() * avatarColors.length);
  return avatarColors[index];
}

const UserAvatar = ({
  name,
  size = 50,
  background = background,
  textColor = '#FFFFFF',
  fontSize = 30,
  onPress,
}) => {
  const initial = name ? name.charAt(0).toUpperCase() : '?';
  const backgroundColor = avatarColors[background];
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.avatar,
          {width: size, height: size, borderRadius: size / 2, backgroundColor},
        ]}>
        <Text style={[styles.initial, {color: textColor, fontSize}]}>
          {initial}
        </Text>
      </View>
    </TouchableOpacity>
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
