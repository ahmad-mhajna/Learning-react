function Exercises() {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const sum = number1 + number2;
  const string = "I love React!";
  return (
    <div>
      <p>
        {data[0]} {data[1]}
      </p>
      <p>
        {number1}+{number2}={sum}
      </p>
      <p>{string}</p>
    </div>
  );
}

export default Exercises;
