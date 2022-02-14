import logo from './logo.svg';
import './App.css';
import {Table,Container,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Item } from './Item.js';
function App() {
  const itemList = [{"name":"finish homework","note":"start at 2022-01-01 09:00:00","status":"Done"},
  {"name":"cook dinner","note":"veg only","status":"todo"},
  {"name":"buy milk","note":"","status":"Done"}]

  const removeHandler =() =>{

  }

  return (
    <Container>
        <h1>Interview Question</h1>
        <Button> Add New Item</Button>
        <Button className="float-end"
        onClick={removeHandler}
        > Remove Selected Items</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Note</th>
              <th>status</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {itemList.map((item,index)=>{
              return <Item 
                key={index}
                name = {item.name}
                note = {item.note}
                status = {item.status}
            />
            })}
          </tbody>
        </Table>
    </Container>
  );
}

export default App;
