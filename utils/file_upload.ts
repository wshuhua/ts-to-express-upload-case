import path = require("path");
import formidable = require("formidable");

export = function (req): Promise<any> {
  return new Promise((resolve, reject) => {
    //   创建formidable表单解析对象
    const form = formidable({
      uploadDir: path.join(__dirname, "../files/"),
      keepExtensions: true,
      multiples: false
    });
    form.parse(req, (err, fields, files) => {
      const { file} = files;
      if (!err) resolve(file);
      else reject(err);
    });
  });
};
