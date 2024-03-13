import Greeting from "../molecules/greeting";
import Greet from "../molecules/greet";
import Button from "../molecules/button";
import InputField from "../molecules/input-field";
import Form from "../molecules/form";
import Farewell from "../molecules/farewell";
import GreetingMessage from "../molecules/greeting-message";
import UserList from "../molecules/user-list";

function App() {
  const handleGreet = () => {};

  const users = ['sergio', 'gutierrez']

  return (
    <>
      <Greeting>
        <Greet />
        <Button />
        <InputField />
        <Form onGreet={handleGreet}/>
      </Greeting>
      <Farewell name={'sergio'}/>
      <GreetingMessage timeOfDay={'morning'}/>
      <UserList users={users}/>
    </>
  );
}

export default App;
