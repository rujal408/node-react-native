import DataUriParser from "datauri/parser.js";
import path from "path";
import { Buffer } from 'buffer'; // Import or define the Buffer type if not already available.


interface File {
  originalname: string;
  buffer: Buffer;
}

export const getDataUri=(file:File)=>{
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
}