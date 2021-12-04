import axios from "axios";
import { API, API_TIMEOUT } from "../../../utils";
import {
  dispatchError,
  dispatchLoading,
  dispatchSuccess,
} from "../../../utils";

export const GET_DATA = "GET_DATA";

export const getDataList = () => {
  return (dispatch) => {
    // LOADING
    dispatchLoading(dispatch, GET_DATA);

    axios({
      method: "get",
      url: API,
      timeout: API_TIMEOUT,
    })
      .then((response) => {
        if (response.status !== 200) {
          // ERROR
          dispatchError(dispatch, GET_DATA, response);
        } else {
          // BERHASIL
          dispatchSuccess(
            dispatch,
            GET_DATA,
            response.data ? response.data : []
          );
          //console.log(response, "sukses fetch data");
        }
      })
      .catch((error) => {
        // ERROR
        dispatchError(dispatch, GET_DATA, error);

        alert(error);
      });
  };
};
