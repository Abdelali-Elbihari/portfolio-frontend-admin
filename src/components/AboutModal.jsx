import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Box, Avatar } from '@mui/material';
import { addAbout, updateAbout } from '../actions/aboutAction.js';

const AboutModal = ({ id, header, about, submitValue, colorButton }) => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id === 'editAbout') {
      setValue('title', about.title);
      setValue('description', about.description);
      setValue('image', about.image);
    }
  }, [about, id, setValue]);

  const onClick = (data) => {
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
                            <label htmlFor='description' className=''>
                              Description
                            </label>
                            <input
                              type='text'
                              id='description'
                              name='description'
                              className='form-control shadow-none'
                              {...register('description')}
                            />
                          </div>
                        </div>
                        <div className='col-md-10'>
                          <div className='md-form mb-0'>
                            <label htmlFor='link' className=''>
                              Image
                            </label>
                            <Box sx={{ flexGrow: { xs: 0, md: 0 }, justifyContent: 'flex-end' }}>
                              <Avatar
                                alt='image'
                                variant='square'
                                src={about.image}
                                sx={{
                                  height: 65,
                                  width: 65,
                                  margin: '1rem 2rem 1rem 0',
                                  justifyContent: 'center',
                                  objectFit: 'scale-down'
                                }}
                              />
                            </Box>
                            <input
                              type='file'
                              id='image'
                              name='image'
                              className='form-control shadow-none'
                              multiple={false}
                              {...register('image')}
                            />
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
