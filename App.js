import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Ecran from './components/Ecran';
import Clavier from './components/Clavier';

export default class App extends React.Component {
  state = {
    equation: ''
  }

  handleOnPress = (touche) => {
    if (touche == 'C') {
      this.vider();
    }
    else if (touche == '=') {
      this.calculer();
    }
    else if (touche == '+/-') {
      this.inverserSigne();
    }
    else if (touche == '<') {
      this.backspace();
    }
    else {
      this.addNum(touche);
    }
  }

  addNum(num) {
    this.setState({ equation: this.state.equation + num });
  }

  vider() {
    this.setState({ equation: '' });
  }

  backspace() {
    this.setState({ equation: this.state.equation.substring(0, this.state.equation.length-1) });
  }

  cleanExpression(expr) {
    // Remplace les nombres qui commencent par un ou plusieurs zéros par le nombre sans les zéros au début
    return expr.replace(/\b0+(\d+)/g, '$1');
  }

  calculer() {    
    try {
      const cleanedExpr = this.cleanExpression(this.state.equation);
      let resultat = eval(cleanedExpr);
      this.setState({ equation: "" + Number(resultat.toFixed(4)) });
    } catch (error) {
      console.error(error);      
    }
  }

  inverserSigne() {
    try {
      const cleanedExpr = this.cleanExpression(this.state.equation);
      let resultat = eval(cleanedExpr);
      resultat =  resultat*-1;
      this.setState({ equation: "" + Number(resultat.toFixed(4)) });
    } catch (error) {
      console.error(error);      
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.main_container}> 
        <StatusBar />
        <Ecran texte={this.state.equation} />
        <Clavier onPress={(touche) => { this.handleOnPress(touche) }} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create ({
  main_container: {
    flex: 1,
    backgroundColor: '#485461'
  },
})