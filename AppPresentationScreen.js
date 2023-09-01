import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, Image } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { Pages,Colors } from './constants';

const backgroundImageSource = require('./assets/Background.jpg');
const customFont = require('./assets/Neucha-Regular.otf');
const { width } = Dimensions.get('window');
const photoofgirl = require('./assets/photoofgirl.png');

export default function AppPresentationScreen() {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  const navigation = useNavigation(); // Use the useNavigation hook here

  React.useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'neucha-regular': customFont,
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null; // Wait for the font to load
  }

  const handleNextScreen = () => {
    navigation.navigate(Pages.AppPresentationScreen2); // Replace "AppPresentationScreen3" with the next screen's route name
  };

  const handleSkip = () => {
    navigation.navigate(Pages.HomeScreen); // Direct to HomePage when "Skip" is pressed
  };

  return (
    <ImageBackground source={backgroundImageSource} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.container}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        {/* Add the new image */}
        <View style={styles.imageContainer}>
          <Image source={photoofgirl} style={styles.photoofgirl} resizeMode="contain" />
        </View>

        {/* Text */}
        <Text style={styles.text}>Sign up, choose a bundle, snap a picture, and preserve precious moments with a simple click.</Text>

        {/* Title */}
        <Text style={styles.title}>Step 1: Capture the Moment</Text>

        {/* Add the three dots */}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Add the "Next" button */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNextScreen}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'neucha-regular', // Apply the custom font
    fontSize: 24,
    fontWeight: 'bold',
   color: Colors.PrimaryColor,
    marginBottom: 20,
    marginTop: 15,
    top: 70,
  },
  text: {
    fontSize: 20,
    fontFamily: 'neucha-regular',
   color: Colors.PrimaryColor,
    marginBottom: 20,
    top: 70,
    textAlign: 'center',
  },
  skipButton: {
    position: 'absolute',
    top: 60,
    right: 40,
  },
  skipText: {
    fontSize: 18,
    fontFamily: 'neucha-regular',
    color: Colors.PrimaryColor,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    top: 120,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  nextButtonText: {
    color: Colors.PrimaryColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 280,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: 'white',
  },
  imageContainer: {
    position: 'absolute',
    top: 50, // Adjust the positioning as needed
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoofgirl: {
    width: width * 1, // Adjust the size as needed
    height: width * 1.2, // Maintain aspect ratio
    marginBottom: 30,
  },
});