import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function IconCard({
  icon,
  name,
  height = 60,
  borderRadius = 0,
  size = 25,
  backgroundColor = '',
}) {

  return (
    <View style={styles.mainCon}>
      <View
        style={[styles.container,{
          backgroundColor: backgroundColor,
          height: height,
          width: height,
          borderRadius:borderRadius,
        }]}>
        <MaterialIcon name={icon} size={size} />
      </View>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
