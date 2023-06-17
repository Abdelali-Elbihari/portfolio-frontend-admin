import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addAbout, updateAbout } from '../actions/aboutAction.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AboutModal = ({ id, header, about, submitValue, colorButton }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { register, handleSubmit, reset, setValue } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id === 'editAbout') {
      setValue('title', about.title);
      setValue('school', about.school);
      setValue('city', about.city);
      setStartDate(Date.parse(about.startDate));
      setStartDate(Date.parse(about.endDate));
    }
  }, [about, id, setValue]);

  const onClick = (data) => {
    data.startDate = startDate;
    data.endDate = endDate;
    if (id === 'editAbout') {
      dispatch(updateAbout(about._id, data));
    } else {
      dispatch(addAbout(data));
    }
    reset();
  };
  return (
    <div>
      <div className='modal fade' id={id} tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog  modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                {header}
              </h5>
              <button
                type='button'
                className='btn-close shadow-none'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div>
                <div className='row'>
                  <div className='col-md-12 mb-md-0 mb-5 px-md-5'>
                    <form>
                      <div className='row py-md-2'>
                        <div className='col-md-12'>
                          <div className='md-form mb-0'>
                            <label htmlFor='title' className=''>
                              Title
                            </label>
                            <input
                              type='text'
                              id='title'
                              name='title'
                              className='form-control shadow-none'
                              {...register('title')}
                            />
                          </div>
                        </div>

                        <div className='col-md-12'>
                          <div className='md-form mb-0'>
                            <label htmlFor='school' className=''>
                              School
                            </label>
                            <input
                              type='text'
                              id='school'
                              name='school'
                              className='form-control shadow-none'
                              {...register('school')}
                            />
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='md-form mb-0'>
                            <label htmlFor='city' className=''>
                              City
                            </label>
                            <input
                              type='text'
                              id='city'
                              name='city'
                              className='form-control shadow-none'
                              {...register('city')}
                            />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='md-form mb-0'>
                            <label htmlFor='school' className=''>
                              Start Date
                            </label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='md-form mb-0'>
                            <label htmlFor='school' className=''>
                              End Date
                            </label>
                            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary shadow-none' data-bs-dismiss='modal'>
                Close
              </button>
              <button
                type='button'
                className={`btn btn-${colorButton} shadow-none`}
                data-bs-dismiss='modal'
                onClick={handleSubmit(onClick)}
              >
                {submitValue}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
