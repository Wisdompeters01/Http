const os = require("os")

console.log(os.homedir())
console.log(os.hostname())
let getAdd = os.networkInterfaces() 
let x = []
for(let el in getAdd ){
    x.push(getAdd[el])

}


console.log(x[0][1].address)
const myOwn = os.cpus()
const result =myOwn[0].model.split(" ")[2].split("-")[0].split("")[1]
console.log(result)


const myArch = os.arch()
console.log(myArch)

const total = os.totalmem()
const getGb =Math.floor(total /1000000000/2)
console.log(getGb)

if(result >= "3" && myArch ==="x64" && getGb>= 4){
    console.log("welcome to CodeLab")
}else{
    console.log("go and get a new laptop")
}


/**classwork : write a condition that checks if a new intake's laptop matches the condition set by CodeLab
 * 
 * the laptop must have the following the:
 * A: model must be i3 and above 
 * B: the laptop arch must be x64 and above 
 * C: and the laptop must be 4 totalmen and above
 * 
 */
