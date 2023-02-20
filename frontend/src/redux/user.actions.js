import { GET_USER_ERROR, GET_USER_LOADING, GET_USER_SUCCESS } from "./user.actionType";
import axios from "axios";

export const getUsers =
  (name, page, age, country, sort, gender) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_USER_LOADING });
        let res = await axios.get(
          `https://long-plum-millipede-cape.cyclic.app/user?name=${name}&age=${age}&country=${country}&gender=${gender}&page=${page}&sort=${sort}`
        );
        console.log("getusers",res);
        // dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    } catch (error) {
      console.log("Error", error);
        // dispatch({ type: GET_USER_ERROR, payload: e.response.data });
    }
  };