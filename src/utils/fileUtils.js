exports.isImage = path => {
  const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  return allowedExtensions.exec(path);
};

exports.generateName = name => {
  const ext = name.match(/\.[0-9a-z]+$/i)[0];
  return +new Date() + ext;
};
