// Components
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';
import Workspace from './workspace/Workspace';

// Styles
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <Header text='Markdown' />
        <Workspace />
      </main>
    </div>
  );
}

export default App;
