export const UPDATE_STATUS_DATA = "UPDATE_STATUS_DATA";
export const UPDATE_DESCRIPTION_DATA = "UPDATE_DESCRIPTION_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const ADD_DATA = "ADD_DATA";

// update status data
export const updateStatusData = (dispatch, data) => {
  return dispatch({
    type: UPDATE_STATUS_DATA,
    payload: {
      loading: false,
      data: data,
      errorMessage: false,
    },
  });
};

// update description data
export const updateDescriptionData = (dispatch, data) => {
  return dispatch({
    type: UPDATE_STATUS_DATA,
    payload: {
      loading: false,
      data: data,
      errorMessage: false,
    },
  });
};

// delete data
export const deleteData = (dispatch, data) => {
  return dispatch({
    type: DELETE_DATA,
    payload: {
      loading: false,
      data: data,
      errorMessage: false,
    },
  });
};

// add data
export const addData = (dispatch, data) => {
  return dispatch({
    type: ADD_DATA,
    payload: {
      loading: false,
      data: data,
      errorMessage: false,
    },
  });
};
