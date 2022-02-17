import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
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
    }
})

function GameScreen() {
    
    const initialBoxVals = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((idNum) => { return {
        id: idNum,
        checked: false,
    }})

    const [Boxes, setBoxes] = useState(initialBoxVals)

  return (
    <View style={styles.container}>
        <View style={styles.board}>
            <View style={styles.row}>
                <Box id={1}/>
                <Box id={1}/>
                <Box id={1}/>
            </View>
            <View style={styles.row}>
                <Box id={1}/>
                <Box id={1}/>
                <Box id={1}/>
            </View>
            <View style={styles.row}>
                <Box id={1}/>
                <Box id={1}/>
                <Box id={1}/>
            </View>
        </View>
    </View>
  )

    function Box(props) {

        return (
            <View style={styles.box} onTouchStart={() => {
                setBoxes(Boxes.map((box) => {return box.id === props.id ? {...box, checked: true} : {...box}}))
                console.log(Boxes)
            }}/>
    )}
}

export default GameScreen;