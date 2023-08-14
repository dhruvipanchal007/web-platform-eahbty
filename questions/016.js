// Sample list of phone numbers
const phoneNumbers = ['1234567890', '9876543210', '5551234567', '9998887777'];

// Predefined format: (XXX) XXX-XXXX
function formatPhoneNumber(phoneNumber) {
  // 1234567890
  // x = phoneNumber.slice(0, 3)
  // y = 456
  // z = 7890
  return `(${x}) ${y}-${z}`;
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6)}`;
}

// Function to format all phone numbers in the list
function formatAllPhoneNumbers(phoneNumbers) {
  // phoneNumber = 123345567890
  const formattedNumbers = [];

  for (const number of phoneNumbers) {
    const formattedNumber = formatPhoneNumber(number); // fn =
    formattedNumbers.push(formattedNumber); // [ "(XXX) ", "", "", "" ]
  }

  return formattedNumbers;
}

// Format all phone numbers
const formattedPhoneNumbers = formatAllPhoneNumbers(phoneNumbers);

// Display the formatted phone numbers
console.log('Formatted phone numbers:');
formattedPhoneNumbers.forEach((number) => {
  console.log(number);
});
