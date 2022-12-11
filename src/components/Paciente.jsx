import React from "react";
import Swal from "sweetalert2";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    Swal.fire({
      title: "¿Quieres Eliminar?",
      showDenyButton: true,
      confirmButtonText: "Eliminar",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "", "success");
        eliminarPaciente(id);
      }
    });
  };

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:<span className="font-normal normal-case"> {nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietarop:
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Correo:<span className="font-normal normal-case"> {email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Ingreso:<span className="font-normal normal-case">{fecha} </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:
        <span className="font-normal normal-case"> {sintomas}</span>
      </p>
      <div className="flex justify-between">
        <button
          className="py-2 px-10 bg-red-700 cursor-pointer hover:bg-red-900 text-white font-bold rounded-lg"
          type="button"
          onClick={() => {
            return setPaciente(paciente);
          }}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-blue-700 cursor-pointer hover:bg-blue-900 text-white font-bold rounded-lg"
          type="button"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
