const { User } = require('./../model');

module.exports.createUser = async (req, res, next) => {
  const { body } = req;
  try {
    const createdUser = await User.create(body);
    if (!createdUser) {
      return next(createHttpError(400, 'Bed request'));
    }
    return res.status(201).send({ data: createdUser });
  } catch (error) {
    next(error);
  }
};

module.exports.getUsers = async (req, res, next) => {
  const { limit = 10, skip = 0 } = req.query;
  try {
    const foundUser = await User.find()
      .sort({ _id: 1 })
      .limit(limit)
      .skip(skip);

    return res.status(200).send({ data: foundUser });
  } catch (error) {
    next(error);
  }
};

module.exports.getUserById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const foundUserById = await User.findById(userId);
    if (!foundUserById) {
      return next(createHttpError(404, 'User not found'));
    }
    return res.status(200).send({ data: foundUserById });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUserById = async (req, res, next) => {
  const { body } = req;
  const { userId } = req.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, body, {
      new: true,     //показує тільки змінені рядки
      runValidators: true,  //обов'язково прописувати, бо не спрацює валідатори
    });
    if (!updatedUser) {
      return next(createHttpError(404, 'User not found'));
    }
    return res.status(201).send({ data: updatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUserById = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const deleteUserById = await User.findByIdAndDelete(userId);
    if (!deleteUserById) {
      return next(createHttpError(404, 'User not found'));
    }
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports.createUserPost = async (req, res, next) => {};

module.exports.getUserPosts = async (req, res, next) => {};
