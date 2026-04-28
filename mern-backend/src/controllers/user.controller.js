const User = require('../models/User.model');

// @desc   Get all users (admin)
// @route  GET /api/users
exports.getAllUsers = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      User.find({ isActive: true }).skip(skip).limit(limit).sort({ createdAt: -1 }),
      User.countDocuments({ isActive: true }),
    ]);

    res.json({ success: true, count: users.length, total, page, pages: Math.ceil(total / limit), users });
  } catch (error) { next(error); }
};

// @desc   Get user by ID
// @route  GET /api/users/:id
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, user });
  } catch (error) { next(error); }
};

// @desc   Update user
// @route  PUT /api/users/:id
exports.updateUser = async (req, res, next) => {
  try {
    const { name, avatar } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { name, avatar }, { new: true, runValidators: true });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, message: 'User updated', user });
  } catch (error) { next(error); }
};

// @desc   Delete user (soft delete)
// @route  DELETE /api/users/:id
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, message: 'User deleted' });
  } catch (error) { next(error); }
};
