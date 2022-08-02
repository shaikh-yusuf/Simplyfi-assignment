const startingPoint = "kiev";

//The first path of the route would be starting point, which in this case is Kiev
const route = [startingPoint];

//The tickets son having
const availableTickets = {
  paris: "skopje",
  zurich: "amsterdam",
  prague: "zurich",
  barcelona: "berlin",
  kiev: "prague",
  skopje: "paris",
  amsterdam: "barcelona",
  berlin: "amsterdam",
  berlin: "kiev",
};

//The loop for run the same amount of time as tickets

for (let i = 0; i < Object.keys(availableTickets).length; i++) {
  // Your last stop of the route would be your current stop
  const currentStop = route[route.length - 1];
  // After getting the current I am finding the your next stop from available tickets
  const nextStop = availableTickets[currentStop];
  // Pushing it to the route
  route.push(nextStop);
  // If you reached to stop from your started you would break out of the loop
  if (startingPoint === nextStop) {
    break;
  }
}
console.log(route.join("-"));