import './App.css';
import Task from './components/Task';


function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
<Task title="Dishes" deadline="Today" description="Cleaning up after dinner" />
    <Task title="Laundry" deadline="Tomorrow" description="Put dirty clothes in washer">
    </Task>

<Task title="Tidy" deadline="Today" description="Hoover the room" />

    </div>
  );
}


export default App;
