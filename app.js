const cardDistribution = (cardHolders) => {
  const holdersList = [...cardHolders];

  // creating an array
  const cardNumberResult = [];

  // getting each data using loop
  holdersList.forEach((singleHolder, index) => {
    let { district, birthYear, currentYear, postNo, priority } = singleHolder;

    // converting to string
    district = district.toString();
    birthYear = birthYear.toString();
    currentYear = currentYear.toString();
    postNo = postNo.toString();
    priority = priority.toString();

    // creating user object
    const cardUser = {};

    // generating card number
    let cardNumber = `${district.slice(0, 2).toUpperCase()}${currentYear.slice(
      currentYear.length - 2
    )}${postNo.slice(0, 2)}${birthYear}`;

    cardNumber = cardNumber.padEnd(15, 0);
    cardNumber = `${cardNumber}${index + 1}`;
    cardUser.cardNumber = cardNumber;
    if (parseInt(cardNumber.slice(cardNumber.length - 1)) % 2 === 0) {
      cardUser.gift = "R";
    } else {
      cardUser.gift = "W";
    }
    cardUser.priority = priority;
    cardNumberResult.push(cardUser);
  });

  // sorting out based on priority
  return cardNumberResult.sort(
    (object1, object2) => object1.priority - object2.priority
  );
};

// given example of the task
let example = [
  {
    name: "Mr Rashed",
    birthYear: 1999,
    currentYear: 2022,
    district: "dhaka",
    postNo: "1200",
    priority: 2,
  },
  {
    name: "Mr Raju",
    birthYear: 1995,
    currentYear: 2022,
    district: "Rajshahi",
    postNo: "1211",
    priority: 1,
  },
  //   {
  //     name: "Mr Raju",
  //     birthYear: 1995,
  //     currentYear: 2022,
  //     district: "Khulna",
  //     postNo: "1211",
  //     priority: 3,
  //   },
];

// Running Function cardDistribution
// ‘cardDistribution()’
console.log(cardDistribution(example));
