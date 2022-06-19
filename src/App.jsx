import {useState, useEffect} from "react";
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] =useState([]);

  useEffect(() => {
    const obtenerLS = () => {
      console.log("get localStorage")
      // PacientesLS=JSON.parse(localStorage.getItem('pacientes'))
      const PacientesLS=JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(PacientesLS);
      console.log(PacientesLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    console.log("set localStorage")
    console.log(pacientes)
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados =pacientes.filter(paciente=>paciente.id !== id)
    setPacientes(pacientesActualizados);
  }


  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 flex">
        <Formulario 
          pacientes={pacientes}
          paciente={paciente}
          setPacientes = {setPacientes}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
