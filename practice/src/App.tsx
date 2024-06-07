import './app.css';
import { CardTodo } from './component/CardTodo/CardTodo';

const App = () => {
  return (
    <>
      <h1 className="main-title">todos</h1>
      <main className="main-content">
        <CardTodo />
      </main>
    </>
  );
};

export default App;
