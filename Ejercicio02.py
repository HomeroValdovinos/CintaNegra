s = [1, 3, 4, 10, 4, 6, 8, 11, 30]

full_dict = {}
duplicados = []

for item1 in s:
    if item1 not in full_dict:
        full_dict[item1] = 1
    else:
        if full_dict[item1] == 1:
            duplicados.append(item1)
            full_dict[item1] += 1

print(duplicados)

