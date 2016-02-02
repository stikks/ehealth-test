//Depth First Search  is an algorithm for traversing or searching tree or graph data structures. 
//One starts at the root (selecting some arbitrary node as the root in the case of a graph) and explores as far as possible along each branch before backtracking.
//There are three approaches to this; the pre-order which selects the most left node as the start, the in-order which starts with the node between the most left node and right node as the root node,
// and the post-order which is basically a mirror of the pre-order; most right node as root node. 
// Below is an implementation of DFS using an adjacency list ast the input graph. 

// updating the array prototype
Array.prototype.diff = function(a) {
    return this.filter(function(i) {
    	return a.indexOf(i) == -1;
   	});
};

// sample adjacency lists
var graph_matrix = { 0: [1, 6, 8],
  1: [0, 4, 6, 9],
  2: [4, 6],
  3: [4, 5, 8],
  4: [1, 2, 3, 5, 9],
  5: [3, 4],
  6: [0, 1, 2],
  7: [8, 9],
  8: [0, 3, 7],
  9: [1, 4, 7] 
}

var graph =  {'A': ['B', 'C'], 'B': ['A', 'D', 'E'], 'C': ['A', 'F'], 'D': ['B'], 'E': ['B', 'F'], 'F': ['C', 'E']}

var dfs = function(matrix, start, visited) {
	if (visited == null) {
    visited = []
  }
  visited.push(start)
  var difference = matrix[start].diff(visited)
	for (i=0; i < difference.length; i++) {
    dfs(matrix, difference[i], visited)
	}
  return visited
}

dfs(graph, "D")