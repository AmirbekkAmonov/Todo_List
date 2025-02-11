import TodoForm from './TodoForm/TodoForm';
import TodoCard from './TodoCard/TodoCard';
import Header from './Header/Header.jsx'
import './Todo.scss';

function Index() {
  return (
    <section className="container">
      <div className="left">
        <h1>Todo List</h1>
        <TodoForm />
      </div>
      <div className="right">
         <Header/>
        <div className="right-content">
          <TodoCard />
        </div>
      </div>
    </section>
  );
}

export default Index;
