import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAbout } from '../actions/aboutAction.js';
import AboutModal from '../components/AboutModal.jsx';
import Table from '../components/Table';

function AboutAdmin() {
  const abouts = useSelector((state) => state.abouts);
  const dispatch = useDispatch();
  const [selectedAbout, setSelectedAbout] = useState({
    title: '',
    school: '',
    city: '',
    startDate: '',
    endDate: ''
  });

  const onDelteClick = (about) => {
    dispatch(deleteAbout(about._id));
  };

  const onEditClick = (data) => {
    setSelectedAbout(data);
  };

  return (
    <div className='container'>
      <Table
        ondelteClick={onDelteClick}
        onEditClick={onEditClick}
        idModalAdd='addAbout'
        idModalEdit='editAbout'
        title='About'
        headerText={['Title', 'School', 'City', 'Start Date', 'End Date']}
        headerProprities={['title', 'school', 'city', 'startDate', 'endDate']}
        tableData={abouts}
      />

      <AboutModal id='addAbout' header='Add About' about={selectedAbout} submitValue='Add' colorButton='success' />
      <AboutModal id='editAbout' header='Edit About' about={selectedAbout} submitValue='Edit' colorButton='warning' />
    </div>
  );
}

export default AboutAdmin;
