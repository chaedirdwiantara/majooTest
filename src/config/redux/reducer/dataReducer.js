import { GET_DATA } from "../action/getDataAction";

const initialState = {
  getDataLoading: false,
  getDataResult: false,
  getDataError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      //   console.log(action, "data dibaca reducer");
      return {
        ...state,
        getDataLoading: action.payload.loading,
        getDataResult: action.payload.data,
        getDataError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
