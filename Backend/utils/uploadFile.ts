import multer, { Multer } from 'multer'

const uploadFiles:Multer = multer({dest:'../files'});

export default uploadFiles