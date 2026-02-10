import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import Feather from 'react-native-vector-icons/Feather';
const ReadFullDetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <Feather name="arrow-left-circle" size={18} color={black} />
      </View>
    </SafeAreaView>
  );
};

export default ReadFullDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  Header: {
    
  },
});
