class Graph(dict):
    def __init__(self, vs=[], es=[]):
        """Create a new graph. (vs) is a list of vertices;
            (es) is a list of edges."""
        self.vs = vs
        self.es = es

        for v in vs:
            self.add_vertex(v)

        for e in es:
            self.add_edge(v)

    def add_vertex(self, v):
        """add (v) to the graph"""
        self[v] = {}

    def add_edge(self, e):
        """add (e) to the graph by adding an entry in both directories."""
        self[e] = {}


print(Graph(vs=[2, 4, 5], es=[10, 3, 4, 5]))
