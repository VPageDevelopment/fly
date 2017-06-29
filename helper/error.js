const getError = (e) => {
     var sError = e.errors;
      var vError =[];

      for (var i = 0; i < sError.length; i++) {
            var 
                field = sError[i].path,
                message = sError[i].message;
                vError.push({field,message});
      } 
   return vError;
}
module.exports = { getError };