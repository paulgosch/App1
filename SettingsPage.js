import React from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Pages } from './constants';


const backgroundImageSource = require('./assets/Background.jpg');


export default function SettingsPage() {
  const navigation = useNavigation(); // Use the useNavigation hook here

  const handleBack = () => {
    // Navigate back to the HomeScreen
    navigation.goBack();
  };

  const handlePrivacyPolicyPage = () => {
    navigation.navigate(Pages.PrivacyPolicyPage); // Navigate to the 'TermsAndConditions' screen
  };

  const handleTermsAndConditions = () => {
    navigation.navigate(Pages.TermsAndConditions); // Navigate to the 'TermsAndConditions' screen
  };

  const handleLogout = () => {
    // Implement any necessary logout logic here
    // For now, let's just navigate to the WelcomePage
    navigation.navigate(Pages.WelcomePage);
  };

  const handleNotificationChange = (value) => {
    // Implement logic to toggle notification settings
  };

  const handleSoundsChange = (value) => {
  };

  return (
    <ImageBackground source={backgroundImageSource} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.settingContainer}>
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Enable Notifications</Text>
            <Switch
              value={false} // Pass the actual state of notifications
              onValueChange={handleNotificationChange}
            />
          </View>
        </View>
        <View style={styles.settingContainer}>
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Sound Effects</Text>
            <Switch
              value={false} 
              onValueChange={handleSoundsChange}
            />
          </View>
        </View>
        <View style={styles.settingContainer}>
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Example 3</Text>
            <Switch
              value={false} 
              onValueChange={handleSoundsChange}
            />
          </View>
        </View>
        <View style={styles.settingContainer}>
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Example 4</Text>
            <Switch
              value={false} 
              onValueChange={handleSoundsChange}
            />
          </View>
        </View>
        <TouchableOpacity style={[styles.logoutButton]} onPress={handleLogout}>
        <Text style={[styles.buttonText, styles.buttonTextWhite]}>Log out</Text>
        </TouchableOpacity>
        </View>
        <View>
        <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={handlePrivacyPolicyPage}>
            <Text style={[styles.bottomText]}>PrivacyPolicy</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePrivacyPolicyPage}>
            <Text style={[styles.bottomText]}>Support</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleTermsAndConditions}>
            <Text style={[styles.bottomText]}>Terms & Conditions</Text>
          </TouchableOpacity>
        {/* Add more settings options as needed */}
      </View>
      </View>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // White transparent background
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    padding: 10, 
    color: 'white', // Set the icon color to white
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  settingContainer: {
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  settingRow: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Align items at both ends of the row
    alignItems: 'center', // Center items vertically in the row
  },
  settingText: {
    fontSize: 16,
    color: 'white',
  },
  logoutButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // White transparent background
    borderWidth: 1,
    borderColor: 'white', // Change the button border color to white
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
  },
  buttonTextWhite: {
    color: 'white', // Set the text color to white
    fontWeight: 'bold',
    paddingTop: 10,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    paddingTop: 30
  },
  backButtonText: {
    fontFamily: 'neucha-regular',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  },
  bottomText: {
    fontFamily: 'neucha-regular',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
  },
});