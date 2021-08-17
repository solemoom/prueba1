import { useState } from 'react';
import './App.css';
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'


function App() {
  const [selectedDate, setSelectedDate] = useState(null)
    return (

    <div class="container">
    <form action="">
      <label for="firstnames">Nombres</label>
      <input type="text" id="firstnames" name="firstnames" placeholder="Tus nombres..." />
  
      <label for="lastnames">Apellidos</label>
      <input type="text" id="lastnames" name="lastnames" placeholder="Tus apellidos..."/>

      <label for="birthday">Fecha de Nacimiento</label>
      <DatePicker id="birthday" name="birthday" selected={selectedDate} onChange={date => setSelectedDate(date)} format="MM/dd/yyyy" placeholder="Fecha de Nacimiento..." ></DatePicker>
  
      <label for="email">Correo electrónico</label>
      <input type="text" id="email" name="email" placeholder="Tu correo electrónico..."/>
  
      <label for="telephone">Número de teléfono</label>
      <input type="text" id="telephone" name="telephone" placeholder="Tu teléfono..."/>
      
      <input type="submit" value="Submit"/>
    </form>
  </div>
  
  );
}

export default App;
