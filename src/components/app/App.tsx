// Components
import Sidebar from '../sidebar/Sidebar';
import AppHeader from '../header/AppHeader';
import Workspace from '../workspace/Workspace';

// Styles
import styles from './App.module.css';

function App() {
  return (
    <div className='min-h-screen flex'>
      <Sidebar />
      <main className='grow'>
        <AppHeader text='Markdown' />
        <Workspace />
      </main>
    </div>
  );
}

export default App;
