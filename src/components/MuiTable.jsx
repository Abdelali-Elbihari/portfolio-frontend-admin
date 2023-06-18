import { Paper, Table as MuiTable, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

const Table = ({ data, columns, title, idModalAdd }) => {
  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <Paper elevation={2} style={{ padding: '1rem 0px' }}>
      <div className='d-flex justify-content-end mt-5 me-5'>
        <h3 style={{marginLeft: '1rem'}} className='me-auto'>{title}</h3>
        <button
          type='button'
          className='btn btn-success shadow-none  ms-auto'
          data-bs-toggle='modal'
          data-bs-target={`#${idModalAdd}`}
        >
          Add {title}
        </button>
      </div>
      <MuiTable>
        <TableHead>
          {getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </Paper>
  );
};

export default Table;
