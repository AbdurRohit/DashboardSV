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
import { createContext } from 'react';
import ViewNewsModal from './ViewNewsModal';
// import { showNews } from './showNews';

export const MyContext = createContext("");

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




function createData(id, no, title, content, views, options, comment) {
  return { id, no, title, content, views, options,comment };
}

const rows = [
  createData(1, 1, 'India secular country', 'The most secular county in the world faced some troubles', 1324171354, 100, 20),
  createData(2, 2, 'America won nothing', 'We witnessed the downfall of ameria Yes because the richest 1% have all the real wealth in the nation, and because Trump is trying to divide the nation and get us to hate each other for his own political gains, and because Capitalism in our system where the rich pay less taxes than a middle class person of can make $10 billion in a year in stock and owe no taxes on it is taking from ', 1213, 140, 20),
  createData(3, 3, 'Russia ukraine war', 'Russia ukraine war has come to an end said Kangana Ranaut', 121003, 400, 10),
];


export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);

  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function showNews(id) {
      const allData = [...rows];
      const rowData = allData.find(item => item.id === id);
      setOpen (true);
      setSelected(rowData);
    }

  return (
    
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
       <ViewNewsModal open = {open} data = {selected}  onClose={() => setOpen(false)} />
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
                        <TableCell key={column.id} align={column.align } >

                          {column.id === 'options' ? (
                            <div>
                             
                              <Button onClick={()=>showNews(row.id)}><AssessmentIcon /></Button>
                              <Button><EditNoteIcon /></Button>
                              <Button><DeleteForeverIcon /></Button>
                            </div>
                          ) : (
                            column.format && typeof value === 'number' ? column.format(value) : value
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