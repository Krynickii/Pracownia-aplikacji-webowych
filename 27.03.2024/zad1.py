def is_wk(word):
    w = 0
    k = 0
    for c in word:
        if c== 'w':
            w += 1
        elif c == 'k':
            k += 1
    return w == k
print(is_wk)

file = open("C:\\Users\student\Desktop\slowa.txt")
output = open("C:\\Users\student\Desktop\zad4_1.txt", "w")
for line in file:
    if is_wk(line):
        output.write(line)