import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodosAsync, deleteTodo } from '../redux/todoSlice';


const TodoItem = ({ id, title, completed }) => {

	const dispatch = useDispatch();

	const handleToggleComplete = () => {
		dispatch(toggleCompleteAsync({
			id: id,
			completed: !completed
		}))
	}

	const handleDeleteTodo = () => {
		dispatch(deleteTodosAsync({
			id: id
		}))
	}

	const handleContentEditable = (payload) => {
		
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3' 
						checked={completed}
						onChange={handleToggleComplete}
					/>
					<h3 typeof='submit' className='title-todoItem' >{title}</h3>
				</span>
				<button className='btn btn-danger' onClick={handleDeleteTodo} >Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
