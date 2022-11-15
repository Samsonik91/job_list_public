import {fetchJobs} from "../api"
import {setJobsAction} from "../store/jobActions"

export const getAllJobs = () => async(dispatch) => {
    const {data} = await fetchJobs()
    dispatch(setJobsAction(data))
}