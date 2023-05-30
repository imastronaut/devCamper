"use strict";

//@desc     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = function (req, res, next) {
  res.status(200).json({
    success: true,
    message: "Show all the bootcamps"
  });
}; //@desc     Get single bootcamps
//@route    GET /api/v1/bootcamps/:id
//@access   Public


exports.getBootcamp = function (req, res, next) {
  res.status(200).json({
    success: true,
    message: "Show bootcamp with id ".concat(req.params.id)
  });
}; //@desc     Create new bootcamp
//@route    POST /api/v1/bootcamps
//@access   Private


exports.createBootcamp = function (req, res, next) {
  res.status(200).json({
    success: true,
    message: "Create new bootcamps"
  });
}; //@desc     Update a bootcamp
//@route    POST /api/v1/bootcamps/:id
//@access   Private


exports.updateBootcamp = function (req, res, next) {
  res.status(200).json({
    success: true,
    message: "Update BootCamps ".concat(req.params.id)
  });
}; //@desc     Delete a bootcamp
//@route    POST /api/v1/bootcamps/:id
//@access   Private


exports.deleteBootcamp = function (req, res, next) {
  res.status(200).json({
    success: true,
    message: "Delete bootcamps ".concat(req.params.id)
  });
};
//# sourceMappingURL=bootcamps.dev.js.map
