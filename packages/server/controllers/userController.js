const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAllUsers = catchAsync(async (req, res, next) => {
	const users = await User.find();
	res.status(200).json({
		status: "success",
		results: users.length,
		data: {
			users,
		},
	});
});

exports.getUserById = catchAsync(async (req, res, next) => {
	const user = await User.findById(req.params.id);
	if (!user) {
		return next(new AppError("No user found with that ID", 404));
	}
	res.status(200).json({
		status: "success",
		data: {
			user,
		},
	});
});

exports.createUser = catchAsync(async (req, res, next) => {
	const newUser = await User.create(req.body);
	res.status(201).json({
		status: "success",
		data: {
			user: newUser,
		},
	});
});

exports.updateUser = catchAsync(async (req, res, next) => {
	const user = await User.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	if (!user) {
		return next(new AppError("No user found with that ID", 404));
	}
	res.status(200).json({
		status: "success",
		data: {
			user,
		},
	});
});

exports.deleteUser = catchAsync(async (req, res, next) => {
	const user = await User.findByIdAndDelete(req.params.id);
	if (!user) {
		return next(new AppError("No user found with that ID", 404));
	}
	res.status(204).json({
		status: "success",
		data: null,
	});
});

const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = catchAsync(async (req, res, next) => {
	const { firstName, lastName, email, password, confirmPassword } = req.body;
	const user = awaitUser.findOne({
		email,
	});
	if (user) {
		return next(new AppError("User already exists", 422));
	}
	if (password !== confirmPassword) {
		return next(new AppError("Passwords do not match", 422));
	}
	const hashedPassword = await bcrypt.hash(password, 12);
	const newUser = await User.create({
		firstName,
		lastName,
		email,
		password: hashedPassword,
	});
	const token = jwt.sign(
		{
			id: newUser._id,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: process.env.JWT_EXPIRES_IN,
		},
	);
	res.status(201).json({
		status: "success",
		token,
		data: {
			user: newUser,
		},
	});
});

exports.login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return next(new AppError("Please provide email and password", 400));
	}
	const user = await User.findOne({
		email,
	}).select("+password");
	if (!user || !(await bcrypt.compare(password, user.password))) {
		return next(new AppError("Incorrect email or password", 401));
	}
	const token = jwt.sign(
		{
			id: user._id,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: process.env.JWT_EXPIRES_IN,
		},
	);
	res.status(200).json({
		status: "success",
		token,
	});
});

exports.protect = catchAsync(async (req, res, next) => {
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		token = req.headers.authorization.split(" ")[1];
	}
	if (!token) {
		return next(
			new AppError("You are not logged in! Please log in to get access.", 401),
		);
	}
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	const freshUser = await User.findById(decoded.id);
	if (!freshUser) {
		return next(
			new AppError(
				"The user belonging to this token does no longer exist.",
				401,
			),
		);
	}
	if (freshUser.changedPasswordAfter(decoded.iat)) {
		return next(
			new AppError("User recently changed password! Please log in again.", 401),
		);
	}
	req.user = freshUser;
	next();
});

exports.restrictTo = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return next(
				new AppError("You do not have permission to perform this action", 403),
			);
		}
		next();
	};
};
