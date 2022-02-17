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

    const [Boxes, setBoxes] = useState(initialBoxVals)

  return (
    <View style={styles.container}>
        <View style={styles.board}>
            <View style={styles.row}>
                <Row start={0} end={3}/>
            </View>
            <View style={styles.row}>
                <Row start={3} end={6}/>
            </View>
            <View style={styles.row}>
                <Row start={6} end={9}/>
            </View>
        </View>
    </View>
  )
    
    function Row(props) {
        return (
            Boxes.slice(props.start, props.end).map((box) => { 
            if (box.checked === true) {    
                    return (
                    <View style={styles.box} onTouchStart={() => checkHandler(box.id)}>
                        <Image style={styles.image} source={require("../assets/grumpycat.png")} />
                    </View>)
            } else {
                return (
                    <View style={styles.box} onTouchStart={() => checkHandler(box.id)}>
                    </View>)
            }
            })
        )
    }
  
    function checkHandler(id) {
        let boxes = [...Boxes]
        console.log(boxes[id].checked)
        boxes = boxes.map((box) => {return id === box.id ? {...box, checked: !box.checked} : box})
        console.log(boxes[id].checked)
        setBoxes(boxes)
    }
}

export default GameScreen;