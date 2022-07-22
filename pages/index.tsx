import Head from 'next/head';
import styles from './Home.module.scss';
import {NextPageWithLayout} from './_app';
import {ReactElement, useState} from 'react';
import HeaderLayout from 'layouts/Header';
import TodoInputForm from 'components/TodoInputForm';
import TodoTable from '../components/TodoTable';
import {v4 as uuidv4} from 'uuid';
import {Divider} from '@mui/material';
import {GridSelectionModel} from '@mui/x-data-grid';

type TodoData = { id: string, name: string, description: string }

const Home: NextPageWithLayout = () => {
  const [todos, setTodos] = useState([] as TodoData[]);
  const addTodo = (name: string, description: string = '') => {
    setTodos([...todos, {id: uuidv4(), name, description}]);
  };
  const deleteTodos = (deleteTodoIds: GridSelectionModel) => {
    if (window.confirm(`選択された ${deleteTodoIds.length} 個のTODOを削除してもよろしいですか？`)) {
      setTodos(todos.filter((todo) => {
        return !deleteTodoIds.some((deleteTodoId) => deleteTodoId === todo.id);
      }));
    }
  };

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
        <link rel="icon" href="/public/favicon.ico"/>
        <title>Todo List</title>
        <meta name="description" content="Next.jsで作成したTODOリストです"/>
      </Head>

      <main className={styles.main}>
        <TodoInputForm addTodo={addTodo}/>
        <Divider className={styles.divider}/>
        <TodoTable todos={todos} deleteTodos={deleteTodos}/>
      </main>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return (
    <HeaderLayout>
      {page}
    </HeaderLayout>
  );
};

export default Home;
