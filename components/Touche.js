import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class Touche extends React.Component {    

    render() {
        const { texte, onPress, couleur } = this.props;
        return (
            <TouchableOpacity 
                style={[styles.touche, couleur && { backgroundColor: couleur }]} 
                onPress={() => onPress(texte)}>
                <Text style={styles.texte}>{texte}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({    
    touche: {
        flex: 1,
        backgroundColor: '#efeef3',
        margin: 5,
        padding: 0,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    texte: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "black",
        padding: 10,
    }
});

export default Touche
