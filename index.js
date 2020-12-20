// DATA
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

const adjacenyList = new Map();

function addNode(airport) {
  adjacenyList.set(airport, []);
}

function addEdge(origin, destination) {
  adjacenyList.get(origin).push(destination);
  adjacenyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

// console.log(adjacenyList);

function bfs(start) {
  const visited = new Set();

  const queue = [start];

  while (queue.length > 0) {
    const airport = queue.shift(); // here mutates the queue
    const destinations = adjacenyList.get(airport);
    for (const destination of destinations) {
      if (destination === "BKK") {
        console.log("Got it!");
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
    console.log(queue);
  }
}

// bfs("PHX");

function dfs(start, visited = new Set()) {
  console.log(start);
  visited.add(start);
  let steps = 1;

  const destinations = adjacenyList.get(start);
  for (const destination of destinations) {
    steps++;
    if (destination === "BKK") {
      console.log(`DFS found it in ${steps} steps`);

      return;
    }
    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

dfs("PHX");
