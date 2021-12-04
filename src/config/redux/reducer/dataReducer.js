import { GET_DATA } from "../action/getDataAction";
import {
  UPDATE_STATUS_DATA,
  UPDATE_DESCRIPTION_DATA,
  DELETE_DATA,
  ADD_DATA,
} from "../action/updateData";

const initialState = {
  getDataLoading: false,
  getDataResult: false,
  getDataError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      //console.log(action, "data dibaca reducer");
      return {
        ...state,
        getDataLoading: action.payload.loading,
        getDataResult: action.payload.data,
        getDataError: action.payload.errorMessage,
      };
    case UPDATE_STATUS_DATA:
      return Object.assign({}, state, {
        state: state.data.map((item) => {
          console.log(item, "item reducer");
          console.log(action.payload, "item action.payload");
          //return item.id === action.payload.id ? action.payload.data : item;
        }),
      });
    case DELETE_DATA:
      return Object.assign({}, state, {
        state: state.data
          .filter((item) => {
            return item.id !== action.id; //delete matched data
          })
          .concat(action.payload), //concats new data
      });
    default:
      return state;
  }
}
