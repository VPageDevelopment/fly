const getError = (e) => {
     var sError = e.errors;
      var vError = [];
      for (var i = 0; i < sError.length; i++) {
          vError.push(sError[i].message);
      } 
   return vError;
}
module.exports = { getError };