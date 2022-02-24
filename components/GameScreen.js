import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';

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

    let isPlayerOne = true    
    let images = [require("../assets/icon.png"), require("../assets/cutecat.png"), require("../assets/grumpycat.png")]
    let position = [[0, 0, 0],
                    [0, 0, 0], 
                    [0, 0, 0]]

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
        const [image, setImage] = useState(images[0])

        function changeImage(isPlayerOne) {
            let row = Math.floor(props.id/3);
            let col = props.id % 3;
            console.log(isPlayerOne)
            if (position[row][col] === 0) {
                position[row][col] = isPlayerOne ? 1:2
                isPlayerOne = !isPlayerOne
                setImage(images[position[row][col]])
            }
            console.log(isPlayerOne)

            console.log(position)
        }

        return (
            <View style={styles.box}>
                <Image style={styles.image} source={image} onTouchStart={() => changeImage(isPlayerOne)}/>
            </View>)
    }
}

export default GameScreen;