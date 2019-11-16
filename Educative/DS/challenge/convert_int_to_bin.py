from Stack import Stack


def convert_int_to_bin(dec_num):
    # result = []
    # remainder = dec_num // 2

    # while remainder > 0:
    #     if len(result) == 0:
    #         result.append(dec_num % 2)
    #     else:
    #         result.append(remainder % 2)

    #     remainder = remainder // 2

    # return result

    s = Stack()
    binary_num = ""

    while dec_num > 0:
        remainder = dec_num % 2
        s.push(remainder)
        dec_num = dec_num // 2

        binary_num = str(s.pop()) + binary_num

    return binary_num


print(convert_int_to_bin(53))


def convert_int_to_bin_v2(dec_num):
    return bin(dec_num)[2:]


print(convert_int_to_bin_v2(53))
