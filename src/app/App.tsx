import { useTheme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Current ({theme}) Theme</button>
      <Link to='/'>| ... Main ... |</Link>
      <Link to='/about'>| ... About... |</Link>
      <AppRouter />
    </div>
  );
};

export default App;
