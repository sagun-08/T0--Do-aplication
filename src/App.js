
import './App.css';
import Header from './components/header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const[data,setData]=useState([]);
  const addData = () =>{
    setData([...data,{name,email}
    ]);
    setName("");
    setEmail("");
      
  };
  const removeitem =(index) =>{
    let arr=data;
    arr.splice(index,1);
     setData([...arr])
  }
  return (
    <div className="App">
      <Header/>
      <div className='form'>
      <Stack direction="row" spacing={2}>
      <TextField value={name} onChange={(event) => setName(event.target.value)} id="outlined-basic" label="name" variant="outlined" />
      <TextField value={email} onChange={(event) => setEmail(event.target.value)}id="outlined-basic" label="email" variant="outlined" />
      <Button onClick ={addData} variant="contained" color="success">
        <AddIcon/>
        </Button>
      </Stack>
      </div>
      {/* data store */}
      <div className='data'>
        <div className='data-val'>
        <h3>Name</h3>
        <h3>Email</h3>
        <h3>Remove</h3>
        </div>
        {
          data.map((elemet,index) =>{
            return(
              <div className='data-val'>
        <h3>{elemet.name}</h3>
        <h3>{elemet.email}</h3>
        <stack>
        <Button onClick={()=> removeitem(index)} variant="outlined" color="error">
        <DeleteIcon/>
        </Button>
        </stack>
        </div>
              
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
