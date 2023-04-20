import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ItemLitCointainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import { Button } from 'react-bootstrap';



function App() {

  return (
    <div>
      <Navbar />
      <ItemLitCointainer saludo={"Espero Les Guste"}/>
      <Button variant="warning">Click Aqui</Button>

    </div>


  );
}

export default App;
