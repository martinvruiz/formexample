import { useForm } from "react-hook-form";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(`Muchas gracias por registrarte, ${data.firstName}`);
    reset();
  };

  return (
    <div className="flex flex-col items-center my-8 w-3/4 md:w-2/4 bg-white rounded-2xl shadow-xl p-8">
      <h1 className="mb-6 text-xl md:text-3xl font-extrabold text-gray-900">
        Formulario de registro
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
        <div>
          <label
            className="block mb-2 text-sm font-semibold text-gray-700"
            htmlFor="firstName"
          >
            Nombre
          </label>
          <input
            id="firstName"
            type="text"
            {...register("firstName", { required: true })}
            className={`w-full p-3 border rounded-lg text-gray-900 placeholder-gray-400
          border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500
          ${errors.firstName ? "border-red-600" : ""}`}
            placeholder="Tu nombre"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-700">
              El nombre es requerido para registrarse.
            </p>
          )}
        </div>

        <div>
          <label
            className="block mb-2 text-sm font-semibold text-gray-700"
            htmlFor="lastName"
          >
            Apellido
          </label>
          <input
            id="lastName"
            type="text"
            {...register("lastName", { required: true })}
            className={`w-full p-3 border rounded-lg text-gray-900 placeholder-gray-400
          border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500
          ${errors.lastName ? "border-red-600" : ""}`}
            placeholder="Tu apellido"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-700">
              El apellido es requerido para registrarse.
            </p>
          )}
        </div>

        <div>
          <label
            className="block mb-2 text-sm font-semibold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "El email es requerido para registrarse.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingrese un mail válido.",
              },
            })}
            className={`w-full p-3 border rounded-lg text-gray-900 placeholder-gray-400
          border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500
          ${errors.email ? "border-red-600" : ""}`}
            placeholder="ejemplo@mail.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-700">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            className="block mb-2 text-sm font-semibold text-gray-700"
            htmlFor="gender"
          >
            Género
          </label>
          <select
            id="gender"
            {...register("gender", { required: true })}
            className={`w-full p-3 border rounded-lg text-gray-900
          border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500
          ${errors.gender ? "border-red-600" : ""}`}
          >
            <option value="">Seleccione...</option>
            <option value="femenino">Femenino</option>
            <option value="masculino">Masculino</option>
            <option value="otro">Otro</option>
          </select>
          {errors.gender && (
            <p className="mt-1 text-sm text-red-700">
              El género es requerido para registrarse.
            </p>
          )}
        </div>

        <div>
          <label
            className="block mb-2 text-sm font-semibold text-gray-700"
            htmlFor="age"
          >
            Edad
          </label>
          <input
            id="age"
            type="number"
            {...register("age", {
              min: { value: 18, message: "La edad mínima es 18 años." },
              required: "La edad es requerida para registrarse.",
            })}
            className={`w-full p-3 border rounded-lg text-gray-900 placeholder-gray-400
          border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500
          ${errors.age ? "border-red-600" : ""}`}
            placeholder="18"
            min={0}
          />
          {errors.age && (
            <p className="mt-1 text-sm text-red-700">{errors.age.message}</p>
          )}
        </div>

        <div className="pt-4 flex justify-center">
          <button
            type="submit"
            className="w-full max-w-xs py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
