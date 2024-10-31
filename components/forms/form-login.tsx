import React from "react";

const FormLogin = () => {
  return (
    <div className="w-1/2 h-1/2 m-auto bg-gray-300 p-4">
      <div className="text-3xl font-bold">FormLogin</div>
      <form action="" className="flex flex-col p-4 space-y-4">

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ingrese su Email</span>
          </div>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Escriba aqui"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="label">
            <span className="label-text-alt">Error</span>
          </div>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Escriba aqui"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="label">
            <span className="label-text-alt">Error</span>
          </div>
        </label>

        <button className="btn btn-primary">Ingresar</button>
      </form>
    </div>
  );
};

export default FormLogin;
