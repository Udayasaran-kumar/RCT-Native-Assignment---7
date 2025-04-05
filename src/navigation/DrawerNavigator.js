import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet } from 'react-native';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.profile}>
      <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.image} />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.version}>v1.0.0</Text>
    </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="HomeTabs" component={TabNavigator} options={{ title: 'Home' }} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  profile: { alignItems: 'center', padding: 20 },
  image: { width: 80, height: 80, borderRadius: 40 },
  name: { fontWeight: 'bold', fontSize: 18, marginTop: 10 },
  version: { color: 'gray' },
});

export default DrawerNavigator;
