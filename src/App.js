import Greeting from "./greeting";
import Greet from "./greet";
import Button from "./button";
import InputField from "./input-field";
import Form from "./form";


function App() {
  const handleGreet = () => {};

  return (
      <Greeting>
        <Greet />
        <Button />
        <InputField />
        <Form onGreet={handleGreet}/>
      </Greeting>
  );
}

export default App;
