import { getAppliedJobs } from "../utils/fakedb";


export const appliedJobsData = async() => {
    const data = await fetch('/jobs.json')
    const appliedJobData = await data.json()

    const savedAppliedJobs = getAppliedJobs();
    let appliedJobsArray = [];

    for(const id in savedAppliedJobs){
        const foundJobs = appliedJobData.find(job => job.id === id);
            appliedJobsArray.push(foundJobs);
        
    }

    return { appliedJobsArray, appliedJobData};
}