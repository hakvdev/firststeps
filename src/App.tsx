import { SetStateAction, useState } from "react";

function Texto() {
  const [texto, setTexto] = useState("");
  const leerTexto = (event: { target: { value: SetStateAction<string> } }) => {
    setTexto(event.target.value);
  };

  const limpiar = () => {
    setTexto("");
  };

  return (
    <>
      <input type="text" value={texto} onChange={leerTexto} />
      <p>Aquí estará tu texto: {texto}</p>
      <button onClick={limpiar}>Limpiar</button>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const clickeo = () => {
    setCount(count + 1);
  };

  const reiniciar = () => {
    setCount(0);
  };

  return (
    <>
      <br></br>
      <button onClick={clickeo}>Hiciste click {count} veces</button>
      <button onClick={reiniciar}>Reiniciar</button>
      <br></br>
    </>
  );
}

function MyButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <button onClick={handleClick}>
        {isActive ? "Estoy activo" : "Me desactivaste!"}
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Bienvenido a mi aplicación</h1>
      <MyButton />
      <Counter />
      <Texto />
    </>
  );
}

export default App;
