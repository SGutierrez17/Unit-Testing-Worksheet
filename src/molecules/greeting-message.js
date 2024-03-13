
export default function GreetingMessage ({ timeOfDay }) {
  return (
    <div>
      {timeOfDay === 'morning' ? 'Buenos días' : 'Buenas noches'}
    </div>
  );
};

