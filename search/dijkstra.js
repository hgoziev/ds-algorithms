class Graph {
    constructor() {
        this.nodes = []
        this.adjacencyList = {}
    }
    addNode(node) {
        this.nodes.push(this.nodes)
        this.adjacencyList[node] = []
    }
    addEdge(node1, node2, weight) {
        this.adjacencyList[node1].push({ node: node2, weight })
        this.adjacencyList[node2].push({ node: node1, weight })
    }
    getList() {
        console.log("Adjacency: ", this.adjacencyList);
        console.log("Locations: ", this.nodes);
    }
}

const map = new Graph()
// const locations = ['Burger King', 'Cinema', 'Bar', 'Library', 'Steak House']
// const routes = [{ src: locations[0], dest: locations[1], distance: 6 },
// { src: locations[1], dest: locations[2], distance: 10 },
// { src: locations[2], dest: locations[3], dest: 3 }
// ]
// locations.forEach((location) => map.addNode(location))
// routes.forEach(({ src, dest, distance }) => map.addEdge(src, dest, distance))

map.addNode("Fullstack");
map.addNode("Starbucks")
map.addNode("DigInn")
map.addEdge("Fullstack", "Starbucks", 6);
map.addEdge("Fullstack", "DigInn", 7)
map.getList()