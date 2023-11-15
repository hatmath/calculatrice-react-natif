import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Ecran extends React.Component {

    render() {
        return (
            <View>
                <Text style={styles.ecran}>{this.props.texte}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    ecran: {
        minHeight: 80,
        fontSize: 40,
        margin: 5,
        padding: 10,
        backgroundColor: '#efeef3',
        color: "black",
    }
});

export default Ecran