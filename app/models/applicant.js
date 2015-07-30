'use strict'

import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let ApplicantSchema = new Schema({
  firstName: String,
  lastName: String,
  createdAt: { type: Date, default: Date.now() },
  bio: String,
  status: { type: String, enum: ['reviewing', 'accepted'], default: 'reviewing' }
})

export default mongoose.model('Applicant', ApplicantSchema)
