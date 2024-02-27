
from tinker import *
def click():
    global count
    count+=1
    print(count)

window = Tk()

button = Button(window,
                text="click me!",
                command=click,
                font=("Comic Sans",30),
                fg="#00FF00",
                bg="black",
                activeforeground="#00FF00",
                activebackground="black",
                state=ACTIVE,
                compound='bottom')
button.pack()