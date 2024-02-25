// Den has invited some friends. His list is:
//
// s = "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
//
// Could you make a program that
// · makes this string uppercase
// · gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
// So the result of function meeting(s) will be:
// Examples:
//
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
//
//
// It can happen that in two distinct families with the same family name two people have the same first name too.

function meetingNames(s: string): string {
  let guestNames = s.toUpperCase().split(";");

  let sortedGuestNames = guestNames.map(guestName => {
    let [firstName, lastName] = guestName.split(":");
    return `(${lastName}, ${firstName})`;
  }).sort();

  return sortedGuestNames.join("");
}

console.log("-------------- Task 5 --------------")

let nameList = "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
console.log(meetingNames(nameList));
