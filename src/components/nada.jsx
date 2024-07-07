import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const genres = [
    { name: 'EDM', image: 'edm-image-url' },
    { name: 'Hip-Hop', image: 'hiphop-image-url' },
    { name: 'Rock', image: 'rock-image-url' },
    { name: 'Jazz', image: 'jazz-image-url' },
  ];

  const favoriteRingtones = [
    { name: 'Dibuat Untuk Anda', image: 'custom-image-url' },
    { name: 'Kilas Balik Retro', image: 'retro-image-url' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>8:15</Text>
        <View style={styles.icons}>
          {/* Icons for signal, battery, etc. can be added here */}
        </View>
      </View>
      <View style={styles.searchSection}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Nada dering</Text>
        </View>
        <TouchableOpacity style={styles.localRingtone}>
          <Text style={styles.localRingtoneText}>Pilih nada dering lokal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.promotions}>
        <Text style={styles.sectionTitle}>Promosi</Text>
        <View style={styles.promoIcons}>
          <Image source={{ uri: 'bigo-image-url' }} style={styles.icon} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.icon} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1516315973067-166cf84425bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.icon} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1485278537138-4e8911a13c02?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.icon} />
        </View>
      </View>
      <View style={styles.genreSection}>
        <Text style={styles.sectionTitle}>Gaya favorit</Text>
        <View style={styles.genres}>
          {genres.map((genre, index) => (
            <TouchableOpacity key={index} style={styles.genreItem}>
              <Image source={{ uri: genre.image }} style={styles.genreImage} />
              <Text style={styles.genreText}>{genre.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.favoritesSection}>
        <Text style={styles.sectionTitle}>Nada dering favorit</Text>
        <View style={styles.favorites}>
          {favoriteRingtones.map((ringtone, index) => (
            <TouchableOpacity key={index} style={styles.favoriteItem}>
              <Image source={{ uri: ringtone.image }} style={styles.favoriteImage} />
              <Text style={styles.favoriteText}>{ringtone.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: '#000',
    fontSize: 25,
    backgroundColor: '#ffd700',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  localRingtone: {
    backgroundColor: '#ffe4b5',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  localRingtoneText: {
    color: '#ff8c00',
    fontSize: 16,
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
  genreSection: {
    marginVertical: 20,
  },
  genres: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  genreItem: {
    width: '48%',
    backgroundColor: '#ffdab9',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  genreImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  genreText: {
    marginTop: 5,
    color: '#000',
    fontSize: 16,
  },
  favoritesSection: {
    marginVertical: 20,
  },
  favorites: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  favoriteItem: {
    width: '48%',
    backgroundColor: '#ffb6c1',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  favoriteImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  favoriteText: {
    marginTop: 5,
    color: '#000',
    fontSize: 16,
  },
});

export default App;
