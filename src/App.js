import ToDoForm from "./comp/addToDO";
import ToDoList from "./comp/listTOdo";
import Filter from "./comp/filter"

function App() {
  return (
    <div className="App">
    
      <ToDoForm/>
      <ToDoList />
        <Filter/>
    </div>
  );
}

export default App;
