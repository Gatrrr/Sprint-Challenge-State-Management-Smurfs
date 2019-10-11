import axios from "axios"

export const FETCHING_START = "FETCHING_START"
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
export const FETCHING_FAILURE = "FETCHING_FAILURE"
export const ADDING_SUCCESS = "ADDING_SUCCESS"

export const fetchSmurfs = () => dispatch => {
    dispatch({type: FETCHING_START})
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_SUCCESS, payload: res })
        })
        .catch(err => console.log(err))
}

export const addSmurf = (smurf) => dispatch => {
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log(res)
            dispatch({ type: ADDING_SUCCESS, payload: res })
        })
        .catch(err => console.log(err))

}
