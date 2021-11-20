import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/feed'
import CreateStory from '../Screens/CreatePost'
import { RFValue } from 'react-native-responsive-fontsize';
import {StyleSheet} from 'react-native'

const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigator=()=>{
  return (
    
      <Tab.Navigator
      labled={false}
    barStyle={styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Create Story') {
              iconName = focused ? 'create' : 'create-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Create Story" component={CreateStory} />
      </Tab.Navigator>
   
  );
}
const styles = StyleSheet.create({
  bottomTabStyle: {
      backgroundColor: "#2a2a2a",
      height: "8%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      overflow: "hidden",
      position: "absolute"
  },
  icons: {
      width: RFValue(30),
      height: RFValue(30)
  }
});


export default BottomTabNavigator;
