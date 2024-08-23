let names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"]
function printWithDashes(a){
    console.log("_____\n" + a + "\n_____");
    
}
names.forEach(printWithDashes)

function printWithHearts(a){
    console.log("<3<3<3<3 " + a +" <3<3<3<3")
}
names.forEach(printWithHearts)

function printWithIndex(a, i){
    console.log(i + " - " + a)
}
names.forEach(printWithIndex)