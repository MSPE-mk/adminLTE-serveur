'use strict';
var dbConn = require('../../config/db.config');
//actions object create

var Action = function(action){
  this.mois    = action.mois;
  this.problem     = action.problem;
  this.massnahmen          = action.massnahmen;
  this.verantwortlich          = action.verantwortlich;
  this.termin   = action.termin;
  this.abarbeitungsstatus    = action.abarbeitungsstatus;

  this.created_at     = new Date();
  this.updated_at     = new Date();
};
Action.create = function (newAct, result) {
dbConn.query("INSERT INTO actions set ?", newAct, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Action.findById = function (id, result) {
dbConn.query("Select * from actions where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Action.findAll = function (result) {
dbConn.query("Select * from actions", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('actions : ', res);
  result(null, res);
}
});
};



Action.update = function(id, action, result){
dbConn.query("UPDATE actions SET mois=?,problem=?,massnahmen=?,verantwortlich=?,termin=?,abarbeitungsstatus=? WHERE id = ?", [action.mois,action.problem,action.massnahmen,action.verantwortlich,action.termin,action.abarbeitungsstatus, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Action.delete = function(id, result){
dbConn.query("DELETE FROM actions WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Action;