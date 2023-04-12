// Add data to local storage

const addToDb = id => {
    let appliedJobs = {};

    // get previous data from local storage

    const storedAppliedJobs = localStorage.getItem('applied-jobs');
    if(storedAppliedJobs){
        appliedJobs = JSON.parse(storedAppliedJobs)
    }
    
    //add quantity
    const quantity = appliedJobs[id]; 

    if(quantity){
        const newQuantity = quantity + 1;
        appliedJobs[id] = newQuantity;
    } 
    else{
        appliedJobs[id] = 1;
    }

    //set data in local storage

    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));

}


//get stored data from applied jobs

const getAppliedJobs = () => {
    let appliedJobs = {};

    // get previous data from local storage

    const storedAppliedJobs = localStorage.getItem('applied-jobs');
    if(storedAppliedJobs){
        appliedJobs = JSON.parse(storedAppliedJobs)
    }

    return appliedJobs;

}



export {addToDb, getAppliedJobs}
