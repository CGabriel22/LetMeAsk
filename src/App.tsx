import { Button, ButtonPlus } from "./components/Button";

function App() {
  return (
    <div>
      <Button text="botão 1" />
      <Button numb={1} />
      <Button> Olá mundo </Button>
      <ButtonPlus />
    </div>
  );
}

export default App;
