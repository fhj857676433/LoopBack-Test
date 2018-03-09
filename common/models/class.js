'use strict';

module.exports = function(Class) {

  Class.getClassName = function (class_id,cb) {
    Class.find({
      where:{id:class_id},
      fields:{class_name:true}
    },cb);
  };

  Class.remoteMethod('getClassName',{
    accepts:{"arg":"class_id","type":"number"},
    returns:{"arg":"class_name","type":"string"}
  });
};
