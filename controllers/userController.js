const User = require('../models/User');

exports.saveUserData = async (req, res) => {
  try {
    const { name, mobileNumber, aadhar, pan, dob, uniqueId } = req.body;
    let user = await User.findOne({ uniqueId });

    if (user) {
      // If user exists, add a new entry
      user.entries.push({ name, mobileNumber, aadhar, pan, dob });
    } else {
      // Create a new user document with the entry
      user = new User({
        uniqueId,
        entries: [{ name, mobileNumber, aadhar, pan, dob }]
      });
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "User Data Submitted Successfully!"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error occurred while submitting user data"
    });
  }
};
