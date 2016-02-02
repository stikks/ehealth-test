// sample adjacency lists
Array.prototype.diff = function(a) {
    return this.filter(function(i) {
      return a.indexOf(i) == -1;
    });
};

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


describe("Depth First Search", function() {
  it("should compute a depth first search and return a result", function() {
    expect(dfs(graph, "D")).toEqual(["D", "B", "A", "C", "F", "E"]);
  });
});