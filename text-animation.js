var i = 0
var txt = '1111 3333 4444 5555' /* The text */
var speed = 500 /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('demotext').innerHTML += txt.charAt(i)
    i++
    setTimeout(typeWriter, speed)
  }
}
typeWriter()
var j = 0
var date = '10/2025' /* The text */
var speed2 = 500 /* The speed/duration of the effect in milliseconds */

function typeWriter2() {
  if (j < date.length) {
    document.getElementById('demotextdate').innerHTML += date.charAt(j)
    j++
    setTimeout(typeWriter2, speed2)
  }
}
setTimeout(typeWriter2(),8000 )
