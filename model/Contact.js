const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  group: { type: Schema.Types.ObjectId, ref: "Group" },
});

module.exports = mongoose.model("Contact", contactSchema);
