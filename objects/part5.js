function Greeter(first_name, last_name) {
  const full_name = `${first_name} ${last_name}`;

  return function (otherName) {
    console.log(`Hi, ${otherName}! I'm ${full_name}`);
  };
}

const greetAsGuille = Greeter("Guillermo", "Gutierrez");
greetAsGuille("Javier");

