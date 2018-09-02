
  const express = require('express');
  const mongoose = require('mongoose');

  const router = express.Router();

  // Load issues Model
  require('../models/Issue');
  const Issue = mongoose.model('Issue');


  router.route('/').get((req, res) => {
    Issue.find((err, issues) => {
      if (err)
        console.log(err);
      else
        res.json(issues);
    });
  });

  router.route('/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
      if (err)
        console.log(err);
      else
        res.json(issue);
    });
  });

  router.post('/add', (req, res) => {
    console.log('working')
    var newIssue = new Issue({
      title: req.body.issues,

    });

    newIssue.save();
  });

  router.route('/update/:id').post((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
      if (!issue)
        return next(new Error('Could not load Document'));
      else {
        issue.title = req.body.title;
        issue.responsible = req.body.responsible;
        issue.description = req.body.description;
        issue.severity = req.body.severity;
        issue.status = req.body.status;
        issue.save().then(issue => {
          res.json('Update done');
        }).catch(err => {
          res.status(400).send('Update failed');
        });
      }
    });
  });

  router.route('/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({
      _id: req.params.id
    }, (err, issue) => {
      if (err)
        res.json(err);
      else
        res.json('Removed successfully');
    });
  });
  module.exports = router;
