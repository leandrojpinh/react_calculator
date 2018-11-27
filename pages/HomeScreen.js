import React from "react";
import { View, Text, Button } from "react-native";

class HomeScreen extends React.Component {    
  static navigationOptions = {
    title: 'Home',
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>        
        <Button
          title="Go to Simple"
          onPress={() => this.props.navigation.navigate('Simple')}
        />
        <Button
          title="Go to Cientific"
          onPress={() => this.props.navigation.navigate('Cientific')}
        />
      </View>
    );
  }
}

export default HomeScreen;
