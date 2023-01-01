const Project = require("../models/projectModel");
const AppError = require("../middleware/AppError");

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
  const projectId = req.params.id;
  const user = req.user;
  const project = await Project.findById(projectId)
    .populate("author")
    .exec();
  console.log(project);
  if (!project) {
    return next(new Error("No project found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.getProjectByAuthor = catchAsync(async (req, res, next) => {
  const populateQuery = [
    { path: "author", select: ["userName, firstName, lastName"] },
  ];
  const userId = req.params.userId;
  console.log(userId);
  const projects = await Project.find({
    author: userId,
  })
    .populate("author")
    .exec();

  console.log(projects);
  if (projects.length === 0) {
    return res
      .status(404)
      .json({ error: "No projects found by that user." });
  }
  res.status(200).json({
    status: "success",
    data: {
      projects,
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
    return next(new Error("No project found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});
