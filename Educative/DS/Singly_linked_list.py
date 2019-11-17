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
        # if values are the same
        if value1 == value2:
            return

        prev_1 = None
        current_1 = self.head

        # Cycle over linkedlist
        while current_1 and current_1.data != value1:
            prev_1 = current_1
            current_1 = current_1.next

        prev_2 = None
        current_2 = self.head

        while current_2 and current_2.data != value2:
            prev_2 = current_2
            current_2 = current_2.next

        if not current_1 or not current_2:
            return

        if prev_1:
            prev_1.next = current_2
        else:
            self.head = current_2

        if prev_2:
            prev_2.next = current_1
        else:
            self.head = current_1

        current_1.next, current_2.next = current_2.next, current_1.next

    def reverse_iterative(self):
        prev = None
        current_node = self.head

        while current_node:
            # get next node
            next_node = current_node.next
            # set current node next to it's previous node
            current_node.next = prev
            # set previous to current node
            prev = current_node
            # set current node to equals next node
            current_node = next_node

        self.head = prev

    def reverse_recursive(self):
        def _reverse_recursive(current, prev):
            if not current:
                return prev

            next_node = current.next
            current.next = prev
            prev = current
            current = next_node

            return _reverse_recursive(current, prev)

        self.head = _reverse_recursive(current=self.head, prev=None)

    def merge_sorted(self, new_list):
        first_list = self.head
        second_list = new_list.head
        node_with_smaller_value = None

        if not first_list:
            return second_list

        if not second_list:
            return first_list

        if first_list.data <= second_list.data:
            node_with_smaller_value = first_list
            first_list = node_with_smaller_value.next
        else:
            node_with_smaller_value = second_list
            second_list = node_with_smaller_value.next

        new_head = node_with_smaller_value

        while first_list and second_list:
            if first_list.data <= second_list.data:
                node_with_smaller_value.next = first_list
                node_with_smaller_value = first_list
                first_list = node_with_smaller_value.next
            else:
                node_with_smaller_value.next = second_list
                node_with_smaller_value = second_list
                second_list = node_with_smaller_value.next

        if not first_list:
            node_with_smaller_value.next = second_list
        if not second_list:
            node_with_smaller_value.next = first_list

        return new_head


# my_list = LinkedList()
# my_list.append("A")
# my_list.append("B")
# my_list.append("C")
# my_list.append("D")

# my_list.prepend("Z")

# my_list.insert_after_node(my_list.head.next, "K")

# my_list.delete_node("Z")

# my_list.delete_node_at_pos(1)
# print(my_list.len_iterative())
# print(my_list.len_cursive(my_list.head))
# my_list.swap_nodes(my_list.head.data, my_list.head.next.data)
# my_list.reverse_iterative()
# my_list.reverse_recursive()

my_list1 = LinkedList()
my_list2 = LinkedList()

my_list1.append(1)
my_list1.append(5)
my_list1.append(7)
my_list1.append(9)
my_list1.append(10)

my_list2.append(2)
my_list2.append(3)
my_list2.append(4)
my_list2.append(6)
my_list2.append(8)

my_list1.merge_sorted(my_list2)

my_list1.print_list()
