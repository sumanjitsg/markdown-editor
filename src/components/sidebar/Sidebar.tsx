import { ReactElement } from 'react';

import { ReactComponent as IconDocument } from 'assets/icon-document.svg';
import { ReactComponent as IconDarkMode } from 'assets/icon-dark-mode.svg';
import { ReactComponent as IconLightMode } from 'assets/icon-light-mode.svg';

type Props = {
  themeToggler: ReactElement;
};

function Sidebar( { themeToggler }: Props ) {
  return (
    <aside
      className='px-6 py-7 bg-gray-900 fixed min-h-full flex flex-col w-64 -translate-x-64'>
      <div className='grow'>
        <div>
          <h1
            className='uppercase font-commissioner font-bold text-15px leading-tight tracking-[.33em]'>
            Markdown
          </h1>
        </div>
        <div
          className='mt-7'>
          <h2
            className='uppercase font-roboto font-medium leading-tight text-gray-500'>
            My Documents
          </h2>
        </div>
        <div
          className='mt-7'>
          <button
            className='bg-orange-400 py-3 rounded min-w-full text-15px leading-tight text-center'
            onClick={() => {}}>
            + New Document
          </button>
        </div>
        <div
          className='mt-6'>
          <div
            className="flex items-center gap-x-4">
            <IconDocument className='shrink-0' />
            <div>
              <p
                className='font-light text-13px leading-tight text-gray-500'>
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
            <IconDocument className='shrink-0' />
            <div>
              <p
                className='font-light text-13px leading-tight text-gray-500'>
                01 April 2022
              </p>
              <p
                className='mt-1 text-15px leading-tight'>
                welcome.md
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className='flex gap-3 items-center'>
        <IconDarkMode />
        {themeToggler}
        <IconLightMode />
      </div>
    </aside>
  );
}

export default Sidebar;