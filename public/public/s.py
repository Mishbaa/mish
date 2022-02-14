import random 
l=[]
L=[]
d={}    
for i in range(1,46):
    if i%2==0:
        x="i1"
    if i%3==0:
        x="i2"
    else:
        x='i3'
    l.append(x)
    n="name"+str(i)
    l.append(n)
    pr="₹"+str(random.randrange(300,10000))
    l.append(pr)
    rating=float(random.randrange(1,5))
    l.append(rating)
    L.append(l)
    l=[]
    d[i]=l

print(L ,'\n\n\n\n', d)
