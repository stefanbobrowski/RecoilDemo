import React from 'react';
import TodoItemCreator from './TodoItemCreator';
import TodoListFilters from './TodoListFilters';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../../atoms/todo';
import TodoItem from './TodoItem';
import TodoListStats from './TodoListStats';

function TodoList() {
	const todoList = useRecoilValue(filteredTodoListState);

	return (
		<div className='todo-list'>
			<h3>Todo List:</h3>
			<div className='flex-container'>
				<div className='left'>
					<TodoListStats />
					<TodoItemCreator />
				</div>
				<div className='right'>
					<TodoListFilters />
					{todoList.map((todoItem) => (
						<TodoItem key={todoItem.id} item={todoItem} />
					))}
				</div>
			</div>
		</div>
	);
}

export default TodoList;
