const initialState = {
  loading: true,
  data: undefined,
  error: undefined,
  sec2Data: undefined,
  sec3Data: undefined,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PENDING":
      return {
        ...state,
        loading: true,
      };
    case "FULFILLED":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FULFILLEDSEC2":
      return {
        ...state,
        loading: false,
        sec2Data: action.payload,
      };
    case "FULFILLEDSEC3":
      return {
        ...state,
        loading: false,
        sec3Data: action.payload,
      };
    case "REJECTED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "SEARCH_DATA":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
