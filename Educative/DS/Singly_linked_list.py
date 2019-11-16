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

    def delete_node(self, value):
        # if head is None
        if self.head is None:
            return

        # if value matche head value
        if self.head.data == value:
            self.head = self.head.next
            return

        # if Node position is unknown
        current_node = self.head
        prev = None

        while current_node and current_node.data != value:
            prev = current_node
            current_node = current_node.next

        if current_node is None:
            print("Provided value does not exist")
            return

        prev.next = current_node.next

    def delete_node_at_pos(self, pos):
        if self.head is None:
            return

        if pos == 0:
            self.head = self.head.next
            return

        current_node = self.head
        prev = None
        counter = 0

        while current_node:
            if counter == pos:
                prev.next = current_node.next
                break
            prev = current_node
            current_node = current_node.next
            counter += 1

    def len_iterative(self):
        current_node = self.head
        count = 0

        while current_node:
            current_node = current_node.next
            count += 1

        return count

    def len_cursive(self, current_node=None):
        if current_node is None:
            return 0
        else:
            return 1 + self.len_cursive(current_node.next)

    def swap_nodes(self, value1, value2):
        if value1 == value2:
            return

        prev_1 = None
        curr_1 = self.head

        while curr_1 and curr_1.data != value1:
            prev_1 = curr_1
            curr_1 = curr_1.next

        prev_2 = None
        curr_2 = self.head

        while curr_2 and curr_2.data != value2:
            prev_2 = curr_2
            curr_2 = curr_2.next

        if not curr_1 or not curr_2:
            return

        if prev_1:
            prev_1.next = curr_2
        else:
            self.head = curr_2

        if prev_2:
            prev_2.next = curr_1
        else:
            self.head = curr_1

        curr_1.next, curr_2.next = curr_2.next, curr_1.next


my_list = LinkedList()
my_list.append("A")
my_list.append("B")
my_list.append("C")
my_list.append("D")

# my_list.prepend("Z")

# my_list.insert_after_node(my_list.head.next, "K")

# my_list.delete_node("Z")

# my_list.delete_node_at_pos(1)
# print(my_list.len_iterative())
# print(my_list.len_cursive(my_list.head))
my_list.swap_nodes(my_list.head.data, my_list.head.next.data)

my_list.print_list()
