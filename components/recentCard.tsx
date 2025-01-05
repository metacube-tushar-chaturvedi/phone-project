import React from 'react';
import {
Text,
View,
StyleSheet,
ScrollView
} from 'react-native';

export default function RecentCard(){
    return (
        <View style={styles.container}>
            <Text >
                Recent
            </Text>
        </View>
    );
} 

const styles = StyleSheet.create({
 container:{
    height:80,
    backgroundColor:'#1c110d',
 }
});

