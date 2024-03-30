import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useState } from 'react';
import ViewNewsModal from './ViewNewsModal';
import EditCard from '../pages/EditCard';
import { NewsDataContext } from '../App';
import { useContext } from 'react';
import MuiDrawer from '@mui/material/Drawer';

const columns = [
  { id: 'no', label: 'No.', minWidth: 60 },
  { id: 'title', label: 'Title', minWidth: 170 },
  { id: 'content', label: 'Content', minWidth: 200 },
  {
    id: 'views',
    label: 'Views',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'options',
    label: 'Options',
    minWidth: 370,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

export default function UploadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectEdit, setSelectEdit] = useState({});
  const [Edit, setEdit] = useState(false);
  const [rowId, setRowId] = useState(0);

  const { rowsArray, updateArray } = useContext(NewsDataContext);
  const rows = [...rowsArray];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const showNews = (id) => {
    let allData = [...rows];
    let rowData = allData.find((item) => item.id === id);
    setOpen(true);
    setSelected(rowData);
  };

  const editNews = (id) => {
    let allData = [...rows];
    let rowData = allData.find((item) => item.id === id);
    setEdit(true);
    setRowId(id);
    console.log(rowData);
    setSelectEdit(rowData);
  };

  const deleteRow = (id) => {
    const updatedRows = rowsArray.filter((row) => row.id !== id);
    updateArray(updatedRows);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <EditCard
        comment={selectEdit}
        id={rowId}
        bool={Edit}
        onClose={() => {
          setEdit(false);
          setOpen(false);
        }}
      />
      <ViewNewsModal open={open} data={selected} onClose={() => setOpen(false)} />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'options' ? (
                            <div>
                              <Button onClick={() => showNews(row.id)}>
                                <AssessmentIcon />
                              </Button>
                              <Button onClick={() => editNews(row.id)}>
                                <EditNoteIcon />
                              </Button>
                              <Button onClick={() => deleteRow(row.id)}>
                                <DeleteForeverIcon />
                              </Button>
                            </div>
                          ) : column.format && typeof value === 'number' ? (
                            column.format(value)
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}