//@ts-check
import multer from "multer";
import { v4 as uuid} from "uuid";
// const uuid = uuidv4.v4;
import path from "path";
import fs from 'fs'
const UPLOADS_DIR = path.join( process.cwd(), "uploads");
console.log(UPLOADS_DIR);
if(!fs.existsSync(UPLOADS_DIR)){
    fs.mkdirSync(UPLOADS_DIR)
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOADS_DIR);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const id = uuid();
    cb(null, id + ext);
  },
});

const upload = multer({
  storage: storage,
});

export default upload;