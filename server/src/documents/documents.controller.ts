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
  Query,
  HttpException,
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

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.documentsService.findOne(id);
  }

  @Get('active')
  findActive() {
    return this.documentsService.findActive();
  }

  @Patch('active')
  updateActive(@Query('id') id: string) {
    if (id === undefined) {
      throw new HttpException(
        'Document id required. e.g. /active?id=123',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return this.documentsService.updateActive(id);
    }
  }

  @Patch('id/:id')
  update(
    @Param('id') id: string,
    @Body() updateDocumentDto: UpdateDocumentDto,
  ) {
    return this.documentsService.update(id, updateDocumentDto);
  }

  @Delete('id/:id')
  remove(@Param('id') id: string) {
    return this.documentsService.remove(id);
  }
}
