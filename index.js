module.exports = function todo(note, date) {
  if(new Date(date) < new Date()) throw new Error(note);
};
