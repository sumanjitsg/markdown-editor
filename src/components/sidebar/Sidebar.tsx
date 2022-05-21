// Components
import { ReactComponent as IconDocument } from 'assets/icon-document.svg';

function Sidebar() {
  return (
    <aside
      className='px-6 scss-bg-gray-900 fixed min-h-full -translate-x-full'>
      <div
        className='mt-7'>
        <h1
          className='uppercase font-commissioner font-bold text-15px leading-tight tracking-[.33em]'>
          Markdown
        </h1>
      </div>
      <div
        className='mt-7'>
        <h2
          className='uppercase font-roboto font-medium leading-tight scss-text-gray-500'>
          My Documents
        </h2>
      </div>
      <div
        className='mt-7'>
        <button
          className='scss-bg-orange-400 py-3 px-11 rounded min-w-max text-15px leading-tight'
          onClick={() => {}}>
          + New Document
        </button>
      </div>
      <div
        className='mt-6'>
        <div
          className="flex items-center gap-x-4">
          <IconDocument />
          <div>
            <p
              className='font-light text-13px leading-tight scss-text-gray-500'>
              01 April 2022
            </p>
            <p
              className='mt-1 text-15px leading-tight'>
              untitled-document.md
            </p>
          </div>
        </div>
        <div
          className="mt-6 flex items-center gap-x-4">
          <IconDocument />
          <div>
            <p
              className='font-light text-13px leading-tight scss-text-gray-500'>
              01 April 2022
            </p>
            <p
              className='mt-1 text-15px leading-tight'>
              welcome.md
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;