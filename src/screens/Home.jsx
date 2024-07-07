import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const WallpaperScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header with tabs */}
      <View style={styles.header}>
        {[ 'Wallpaper'].map((tab) => (
          <Text key={tab} style={tab === 'Wallpaper' ? styles.activeTab : styles.tab}>
            {tab}
          </Text>
        ))}
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        {['Tema', 'Huruf', 'Nada', 'Home', ].map((category) => (
          <View key={category} style={styles.category}>
            <Text>{category}</Text>
          </View>
        ))}
      </View>

      {/* Images grid */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1713864006315-94b5e7f2729e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
          <Text style={styles.imageText}>Bayangan Gelap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1713864006347-7361bc6b10b8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
          <Text style={styles.imageText}>Top Picks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1671512497536-e20cc1084ea7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
          <Text style={styles.imageText}>VCG-Girls</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1631793945537-b8a496b97edf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
          <Text style={styles.imageText}>Dunia Anime</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1503505129851-abaf7f6140b4?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
          <Text style={styles.imageText}>Category 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1719945930391-4c92ee5363a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
          <Text style={styles.imageText}>Category 6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1713864006347-7361bc6b10b8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
          <Text style={styles.imageText}>Top Picks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1671512497536-e20cc1084ea7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
          <Text style={styles.imageText}>VCG-Girls</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1631793945537-b8a496b97edf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
          <Text style={styles.imageText}>Dunia Anime</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1503505129851-abaf7f6140b4?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
          <Text style={styles.imageText}>Category 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1719945930391-4c92ee5363a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
          <Text style={styles.imageText}>Category 6</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  tab: {
    fontSize: 16,
    color: '#000',
  },
  activeTab: {
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: 'orange',
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  category: {
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  imageContainer: {
    width: '48%',
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  imageText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WallpaperScreen;
