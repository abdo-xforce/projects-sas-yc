let colors = ["red","blue","green","black","white"]

console.log("simple for loop")
for(let i=0;i<colors.length;i++)
  console.log(colors[i])

console.log("forof loop")
for(let color of colors)
  console.log(color)

console.log("for in loop")
for(let index in colors)
  console.log(index,colors[index])