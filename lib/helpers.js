exports.__ = function(db) {
  return {
    
    // see http://dailyjs.com/2010/12/06/node-tutorial-5/

    mongoStoreConnectionArgs: function() {
      return {
        dbname: db.db.databaseName,
        host: db.db.serverConfig.host,
        port: db.db.serverConfig.port,
        username: db.uri.username,
        password: db.uri.password
      };
    }

  };
};


exports.inherits = function( childConstructor, parentConstructor ) {
  /** @constructor */
  function tempCtor() {}
  tempCtor.prototype = parentConstructor.prototype;
  childConstructor.super_ = parentConstructor.prototype;
  childConstructor.prototype = new tempCtor();
  childConstructor.prototype.constructor = childConstructor;
};

