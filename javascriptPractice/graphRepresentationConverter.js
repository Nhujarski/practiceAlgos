// // TODO review graphs

// /*
// '''
// ❓ PROMPT
// Create a class that takes a vertex/edge list of a directed graph in the constructor. Suppose the inputted nodes are arbitrary strings.

// Have 2 public methods:

// (Map<string, int>, Array<Array<int>>) GraphConverter::getAsAdjacencyMatrix()

// Return a tuple where the first value is a mapping to a row number, and the
// second value is the VxV size matrix.

// Map<string, List<string>> GraphConverter::getAsAdjacencyList()

// Return a mapping from node ID to neighboring node IDs.

// Example(s)
// Suppose we have the following vertex list and edge list:
// vertexList = ["n1", "n2", "n3"]
// edgeList = [("n1", "n2")]

// getAsAdjacencyList() should return
// {
//   "n1": ["n2"],
//   "n2": [],
//   "n3": [],
// }

// getAsAdjacencyMatrix() should return a tuple with the following values.

// First value (IDs can be arbitrarily assigned in any order):
// {
//   "n1": 0,
//   "n2": 1,
//   "n3": 2,
// }

// Second value:
// [
//   [0, 1, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ]

// 🔎 EXPLORE
// State your assumptions & discoveries:

// Create examples & test cases:

// 🧠 BRAINSTORM
// What approaches could work? Consider data structures or algorithmic patterns.
// Analyze the space & time complexity.
// Approach 1:
// Time: O()
// Space: O()

// 📆 PLAN
// High-level outline of approach #:

// 🛠️ IMPLEMENT
// GraphConverter::getAsAdjacencyMatrix()
// GraphConverter::getAsAdjacencyList()

// 🧪 VERIFY
// Run your examples & test cases.
// Methodically analyze and debug issue(s).

// '''

// getAsAdjacencyMatrix
// Loop through all the nodes and assign an arbitrary ID. From there, build out an NxN matrix of 0's and 1's.
// getAsAdjacencyList
// This should be a fairly simple iteration over all the vertices/edges.

// */
// // TODO convert this to JS

// let registered_node_ids = new Set()

// class Node(object){
//   constructor( id){
//     if (id in registered_node_ids){
//       registered_node_ids.add(id)
//       this.id = id
//       this.neighbors = []
//     }

//   }

//    __repr_(this)){
//      return this.id.toString()
//    }

// def connect(start, end, two_way_connection=False):
//   start.neighbors.append(end)
//   if two_way_connection:
//     end.neighbors.append(start)

// def print_as_vertex_and_edge_list(nodes):
//   print ("~~~~~~VERTEX & EDGE LIST~~~~~~")
//   vertices = [n.id for n in nodes]
//   edges = []
//   for start in nodes:
//     for end in start.neighbors:
//       edges.append((start.id, end.id))

//   print("""vertices: {}
// edges: {}
//   """.format(str(vertices), str(edges)))

//  print_as_adjacency_matrix(nodes):
//   print ("~~~~~~ADJACENCY MATRIX~~~~~~")
//   node_id_to_index_mapping = {}
//   for i, node in enumerate(nodes):
//     node_id_to_index_mapping[node.id] = i

//   print("""Node ID to row index in matrix: {}
//   """.format(str(node_id_to_index_mapping)))
//   N = len(nodes)

//   matrix = [[0 for _ in range(N)] for _ in range(N)]

//   for node in nodes:
//     id = node.id
//     row_index = node_id_to_index_mapping[id]
//     row = matrix[row_index]
//     for neighbor in node.neighbors:
//       neighbor_id = neighbor.id
//       neighbor_index = node_id_to_index_mapping[neighbor_id]
//       row[neighbor_index] = 1

//   print("Adjacency Matrix:")
//   for row in matrix:
//     print(row)

// def print_as_adjacency_list(nodes):
//   print ("~~~~~~ADJACENCY LIST~~~~~~")
//   adjacency_list = {}
//   for n in nodes:
//     adjacency_list[n.id] = []

//   for node in nodes:
//     for neighbor in node.neighbors:
//       adjacency_list[node.id].append(neighbor.id)

//   for k, v in adjacency_list.items():
//     print(k, v)
// }
