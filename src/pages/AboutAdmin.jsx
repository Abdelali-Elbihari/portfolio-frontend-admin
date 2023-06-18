import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Avatar } from '@mui/material';
import { deleteAbout, getAbouts } from '../actions/aboutAction';
import AboutModal from '../components/AboutModal';
import Table from '../components/MuiTable';
import ActionsComponent from '../components/ActionsComponent';

const getColumns = (onEditClick, onDeleteClick, idModalEdit) => [
  {
    accessorKey: 'title',
    header: 'Title'
  },
  {
    accessorKey: 'description',
    header: 'Description'
  },
  {
    accessorKey: 'image',
    header: 'Image',
    cell: (row) => {
      return (
        <Box sx={{ flexGrow: { xs: 0, md: 0 }, justifyContent: 'flex-end' }}>
          <Avatar
            alt='image'
            variant='square'
            src={row.row.original.image}
            sx={{
              height: 65,
              width: 65,
              margin: '1rem 2rem 1rem 0',
              justifyContent: 'center',
              objectFit: 'scale-down'
            }}
          />
        </Box>
      );
    }
  },
  {
    accessorKey: 'actions',
    header: '',
    cell: (row) => (
      <ActionsComponent row={row} onDeleteClick={onDeleteClick} idModalEdit={idModalEdit} onEditClick={onEditClick} />
    )
  }
];

function AboutAdmin() {
  const abouts = useSelector((state) => state.abouts);
  const dispatch = useDispatch();
  const [selectedAbout, setSelectedAbout] = useState({
    title: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    dispatch(getAbouts());
  }, [dispatch]);

  const onDeleteClick = (about) => {
    dispatch(deleteAbout(about._id));
  };

  const onEditClick = (data) => {
    setSelectedAbout(data);
  };

  return (
    <div className='container'>
      <Box padding={6}>
        <Table
          title='About'
          data={abouts}
          columns={getColumns(onEditClick, onDeleteClick, 'editAbout')}
          idModalAdd='addAbout'
        />
      </Box>

      <AboutModal id='addAbout' header='Add About' about={selectedAbout} submitValue='Add' colorButton='success' />
      <AboutModal id='editAbout' header='Edit About' about={selectedAbout} submitValue='Edit' colorButton='warning' />
    </div>
  );
}

export default AboutAdmin;
