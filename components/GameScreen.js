import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        paddingBottom: '50%',
        paddingTop: '20%',
        justifyContent: 'center',
    },
    board: {
        flex: 1,
        
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    box: {
        flex:1,
        borderWidth: 2,
        borderColor: 'black',
        margin: 2,
        backgroundColor: 'grey',
    },
    image: {
        width: '100%',
        height: '100%',
    },
})

function GameScreen() {
    
    const initialBoxVals = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((idNum) => { return {
        id: idNum,
        checked: false, // eventually willl change to int of value 0 (initial state), 1 (checked by p1), 2 (checked by p3)
    }})

    const boxStates = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        return useState(initialBoxVals[i])
    })

  return (
    <View style={styles.container}>
        <View style={styles.board}>
            <View style={styles.row}>
                <Box id={0} />
                <Box id={1} />
                <Box id={2} />
            </View>
            <View style={styles.row}>
                <Box id={3} />
                <Box id={4} />
                <Box id={5} />
            </View>
            <View style={styles.row} >
                <Box id={6} />
                <Box id={7} />
                <Box id={8} />
            </View>
        </View>
    </View>
  )
    
    function Box(props) {
        let [box, setBox] = boxStates[props.id]
        if (box.checked === true) {
            return (
                <View style={styles.box} onTouchStart={() => setBox({...box, checked: !box.checked})}>
                    <Image style={styles.image} source={require("../assets/grumpycat.png")} />
                </View>)
        } else {
            return (
                <View style={styles.box} onTouchStart={() => setBox({...box, checked: !box.checked})}>
                </View>)
        }
    }
}

export default GameScreen;