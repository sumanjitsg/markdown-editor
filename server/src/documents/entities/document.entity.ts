import { CreateDocumentDto } from '../dto/create-document.dto';

type DocumentId = { documentId: string };
export interface IDocument extends CreateDocumentDto, DocumentId {}

// export class Document implements IDocument {}
