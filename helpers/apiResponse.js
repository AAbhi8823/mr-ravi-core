
exports.successResponse = function (res, msg) {
  var data = {
    status: true,
    message: msg,
  };
  return res.status(200).json(data);
}

exports.successResponseWithData = function (res, msg, data) {
    var resData = {
        status: true,
        message: msg,
        data: data,
    };
    return res.status(200).json(resData);
    }

exports.ErrorResponse = function (res, msg) {
    var data = {
        status: false,
        message: msg,
    };
    return res.status(500).json(data);
    }

exports.notFoundResponse = function (res, msg) {
    var data = {
        status: false,
        message: msg,
    };
    return res.status(404).json(data);
    }

exports.validationErrorWithData = function (res, msg, data) {
    var resData = {
        status: false,
        message: msg,
        data: data,
    };
    return res.status(400).json(resData);
    }

exports.unauthorizedResponse = function (res, msg) {
    var data = {
        status: false,
        message: msg,
    };
    return res.status(401).json(data);
    }

exports.forbiddenResponse = function (res, msg) {
    var data = {
        status: false,
        message: msg,
    };
    return res.status(403).json(data);
    }

exports.tokenExpiredResponse = function (res, msg) {
    var data = {
        status: false,
        message: msg,
    };
    return res.status(419).json(data);
    }



// exports.invalidResponse = function (res, msg) {
//     var data = {
//         status: false,
//         message: msg,
//     };
//     return res.status(422).json(data);
//     }

// exports.emailExistResponse = function (res, msg) {
//     var data = {
//         status: false,
//         message: msg,
//     };
//     return res.status(409).json(data);
//     }
