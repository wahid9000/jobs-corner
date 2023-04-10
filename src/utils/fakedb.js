// Add data to local storage

const addToDb = id => {
    let appliedJobs = {};

    // get previous data from local storage

    const storedAppliedJobs = localStorage.getItem('applied-jobs');
    if(storedAppliedJobs){
        appliedJobs = JSON.parse(storedAppliedJobs)
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



//Remove specific element from local storage

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}



//Clear all data from localStorage

const deleteShoppingCart = () => localStorage.removeItem('shopping-cart')

export {addToDb, getAppliedJobs}
// export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart}