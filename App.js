import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

	const [courseGoals, setCourseGoal] = useState([]);
	const [isAddMode,setIsAddMode] = useState(false);

	const addGoalHandler = goalTitle => {
		setCourseGoal(currentGoals => [
			...currentGoals,
			{ id: Math.random().toString(), value: goalTitle }
		]);
		
		setIsAddMode(false);
	};

	const removeGoalHandler = goalId => {
		setCourseGoal(currentGoals => {
			return currentGoals.filter((goal) => goal.id !== goalId);
		});
	};

	const cancelGoalAddition = () =>{
		setIsAddMode(false);

	};

	return (
		<View style={styles.screen}>

			<Button title = "Add Goals" onPress = {() => setIsAddMode(true)}/>
			<GoalInput visible = {isAddMode} onAddGoal={addGoalHandler} onCancel = {cancelGoalAddition}/>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={itemData => (
					<GoalItem
						children={itemData.item.value}
						id={itemData.item.id}
						onDelete={removeGoalHandler}/>

				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({

	screen: {
		padding: 50
	}

});
