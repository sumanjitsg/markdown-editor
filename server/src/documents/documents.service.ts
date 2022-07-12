import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { IDocument } from './entities/document.entity';
import { documents, activeDocumentId } from './data';

@Injectable()
export class DocumentsService {
  private documents: IDocument[] = documents;
  private activeDocumentId: string = activeDocumentId;

  create(createDocumentDto: CreateDocumentDto) {
    const documentId = uuidv4();
    const newDocument = { documentId, ...createDocumentDto };

    this.documents = [...this.documents, newDocument];

    return newDocument;
  }

  findAll() {
    return this.documents;
  }

  findOne(id: string) {
    const index = this.documents.findIndex(
      (document) => document.documentId === id,
    );

    if (index !== -1) {
      return this.documents[index];
    } else {
      throw new HttpException(
        `Document #${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  findActive() {
    return this.documents.find(
      (document) => document.documentId === activeDocumentId,
    );
  }

  updateActive(id: string) {
    // todo: keeping a separate document map maybe better for searching
    const index = this.documents.findIndex(
      (document) => document.documentId === id,
    );

    if (index === -1) {
      throw new HttpException(
        `Document #${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      this.activeDocumentId = id;
      return { activeDocumentId: this.activeDocumentId };
    }
  }

  update(id: string, updateDocumentDto: UpdateDocumentDto) {
    // todo: all properties in updateDTO undefined (validation)

    const index = this.documents.findIndex(
      (document) => document.documentId === id,
    );

    if (index === -1) {
      throw new HttpException(
        `Document #${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      let updatedDocument: IDocument;

      const documents = this.documents.map((document) =>
        id !== document.documentId
          ? document
          : (updatedDocument = {
              ...document,
              // todo: may remove filter after adding controller validation code
              ...Object.fromEntries(
                Object.entries(updateDocumentDto).filter(
                  ([, value]) => value !== undefined,
                ),
              ),
            }),
      );

      this.documents = documents;

      return updatedDocument;
    }
  }

  remove(id: string) {
    const documents = this.documents.filter(
      (document) => document.documentId !== id,
    );

    if (documents.length === this.documents.length - 1) {
      this.documents = documents;
      return `Document #${id} deleted!`;
    } else {
      throw new HttpException(
        `Document #${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
