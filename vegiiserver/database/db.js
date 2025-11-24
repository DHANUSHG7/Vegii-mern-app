const mongoose = require('mongoose');
const newschema = new mongoose.Schema(
  {
    Uname: {
      type: String,
      required: true,
    },
    Uemail: {
      type: String,
      required: true,
    },
    Usubject: {
      type: String,
      required: true,
    },
    Umessage:  {
      type: String,
      required: true ,
    },
  },
  {
    collection: "vegii",
  }
);

module.exports=mongoose.model('vegii',newschema)