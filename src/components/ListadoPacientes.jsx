import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  console.log(pacientes);
  return (
    <>
      {pacientes && pacientes.length ? (
        <>
          <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-auto">
            <h2 className="text-center text-3xl font-black">
              Listado de Pacientes
            </h2>
            <p className="text-xl mt-5 mb-4 text-center">
              Administra tus
              <span className="text-indigo-600"> Paciente y Clientes</span>
            </p>

            {pacientes.map((paciente, index) => {
              return (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-auto">
            <h2 className="text-center text-3xl font-black">
              No hay pacientes
            </h2>
            <p className="text-xl mt-5 mb-4 text-center">
              Comienza agregando pacientes
              <span className="text-indigo-600"> Paciente y Clientes</span>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default ListadoPacientes;
