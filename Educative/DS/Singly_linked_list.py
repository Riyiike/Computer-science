class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = self.head

    def prepend(self, data):
        # First pass solution
        # new_node = Node(data)
        # new_node.next = self.head
        # self.head = new_node

        # Second pass solution
        self.head = Node(data, self.head)

    def append(self, data):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
            self.tail = new_node

            return

        last_node = self.head

        while last_node.next:  # O(n) linear time
            last_node = last_node.next

        last_node.next = new_node

        self.tail = new_node

    def insert_after_node(self, prev_node, data):
        if not prev_node:
            print("Provide previous node as an argument")
            return

        prev_node.next = Node(data, prev_node.next)

    def print_list(self):
        current_node = self.head

        while current_node:
            print(current_node.data)
            current_node = current_node.next


my_list = LinkedList()
my_list.append("A")
my_list.append("B")
my_list.append("C")
my_list.append("D")

my_list.prepend("Z")

my_list.insert_after_node(my_list.head.next, "K")

my_list.print_list()
