import React from 'react';
import { Box } from '@mui/material';

const ActionsComponent = ({ row, onDeleteClick, idModalEdit, onEditClick }) => {
  return (
    <Box sx={{ flexGrow: { xs: 1, md: 1 } }}>
      <button
        type='button'
        style={{ marginLeft: '0.5rem' }}
        className='btn btn-danger shadow-none'
        onClick={() => onDeleteClick(row)}
      >
        Delete
      </button>
      <button
        type='button'
        style={{ marginLeft: '0.5rem' }}
        className='btn btn-warning shadow-none'
        data-bs-toggle='modal'
        data-bs-target={`#${idModalEdit}`}
        onClick={() => onEditClick(row.row.original)}
      >
        Edit
      </button>
    </Box>
  );
};

export default ActionsComponent;
