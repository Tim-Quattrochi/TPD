const Message = require("../models/messageModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllMessages = catchAsync(async (req, res, next) => {
    const messages = await Message.find();
    res.status(200).json({
        status: "success",
        results: messages.length,
        data: {
            messages,
        },
    });
} );

exports.getMessageById = catchAsync(async (req, res, next) => {
    const message
        = await
        Message.findById(req.params.id);
    if (!message) {
        return next(new AppError("No message found with that ID", 404));
    }
    res.status(200).json({
        status: "success",
        data: {
            message,
        },
    });
} );

exports.createMessage = catchAsync(async (req, res, next) => {
    const newMessage = await Message.create(req.body);
    res.status(201).json({
        status: "success",
        data: {
            message: newMessage,
        },
    });
}
);

exports.updateMessage = catchAsync(async (req, res, next) => {
    const message
        = await
        Message
            .findByIdAndUpdate(req.params.id, req.body
                , {
                    new: true,
                    runValidators: true,
                });
    if (!message) {
        return next(new AppError("No message found with that ID", 404));
    }
    res.status(200).json({
        status: "success",
        data: {
            message,
        },
    });
} );

exports.deleteMessage = catchAsync(async (req, res, next) => {
    const message
        = await
        Message.findByIdAndDelete(req.params.id);
    if (!message) {
        return next(new AppError("No message found with that ID", 404));
    }
    res.status(204).json({
        status: "success",
        data: null,
    });
} );




