/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../atoms/todo';

function TodoListFilters() {
	const [filter, setFilter] = useRecoilState(todoListFilterState);

	const updateFilter = ({ target: { value } }) => {
		setFilter(value);
	};

	return (
		<div className='todo-filter'>
			Filter:{' '}
			<select value={filter} onChange={updateFilter}>
				<option value='Show All'>All</option>
				<option value='Show Completed'>Completed</option>
				<option value='Show Uncompleted'>Uncompleted</option>
			</select>
		</div>
	);
}

export default TodoListFilters;
