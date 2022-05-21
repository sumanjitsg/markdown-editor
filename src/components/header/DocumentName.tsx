import { ReactComponent as IconDocument } from 'assets/icon-document.svg';

function DocumentName() {
  return (
    <div className='flex items-center gap-x-4'>
      <IconDocument />
      <div>welcome.md</div>
    </div>
  );
}
export default DocumentName;