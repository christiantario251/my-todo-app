import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<{ id: string; name: string }[]>([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTaskList([...taskList, { id: Date.now().toString(), name: task }]);
    setTask('');
  };

  const deleteTask = (id: string) => {
    setTaskList(taskList.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 My To-Do List</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task..."
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.name}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.deleteText}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#1e90ff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 5,
  },
  addText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskText: {
    fontSize: 16,
  },
  deleteText: {
    color: 'red',
    fontSize: 18,
  },
});
