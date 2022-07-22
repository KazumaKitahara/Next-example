import {DataGrid, GridColDef, GridSelectionModel} from '@mui/x-data-grid';
import {useState} from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styles from './TodoTable.module.scss';
import {IconButton} from '@mui/material';

const TodoTable = (props: any) => {
  const todoTableColumns: GridColDef[] = [
    {field: 'name', headerName: '名称', width: 300},
    {field: 'description', headerName: '説明', flex: 1},
  ];
  const [selectedRowIds, setSelectedRowIds] = useState<GridSelectionModel>([]);
  const handleChangeSelectedRowIds = (selectedRows: GridSelectionModel) => {
    setSelectedRowIds(selectedRows);
  };
  const deleteTodos = () => {
    props.deleteTodos(selectedRowIds);
  };

  return (
    <div className={styles.todoTable}>
      <DataGrid
        columns={todoTableColumns}
        rows={props.todos}
        autoHeight
        checkboxSelection
        disableColumnMenu
        onSelectionModelChange={handleChangeSelectedRowIds}
      />
      {selectedRowIds.length > 0 &&
        <IconButton className={styles.todoTable__deleteButton} color="error" onClick={deleteTodos}>
          <DeleteForeverIcon  />
        </IconButton>
      }
    </div>
  );
};

export default TodoTable;