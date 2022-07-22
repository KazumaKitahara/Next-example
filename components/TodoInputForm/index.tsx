import {Button, TextField, Typography} from '@mui/material';
import {useState} from 'react';
import styles from './TodoInputForm.module.scss';

const TodoInputForm = (props: any) => {
  const [ todoName, setTodoName ] = useState('');
  const handleChangeTodoName = (event: any) => {
    setTodoName(event.target.value);
  };
  const [ todoDescription, setTodoDescription ] = useState('');
  const handleChangeTodoDescription = (event: any) => {
    setTodoDescription(event.target.value);
  };
  const initializeTodoInputForm = () => {
    setTodoName('');
    setTodoDescription('');
  };
  const addTodo = () => {
    initializeTodoInputForm();
    props.addTodo(todoName, todoDescription);
  };

  return (
    <div className={styles.todoInputForm}>
      <Typography variant="h2" data-en="Todo list">TODOリスト</Typography>
      <TextField label={'名称'} variant={'standard'} value={todoName} onChange={handleChangeTodoName}/>
      <TextField label={'説明'} variant={'standard'} value={todoDescription} onChange={handleChangeTodoDescription}/>
      <Button variant={'contained'} onClick={addTodo}>TODOを作成</Button>
    </div>
  );
};

export default TodoInputForm;