const Project = require("../models/projectModel");
const User = require("../models/userModel");

const AppError = require("../middleware/AppError");

const catchAsync = require("express-async-handler");

exports.getAllProjects = catchAsync(async (req, res, next) => {
  const populateQuery = [
    { path: "author", select: "projects" },
    {
      path: "author",
      select: ["Name"],
    },
  ];
  const projects = await Project.find().populate(populateQuery);
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

  //get user using the id from the JWT
  const user = await User.findById(req.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found.");
  }

  const project = await Project.findById(projectId);

  console.log(project);
  if (!project) {
    res.status(404);
    throw new Error("Project not found.");
  }
  console.log(project._id);
  if (project.id.toString() !== req.id) {
    res.status(401);
    throw new Error("Not authorized.");
  }

  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.getProjectByAuthor = catchAsync(async (req, res, next) => {
  const userId = req.id;

  const projects = await Project.find({ author: userId });

  res.status(200).json({
    status: "success",
    data: {
      projects,
    },
  });
});

exports.createProject = catchAsync(async (req, res, next) => {
  console.log(req.id);
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
  const newProject = await Project.create({
    companyName,
    companyEmail,
    projectDetails,
    missionStatement,
    deadlines,
    author: req.id,
  });
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
