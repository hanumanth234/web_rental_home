// const mongoose = require("mongoose");
// const Review = require("./review.js");

// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   image: {
//     filename: { type: String, default: "default.jpg" },
//     url: {
//       type: String,
//       default:
//         "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
//       set: (v) =>
//         v === ""
//           ? "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60"
//           : v,
//     },
//   },
//   price: Number,
//   location: String,
//   country: String,
//   reviews:[{
//     type:Schema.Types.ObjectId,
//     ref:"Review",
//   }]
// });

// listingSchema.post("findOneAndDelete", async function (doc) {
//   if (doc) {
//     await Review.deleteMany({ _id: { $in: doc.reviews } });
//   }
// });

// listingSchema.post()

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;
const mongoose = require("mongoose");
const Review = require("./reviews.js");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: { type: String, default: "default.jpg" },
    url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
      set: (v) =>
        v === ""
          ? "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner:{
    type:Schema.Types.ObjectId,
    ref:"User",
  }
});

listingSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Review.deleteMany({ _id: { $in: doc.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
