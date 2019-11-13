# Implement basic Stack data structure


class Stack:
    def __init__(self):
        self._storage = {}
        self._length = 0

    def push(self, data):
        if data is not None:
            self._storage[self._length] = data
            self._length += 1

            return self._length

    def pop(self):
        if self._length >= 0:
            removed_item = self._storage[self._length - 1]
            del self._storage[self._length - 1]

            self._length -= 1

            return removed_item

    def size(self):
        return self._length

    def get_stack(self):
        return self._storage

    def is_empty(self):
        return self._storage == {}

    def peek(self):
        if not self.is_empty():
            return self._storage[self._length - 1]


myStack = Stack()
myStack.push("A")
myStack.push("B")
print(myStack.get_stack())
myStack.push("C")
print(myStack.get_stack())
myStack.pop()
print(myStack.get_stack())
print(myStack.is_empty())
print(myStack.peek())
