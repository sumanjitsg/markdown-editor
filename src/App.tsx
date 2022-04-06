// Components
import Header from './header/Header';
import Workspace from './workspace/Workspace';

// Styles
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <Header text='Markdown' />
      <Workspace />
    </div>
  );
}

export default App;
