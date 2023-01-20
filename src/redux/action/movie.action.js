import axios from "axios";

export const movieAction = (endpoint) => {
  return async (dispatch) => {
    dispatch({
      type: "PENDING",
    });

    try {
      let response = await axios.get(
        ` https://www.omdbapi.com/?i=tt3896198&apikey=90bc61ab${endpoint}`
      );
      dispatch({
        type: "FULFILLED",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "REJECTED",
        payload: error,
      });
    }
  };
};

export const movieSection2sAction = (endpoint) => {
  return async (dispatch) => {
    dispatch({
      type: "PENDING",
    });

    try {
      let response = await axios.get(
        ` https://www.omdbapi.com/?i=tt3896198&apikey=90bc61ab${endpoint}`
      );
      dispatch({
        type: "FULFILLEDSEC2",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "REJECTED",
        payload: error,
      });
    }
  };
};

export const movieSection3sAction = (endpoint) => {
  return async (dispatch) => {
    dispatch({
      type: "PENDING",
    });

    try {
      let response = await axios.get(
        ` https://www.omdbapi.com/?i=tt3896198&apikey=90bc61ab${endpoint}`
      );
      dispatch({
        type: "FULFILLEDSEC3",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "REJECTED",
        payload: error,
      });
    }
  };
};

export const searchData = (value) => {
  return async (dispatch) => {
    dispatch({
      type: "PENDING",
    });

    try {
      let response = await axios.get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=90bc61ab&s=${value}&type=movie`
      );
      dispatch({
        type: "FULFILLED",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "REJECTED",
        payload: error,
      });
    }
  };
};
