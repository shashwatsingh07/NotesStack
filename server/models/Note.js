const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const noteSchema = new mongoose.Schema(
  {
    // BASIC INFO
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    // ACADEMIC CONTEXT
    college: {
      type: String,
      required: true,
    },

    course: {
      type: String, // e.g. B.Tech, BCA, MCA
      required: true,
    },

    branch: {
      type: String, // e.g. CSE, ECE
      required: true,
    },

    semester: {
      type: Number,
      required: true,
    },

    subject: {
      type: String,
      required: true,
    },

    // FILE INFO
    fileUrl: {
      type: String,
      required: true,
    },

    fileType: {
      type: String,
      enum: ["pdf", "image"],
      default: "pdf",
    },

    // BUSINESS LOGIC
    price: {
      type: Number,
      required: true,
      min: 0,
    },

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // REVIEWS
    reviews: [reviewSchema],

    averageRating: {
      type: Number,
      default: 0,
    },

    numberOfReviews: {
      type: Number,
      default: 0,
    },

    // SYSTEM FLAGS
    isApproved: {
      type: Boolean,
      default: true, // later admin approval
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
noteSchema.index({ college: 1, semester: 1, subject: 1 });
noteSchema.index({ averageRating: -1 });

module.exports = mongoose.model("Note", noteSchema);
