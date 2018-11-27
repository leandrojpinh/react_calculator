import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

class MathService {   

  static Sum(propA, propB) {
      return propA + propB
  }

  static Sub(propA, propB) {
      return propB - propA
  }

  static Multi(propA, propB) {
      return propA * propB
  }

  static Div(propA, propB) {
      return propA / propB
  }

  static Sen(num) {
      return Math.sin(num)
  }

  static Cos(num) {
      return Math.cos(num)
  }

  static Tan(num) {
      return Math.tan(num)
  }

  static Raiz(num) {
      return Math.sqrt(num)
  }
}

class SimpleScreen extends React.Component {
  static firstValue = '';
  static operation = '';
  static result = '';
  static currentValue = '';

    constructor(props) {
      super(props);
      this.state = {
        expression: '',
        propA: 0,
        propB: 0,
        num: 0,
        textOperation: ''
      };
    }

    onNumberPress(number) {
      console.log(number);
      /*this.currentValue += number;
      this.setState({expression: this.currentValue})
      console.log(number);
      console.log(this.state.expression);*/
    }

    onPressButton() {
      Alert.alert(this.firstValue + ' ' + this.operation + ' = ' + this.result)
    }
  
    onUpdateOperation() {
      if(this.firstValue === '') {
        this.firstValue = this.state.expression;
        this.state.propA = this.firstValue; 
      } else {
        this.state.propA = this.state.expression; 
      }

      this.operation = this.textOperation

      this.expression = '';
    }

    static navigationOptions = {
      title: 'Simple',
    };
    
    render() {
      return (
        <View style={styles.container}>
        <View style={styles.row_container}>
          <Text>Simple Calculator</Text>
        </View>
        
        <View style={{height: 60}}>
          <TextInput 
            style={{flex: 1, height: 40, borderColor: 'gray', borderWidth: 1}}            
            value={this.currentValue}
            editable={false}
            textAlign="center" />
        </View>
        <View style={styles.row_container}>
          <View style={styles.row_item_number}>
            <Button title='7' onPress={this.onNumberPress(7)}/>
          </View>
          <View style={styles.row_item_number}>
            <Button title='8' onPress={(title) => { this.currentValue += title }}/>
          </View>
          <View style={styles.row_item_number}>
            <Button title='9' onPress={(title) => { this.currentValue += title }}/>
          </View>        
          <View style={styles.row_item_function}>
            <Button title='/' onPress={(title) => {
              this.setState({textOperation: title})
              onUpdateOperation()
            }} color='deepskyblue'/>
          </View>        
        </View>
        <View style={styles.row_container}>
          <View style={styles.row_item_number}>
            <Button title='4' onPress={(title) => { this.currentValue += title }}/>
          </View>
          <View style={styles.row_item_number}>
            <Button title='5' onPress={(title) => { this.currentValue += title }}/>
          </View>
          <View style={styles.row_item_number}>
            <Button title='6' onPress={(title) => { this.currentValue += title }}/>
          </View>        
          <View style={styles.row_item_function}>
            <Button title='*' onPress={(title) => { this.currentValue += title }} color='deepskyblue'/>
          </View>        
        </View>
        <View style={styles.row_container}>
          <View style={styles.row_item_number}>
            <Button title='1' onPress={(title) => { this.currentValue += title }} />
          </View>
          <View style={styles.row_item_number}>
            <Button title='2' onPress={(title) => { this.currentValue += title }}/>
          </View>
          <View style={styles.row_item_number}>
            <Button title='3' onPress={(title) => { this.currentValue += title }}/>
          </View>        
          <View style={styles.row_item_function}>
            <Button title='-' onPress={(title) => { this.currentValue += title }} color='deepskyblue'/>
          </View>        
        </View>
        <View style={styles.row_container}>
          <View style={styles.row_item_number}>
            <Button title='0' onPress={(title) => { this.currentValue += title }}/>
          </View>
          <View style={styles.row_item_number}>
            <Button title='C' onPress={(title) => { this.currentValue += title }} color='black'/>
          </View>
          <View style={styles.row_item_number}>
            <Button title='=' onPress={(title) => { this.currentValue += title }} color='darkorange'/>
          </View>        
          <View style={styles.row_item_function}>
            <Button title='+' onPress={(title) => { this.currentValue += title }} color='deepskyblue'/>
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

export default SimpleScreen;