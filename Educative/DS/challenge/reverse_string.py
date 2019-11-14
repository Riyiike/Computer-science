# Reverse String
def reverse_string_v2(string):
    return string[::-1]


def reverse_string(string):
    my_stack = []
    reverse_string = ""

    for char in string:
        my_stack.append(char)

    while len(my_stack):
        reverse_string += my_stack.pop()

    return reverse_string


input_str = "!evitacudE ot emocleW"
print(reverse_string(input_str))
print(reverse_string_v2(input_str))
