module.exports = function todo(note, date) {
  if(date < Date.now()) throw note;
};
