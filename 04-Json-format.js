// Json format - we can use, When we want to transfor the data
// Front-end to back-end
// back-end to front-end

// Parsing: Converting a string to a native objectJSON.parse(text)
// Stringification: converting a native object to a string so it can be transmitted across the networkJSON.stringify(object)

//step-1 convert the Json Object into the string
let objectJson = {
  username: "Go Live",
  userage: "more than 18",
  usercity: "Raipur",
  userVillage: "Ulishss",
};

const convertedString = JSON.stringify(objectJson);
console.log(convertedString);

//step-2 convert the String into the object in javascript
const container = convertedString;

const convertedStringToObject = JSON.parse(container);
console.log(convertedStringToObject);
