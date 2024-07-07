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
          <Image source={{ uri: 'https://images.unsplash.com/photo-1508973379184-7517410fb0bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.icon} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1713864006315-94b5e7f2729e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.icon} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1713864006347-7361bc6b10b8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.icon} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1508973379184-7517410fb0bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.icon} />
        </View>
      </View>
      <View style={styles.booksSection}>
        <Text style={styles.sectionTitle}>Buku Terlaris di Indonesia</Text>
        {books.map((book, index) => (
          <TouchableOpacity key={index} style={styles.bookItem}>
            <Text style={styles.bookTitle}>{book.title.split(' ').map((word, i) => (
              <Text key={i} style={{ fontFamily: i % 2 === 0 ? 'Arial' : 'Times New Roman' }}>{word}</Text>
            ))}</Text>
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
    backgroundColor: '#f0f5f9',
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
    color: '#0056b3',
    fontSize: 25,
    fontWeight: 'bold',
  },
  searchBox: {
    backgroundColor: '#e3f2fd',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    elevation: 3, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  promotions: {
    marginVertical: 20,
  },
  sectionTitle: {
    color: '#0056b3',
    fontSize: 20,
    fontWeight: 'bold',
  },
  promoIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 5,
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
    borderColor: '#e3f2fd',
    elevation: 1, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  bookTitle: {
    color: '#0056b3',
    fontSize: 18,
  },
  bookPrice: {
    color: '#ff6f00',
    fontWeight: 'bold',
  },
});

export default App;
