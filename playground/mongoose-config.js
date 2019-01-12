const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/TodoApp';
mongoose.connect(
  url,
  { useNewUrlParser: true }
);

const Interest = mongoose.model('Interests', {
  text: { type: String, required: true, trim: true, minLength: 5 },
  completed: { type: Boolean, trim: true, default: false },
  completedAt: { type: Number },
});

const newInterest = new Interest({ text: 'Learn Node' });
newInterest
  .save()
  .then(res => console.log(`Saved Interest: ${res}`))
  .catch(error => console.log(error));
