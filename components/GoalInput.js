import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';


const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const AddGoalHandler = () => {

        props.onAddGoal(enteredGoal);
        setEnteredGoal('');


    };
    const Exit = ()=>{
        props.onCancel();
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="fade">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course goal"
                    style={styles.textInputStyle}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />

                <View style = {styles.buttonContainer}>
                    <View style = {styles.button}>
                        <Button
                            title='Exit'
                            color='red'
                            onPress={Exit}
                            marginRight = '10'
                        />
                    </View>
                    <View style = {styles.button}>
                        <Button
                            title="ADD"
                            onPress={AddGoalHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textInputStyle: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width : '60%'
    },
    button:{
        width : '40%'

    }
});

export default GoalInput;