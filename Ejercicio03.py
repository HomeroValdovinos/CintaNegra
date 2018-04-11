list_1 = [1, 6, 11, 5]
list_2 = []

restcount = 0

for item1 in list_1:
    restcount -= restcount(item1-1) + 1
print(restcount)
