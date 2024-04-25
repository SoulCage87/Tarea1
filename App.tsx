import React, { Component } from 'react'
import { Text, View,  } from 'react-native'
import CalculatorComponent from './components/CalculatorComponent'

export class App extends Component {
  render() {

    return (
      <View>
        <CalculatorComponent />
      </View>
    )
  }
}

export default App

