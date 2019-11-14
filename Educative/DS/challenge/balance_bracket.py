# Determine if Brackets are Balanced


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


def is_match(p1, p2):
    if p1 == "(" and p2 == ")":
        return True
    elif p1 == "{" and p2 == "}":
        return True
    elif p1 == "[" and p2 == "]":
        return True
    else:
        return False


def is_paren_balanced(paren_string):
    # Create new stack to store bracket
    my_stack = Stack()
    # set is balance to true
    is_balanced = True
    # index store starting position of the paren_string
    index = 0

    while index < len(paren_string) and is_balanced:
        paren = paren_string[index]

        if paren in "({[":
            my_stack.push(paren)
        else:
            if my_stack.is_empty():
                is_balanced = False
            else:
                last_pushed = my_stack.pop()
                if not is_match(last_pushed, paren):
                    is_balanced = False

        index += 1

    return my_stack.is_empty() and is_balanced


print("String : (((({})))) Balanced or not?")
print(is_paren_balanced("(((({}))))"))

print("String : [][]]] Balanced or not?")
print(is_paren_balanced("[][]]]"))

print("String : [][] Balanced or not?")
print(is_paren_balanced("[][]"))

print("String : ]}[] Balanced or not?")
print(is_paren_balanced("]}[]"))

print("String : (() Balanced or not?")
print(is_paren_balanced("(()"))
