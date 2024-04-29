import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dashboard from './screens/Dashboard';
import UserProfileForm from './components/Buttons';
// import UserProfile from './components/AddButon';
export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard />
      <UserProfileForm />
      {/* <UserProfile {...userProfileData} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    // height:20,
    // flexDirection:'row',
    flex: 1,
    backgroundColor: '#151D1D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // UserProfileForm: {
  //   height:300,
  //   backgroundColor:"red"
  // }

});
