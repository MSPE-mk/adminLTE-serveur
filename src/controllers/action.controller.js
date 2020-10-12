'use strict';
const Action = require('../models/action.model');
exports.findAll = function(req, res) {
  Action.findAll(function(err, action) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', action);
  res.send(action);
});
};
exports.create = function(req, res) {
const new_action = new Action(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
  Action.create(new_action, function(err, action) {
  if (err)
  res.send(err);
  res.json({error:false,message:"action added successfully!",data:action});
});
}
};
exports.findById = function(req, res) {
  Action.findById(req.params.id, function(err, action) {
  if (err)
  res.send(err);
  res.json(action);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Action.update(req.params.id, new Action(req.body), function(err, action) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'action successfully updated' });
});
}
};
exports.delete = function(req, res) {
  Action.delete( req.params.id, function(err, action) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'action successfully deleted' });
});
};