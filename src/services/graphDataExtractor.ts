import { Gender, Person } from "@/datamodel";
import safe from "@/store/safe";

export function extractDataForGraphs() {
  const people = safe.getAllPeople();

  return {
    gender: extractGenderData(people),
    age: extractAgeData(people),
    eyeColor: extractEyeColorData(people),
    preferences: extractPreferencesData(people),
    country: extractCountryData(people),
  };
}

function extractGenderData(people: Person[]) {
  const gender: { [key: string]: Person[] } = {
    male: [],
    female: [],
  };

  let slot = "";
  for (const person of people) {
    if (person.gender < Gender.MALE) {
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

function extractPreferencesData(people: Person[]) {}
function extractCountryData(people: Person[]) {}
