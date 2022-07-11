import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  // todo: add doc id to location header
  // todo: validate if empty body or incorrect props received in create or update requests
  @Post()
  create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() createDocumentDto: CreateDocumentDto,
  ): void {
    const newDocument = this.documentsService.create(createDocumentDto);
    res.location(`${req.path}${newDocument.documentId}`);
    res.status(HttpStatus.CREATED).json(newDocument);
  }

  @Get()
  findAll() {
    return this.documentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDocumentDto: UpdateDocumentDto,
  ) {
    return this.documentsService.update(id, updateDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentsService.remove(id);
  }
}
