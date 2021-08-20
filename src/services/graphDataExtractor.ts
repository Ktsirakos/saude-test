import { Gender, Person } from "@/datamodel";
import { RootState, State } from "@/store";
import safe from "@/store/safe";
import { Store } from "vuex";

export function extractDataForGraphs(): {
  gender: { [key: string]: Person[] };
  age: { [key: string]: Person[] };
  eyeColor: { [key: string]: Person[] };
  preferences: { [key: string]: { [key: string]: any } };
} {
  const people = safe.getAllPeople();

  return {
    gender: extractGenderData(people),
    age: extractAgeData(people),
    eyeColor: extractEyeColorData(people),
    preferences: extractPreferencesData(people),
    // country: extractCountryData(people),
  };
}

function extractGenderData(people: Person[]) {
  const gender: { [key: string]: Person[] } = {
    male: [],
    female: [],
  };

  let slot = "";
  for (const person of people) {
    if (person.gender === Gender.MALE) {
      slot = "male";
    } else {
      slot = "female";
    }

    gender[slot].push(person);
  }

  return gender;
}

function extractAgeData(people: Person[]) {
  const ages: { [key: string]: Person[] } = {
    "<20": [],
    "21-25": [],
    "26-30": [],
    "31+": [],
  };

  let slot = "";
  for (const person of people) {
    if (person.age < 20) {
      slot = "<20";
    } else if (person.age > 20 && person.age < 26) {
      slot = "21-25";
    } else if (person.age >= 26 && person.age < 31) {
      slot = "26-30";
    } else {
      slot = "31+";
    }

    ages[slot].push(person);
  }

  return ages;
}

function extractEyeColorData(people: Person[]) {
  const eyeColor: { [key: string]: Person[] } = {};

  for (const person of people) {
    if (eyeColor[person.eyeColor]) {
      eyeColor[person.eyeColor].push(person);
    } else {
      eyeColor[person.eyeColor] = [];
      eyeColor[person.eyeColor].push(person);
    }
  }

  return eyeColor;
}

function extractPreferencesData(people: Person[]) {
  // {
  //   "_id": "5d5d7ad6e25b8df776d4ed00",
  //   "age": 40,
  //   "eyeColor": "blue",
  //   "name": "Tamra Carver",
  //   "gender": "female",
  //   "location": {
  //     "latitude": -31.147883,
  //     "longitude": 142.260584
  //   },
  //   "preferences": {
  //     "pet": "dog",
  //     "fruit": "mango"
  //   }
  // },

  const preferences: { [key: string]: { [key: string]: any[] } } = {};

  //Getting available key options
  const preferencesArray: string[] = people
    .map((elem) => elem.preferences)
    .map((elem) => Object.keys(elem))
    .reduce((previousValue, currentValue) => {
      return [...previousValue, ...currentValue];
    })
    .filter((v, i, array) => array.indexOf(v) === i);

  //For every key option we retrieve available entries
  for (const preferenceKey of preferencesArray) {
    preferences[preferenceKey] = {};

    const availableOptions = people
      .map((elem) => elem.preferences)
      .map((elem) => elem[preferenceKey])
      .filter((v, i, array) => array.indexOf(v) === i);

    for (const option of availableOptions) {
      preferences[preferenceKey][option] = [];
    }
  }

  //Fill datasets with persons according to their preferences
  for (const person of people) {
    for (const preferenceOption of Object.keys(person.preferences)) {
      preferences[preferenceOption][person.preferences[preferenceOption]].push(
        person
      );
    }
  }
  return preferences;
}
// function extractCountryData(people: Person[]) {}
