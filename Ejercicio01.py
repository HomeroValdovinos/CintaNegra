s = "abcabccbb"
# s = "baseoedkbasjedje"

list_1 = []

for item1 in s:
    if item1 not in list_1:
        list_1.append(item1)
final_string = ''.join(list_1)

print("This is list_2", final_string)
print("Length of the string: ", len(final_string))

