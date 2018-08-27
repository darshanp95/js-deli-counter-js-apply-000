function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)

  var indexOfName = katzDeliLine.indexOf(name)
  var normalIndex = indexOfName + 1 
  console.log(normalIndex)

  return `Welcome, ${name}. You are number ${normalIndex} in line.`
}

function nowServing(array) {
  if(array.length !== 0) {
  var firstPersonInLine = array.shift()
  return `Currently serving ${firstPersonInLine}.`
  
  } else {
    return "There is nobody waiting to be served!"
  }
  
  return array
}


function currentLine(array) {
  if (array.length !== 0) {
   var i;

   for (i=0;i<array.length;i++) {

     var normalIndex = i + 1

     return `The line is currently: ${normalIndex}. ${array[i]}`

   }


  } else {
    return "The line is currently empty."
  }
}