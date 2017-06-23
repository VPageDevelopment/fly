const getError = (errorArray) => {
    const i = 0;
    const validationError = [] ;
    for(i=0 ; i < errorArray.lenght; i++){
        validationError.push(errorArray[i].message);
    }

    return validationError;
}

module.exports = { getError };


