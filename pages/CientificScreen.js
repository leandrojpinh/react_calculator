import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

class CientificScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = { text: '0' };
    }

    static navigationOptions = {
      title: 'Cientific',
    };
    
    numberA = 0.0;
    expression = '';
  
    onClickB() {
      console.log("Clicou");
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.row_container}>
            <Text>Cientific Screen</Text> 
          </View>          
          <View style={{height: 60}}>
            <TextInput 
              style={{flex: 1, height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})} 
              value={this.state.text}
              editable={false}
              textAlign="center" />
          </View>
          <View style={styles.row_container}>
            <View style={styles.row_item_number}>
              <Button title='sen' onPress={this.onClickB}/>
            </View>
            <View style={styles.row_item_number}>
              <Button title='cos' onPress={this.onClickB}/>
            </View>
            <View style={styles.row_item_number}>
              <Button title='tan' onPress={this.onClickB}/>
            </View>        
            <View style={styles.row_item_function}>
              <Button title='fat' onPress={this.onClickB} color='deepskyblue'/>
            </View>        
          </View>
          <View style={styles.row_container}>
            <View style={styles.row_item_number}>
              <Button title='7' onPress={this.onClickB}/>
            </View>
            <View style={styles.row_item_number}>
              <Button title='8' onPress={this.onClickB}/>
            </View>
            <View style={styles.row_item_number}>
              <Button title='9' onPress={this.onClickB}/>
            </View>        
            <View style={styles.row_item_function}>
              <Button title='/' onPress={this.onClickB} color='deepskyblue'/>
            </View>        
          </View>          
          <View style={styles.row_container}>
            <View style={styles.row_item_number}>
              <Button title='4' onPress={this.onClickB}/>
            </View>
            <View style={styles.row_item_number}>
              <Button title='5' onPress={this.onClickB}/>
            </View>
            <View style={styles.row_item_number}>
              <Button title='6' onPress={this.onClickB}/>
            </View>        
            <View style={styles.row_item_function}>
              <Button title='*' onPress={this.onClickB} color='deepskyblue'/>
            </View>        
          </View>
          <View style={styles.row_container}>
            <View style={styles.row_item_number}>
              <Button title='1' onPress={this.onClickB} />
            </View>
            <View style={styles.row_item_number}>
              <Button title='2' onPress={this.onClickB}/>
            </View>
            <View style={styles.row_item_number}>
              <Button title='3' onPress={this.onClickB}/>
            </View>        
            <View style={styles.row_item_function}>
              <Button title='-' onPress={this.onClickB} color='deepskyblue'/>
            </View>        
          </View>
          <View style={styles.row_container}>
            <View style={styles.row_item_number}>
              <Button title='0' onPress={this.onClickB}/>
            </View>
            <View style={styles.row_item_number}>
              <Button title='=' onPress={this.onClickB} color='black'/>
            </View>
            <View style={styles.row_item_number}>
              <Button title='√' onPress={this.onClickB} color='darkorange'/>
            </View>        
            <View style={styles.row_item_function}>
              <Button title='+' onPress={this.onClickB} color='deepskyblue'/>
            </View>        
          </View>
          <Button
              title="Go to Home"
              onPress={() => this.props.navigation.navigate('Home')}
            />
      </View>          
      );      
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 34,
    flexDirection: 'column',
    backgroundColor: '#fff',
    margin: 10
  }, 
  row_container: {    
    flexDirection: 'row',
  },
  row_item_number: {
    flex: 1, justifyContent: 'space-around', width: 50, height: 50, margin: 2
  },
  row_item_function: {
    flex: 1, justifyContent: 'space-around', width: 100, height: 50, margin: 2
  }  
});

export default CientificScreen;