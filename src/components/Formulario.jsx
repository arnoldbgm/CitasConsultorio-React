import { useState, useEffect } from "react";
import Swal from "sweetalert2";
const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      // console.log(paciente)
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const handleChange = (e) => {
    setNombre(e.target.value);
    // console.log(nombre)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Campo incompleto",
      });
    } else {
      console.log("No hay campos vacios");
    }

    // Introducimos un object
    const ObjectPacientes = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      // id: generarId(),
    };

    if (paciente.id) {
      ObjectPacientes.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? ObjectPacientes : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      if ((nombre, propietario, email, fecha, sintomas)) {
        ObjectPacientes.id = generarId();
        setPacientes([...pacientes, ObjectPacientes]);
      }
    }

    setNombre("");
    setFecha("");
    setSintomas("");
    setPropietario("");
    setEmail("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-4">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 ">Administradores</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-5 py-10"
      >
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 font-bold">
            Nombre Mascota 🐶
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 rounded-lg"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 font-bold"
          >
            Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 rounded-lg"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 font-bold">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email Propietario"
            className="border-2 w-full p-2 mt-2 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 font-bold">
            Fecha de Alta
          </label>
          <input
            id="email"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-lg"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 rounded-lg"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="w-full bg-indigo-700 p-3 rounded-lg text-white uppercase font-bold hover:bg-indigo-900 cursor-pointer"
          value={!paciente.nombre ? "Agregar Paciente" : "Editar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
