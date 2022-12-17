const Task = require('../models/taskModel');
const asyncHandler = require('express-async-handler');

exports.getAllTasks = asyncHandler(async (req, res, next) => {
  const tasks = await Task.find();
  res.status(200).json({
    status: 'success',
    results: tasks.length,
    data: {
      tasks,
    },
  });
});

exports.getTaskById = asyncHandler(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return next(new AppError('No task found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      task,
    },
  });
});

exports.createTask = asyncHandler(async (req, res, next) => {
  const { companyName, issue, description } = req.body;

  const newTask = await Task.create({
    companyName: companyName,
    issue: issue,
    description: description,
    submitted: Date.now(),
  });

  res.status(201).json({
    status: 'success',
    data: {
      task: newTask,
    },
  });
});

exports.updateTask = asyncHandler(async (req, res, next) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(new AppError('No task found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      task,
    },
  });
});

exports.deleteTask = asyncHandler(async (req, res, next) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) {
    return next(new AppError('No task found with that ID', 404));
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
