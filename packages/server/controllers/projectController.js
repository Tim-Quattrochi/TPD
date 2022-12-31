const Project = require("../models/projectModel");

const catchAsync = require("express-async-handler");

exports.getAllProjects = catchAsync(async (req, res, next) => {
  const projects = await Project.find();
  res.status(200).json({
    status: "success",
    results: projects.length,
    data: {
      projects,
    },
  });
});

exports.getProjectById = catchAsync(async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return next(new AppError("No project found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.createProject = catchAsync(async (req, res, next) => {
  const {
    companyName,
    companyEmail,
    projectDetails,
    missionStatement,
    deadlines,
  } = req.body;

  if (
    !companyName ||
    !companyEmail ||
    !projectDetails ||
    !missionStatement ||
    !deadlines
  ) {
    res.status(400);
    throw new Error("Please fill out all the required fields.");
  }
  const newProject = await Project.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      project: newProject,
    },
  });
});

exports.updateProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!project) {
    return next(new AppError("No project found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.deleteProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) {
    return next(new AppError("No project found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});
