import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function ConSection({
  iconName,
  name,
  iconCol = '#4c413d',
  textCol = '#4c413d',
}) {
  return (
    <View style={styles.container}>
      <MaterialIcon name={iconName} style={styles.iconStyle} color={iconCol} />
      <Text style={[styles.textStyle, {color: textCol}]}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    marginVertical: 10,
    // backgroundColor: '#666',
  },
  iconStyle: {
    fontSize: 30,
  },
  textStyle: {
    marginHorizontal: 10,
    fontSize: 18,
  },
});
