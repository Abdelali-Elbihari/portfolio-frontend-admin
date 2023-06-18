import { addAboutApi, getAboutsApi, deleteAboutApi, updateAboutApi } from '../apis/aboutApi.js';
import { toastSuccess, toastError } from '../shared/toast';
import aboutBackend from '../assets/aboutBackend.png';

export const getAbouts = () => async (dispatch) => {
  try {
    const { data } = await getAboutsApi();
    dispatch({ type: 'GET_ABOUTS', payload: data });
  } catch (error) {
    dispatch({
      type: 'GET_ABOUTS',
      payload: [{ title: 'Title example', description: 'Description  example', image: aboutBackend }]
    });
    console.log(error);
  }
};

export const addAbout = (about) => async (dispatch) => {
  try {
    const { data } = await addAboutApi(about);
    dispatch({ type: 'ADD_ABOUT', payload: data });
    toastSuccess('About Added Successfully');
  } catch (error) {
    console.log(error);
    toastError('Error while adding about');
  }
};

export const deleteAbout = (id) => async (dispatch) => {
  try {
    await deleteAboutApi(id);
    toastSuccess('About Deleted Successfully');
    dispatch({ type: 'DELETE_ABOUT', payload: id });
  } catch (error) {
    console.log(error);
    toastError('Error while deleting about');
  }
};

export const updateAbout = (id, about) => async (dispatch) => {
  try {
    const { data } = await updateAboutApi(id, about);
    dispatch({
      type: 'UPDATE_ABOUT',
      payload: { ...about, _id: data.about._id }
    });
    toastSuccess('About Updated Successfully');
  } catch (error) {
    console.log(error);
    toastError('Error while updating about');
  }
};
