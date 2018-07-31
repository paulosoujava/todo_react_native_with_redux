import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import * as TodoActions from './store/actions/todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoContainer: {
    flexDirection: 'row',
  },
});
const TodoList = ({ todos, addTodo, removeTodo }) => (
  <View style={styles.container}>
    { todos.map(todo => (
      <View key={todo.id} style={styles.todoContainer}>
        <Text>
          {todo.text}
        </Text>
        <TouchableOpacity onPress={() => { removeTodo(todo.id); }}>
          <Text>
            REMOVE
          </Text>
        </TouchableOpacity>
      </View>
    ))}
    <TouchableOpacity onPress={() => { addTodo('Ser Fodão!'); }}>
      <Text>
        ADD
      </Text>
    </TouchableOpacity>
  </View>
);
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  todos: state.todos,
});
const mapDispatchToPros = dispatch => bindActionCreators(TodoActions, dispatch);

// right order function
export default connect(mapStateToProps, mapDispatchToPros)(TodoList);
