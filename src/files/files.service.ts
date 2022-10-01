import { Injectable } from '@nestjs/common';
import { FileElementResponse } from './dto/file-element.reposonse';
import { format } from 'date-fns';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
<<<<<<< HEAD
import * as sharp from 'sharp';
=======
>>>>>>> 9342e598fd28a7af0f8114b90e11a826608e1249
import { MFile } from './mfile.class';

@Injectable()
export class FilesService {

	async saveFiles(files: MFile[]): Promise<FileElementResponse[]> {
		const dateFolder = format(new Date(), 'yyyy-MM-dd');
		const uploadFolder = `${path}/uploads/${dateFolder}`;
		await ensureDir(uploadFolder)
		const res: FileElementResponse[] = [];
		const dateNow = Date.now().toString()
		for (const file of files) {
			await writeFile(`${uploadFolder}/${dateNow}-${file.originalname}`, file.buffer)
			res.push({ url: `/uploads/${dateFolder}/${dateNow}-${file.originalname}`, name: file.originalname });
		}
		return res;
	}

<<<<<<< HEAD
	convertToWebP(file: Buffer): Promise<Buffer> {
		return sharp(file)
			.webp()
			.toBuffer();
=======
	convertToWebP(file: Buffer): Buffer {
		return file;
>>>>>>> 9342e598fd28a7af0f8114b90e11a826608e1249
	}
}
