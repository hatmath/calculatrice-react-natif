import React from 'react';
import { StyleSheet, View } from 'react-native';
import Touche from './Touche';
import BigTouche from './BigTouche';

const couleurs = {
    frequent: '#eb8800',
    chiffre: '#666666',
};

class Clavier extends React.Component {

    handleOnPress = (touche) => {
        this.props.onPress(touche);
    }

    render() {
        return (
            <View style={styles.clavier}>
                <View style={styles.row}>
                    <Touche texte="C" onPress={this.handleOnPress} couleur={couleurs.frequent} />
                    <Touche texte="+/-" onPress={this.handleOnPress} />
                    <Touche texte="<" onPress={this.handleOnPress} />
                    <Touche texte="/" onPress={this.handleOnPress} />
                </View>
                <View style={styles.row}>
                    <Touche texte="7" onPress={this.handleOnPress} couleur={couleurs.chiffre}/>
                    <Touche texte="8" onPress={this.handleOnPress} couleur={couleurs.chiffre} />
                    <Touche texte="9" onPress={this.handleOnPress} couleur={couleurs.chiffre} />
                    <Touche texte="*" onPress={this.handleOnPress} />
                </View>
                <View style={styles.row}>
                    <Touche texte="4" onPress={this.handleOnPress} couleur={couleurs.chiffre} />
                    <Touche texte="5" onPress={this.handleOnPress} couleur={couleurs.chiffre} />
                    <Touche texte="6" onPress={this.handleOnPress} couleur={couleurs.chiffre} />
                    <Touche texte="-" onPress={this.handleOnPress} />
                </View>
                <View style={styles.row}>
                    <Touche texte="1" onPress={this.handleOnPress} couleur={couleurs.chiffre} />
                    <Touche texte="2" onPress={this.handleOnPress} couleur={couleurs.chiffre} />
                    <Touche texte="3" onPress={this.handleOnPress} couleur={couleurs.chiffre} />
                    <Touche texte="+" onPress={this.handleOnPress} />
                </View>
                <View style={styles.row}>
                    <Touche texte="0" onPress={this.handleOnPress} couleur={couleurs.chiffre} />
                    <Touche texte="." onPress={this.handleOnPress} />
                    <BigTouche texte="=" onPress={this.handleOnPress} couleur={couleurs.frequent} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    clavier: {
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default Clavier;
