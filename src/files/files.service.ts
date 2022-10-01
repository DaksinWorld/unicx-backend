import { Injectable } from '@nestjs/common';
import { FileElementResponse } from './dto/file-element.reposonse';
import { format } from 'date-fns';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
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

	convertToWebP(file: Buffer): Buffer {
		return file;
	}
}
