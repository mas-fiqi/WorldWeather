import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const books = [
    { title: 'Jadilah Malaikatku', price: '7.500 Rp' },
    { title: 'Catatan Keinginan', price: '7.500 Rp' },
    { title: 'Mimpi Coklat', price: '7.500 Rp' },
    { title: 'Malam Misterius', price: '7.500 Rp' },
    { title: 'Kamu di mimpiku', price: '7.500 Rp' },
    { title: 'Pagi Macchiato', price: '7.500 Rp' },
    { title: 'Laut Misterius', price: '7.500 Rp' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>8:03</Text>
        <View style={styles.icons}>
          {/* Icons for signal, battery, etc. can be added here */}
        </View>
      </View>
      <View style={styles.searchSection}>
        <Text style={styles.title}>Huruf</Text>
        <View style={styles.searchBox}>
          <Text>Search...</Text>
        </View>
      </View>
      <View style={styles.promotions}>
        <Text style={styles.sectionTitle}>Promosi</Text>
        <View style={styles.promoIcons}>
          <Image source={{ uri: 'icon-url' }} style={styles.icon} />
          <Image source={{ uri: 'icon-url' }} style={styles.icon} />
          <Image source={{ uri: 'icon-url' }} style={styles.icon} />
          <Image source={{ uri: 'icon-url' }} style={styles.icon} />
        </View>
      </View>
      <View style={styles.booksSection}>
        <Text style={styles.sectionTitle}>Buku Terlaris di Indonesia</Text>
        {books.map((book, index) => (
          <TouchableOpacity key={index} style={styles.bookItem}>
            <Text style={styles.bookTitle}>{book.title}</Text>
            <Text style={styles.bookPrice}>{book.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  time: {
    color: '#000',
    fontSize: 20,
  },
  icons: {
    flexDirection: 'row',
  },
  searchSection: {
    marginVertical: 20,
  },
  title: {
    color: '#000',
    fontSize: 25,
  },
  searchBox: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  promotions: {
    marginVertical: 20,
  },
  sectionTitle: {
    color: '#000',
    fontSize: 20,
  },
  promoIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  booksSection: {
    marginVertical: 20,
  },
  bookItem: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  bookTitle: {
    color: '#000',
    fontSize: 18,
  },
  bookPrice: {
    color: '#ff8c00',
  },
});

export default App;
