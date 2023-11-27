let Guestlist2 :  Array<string>= 
[
"Ambreen",
"Zainab",
"Abdulah",
"Hafsa",
"Baby",

]
Guestlist2.forEach((guestname)=>{
     console.log(`Dear ${guestname}, you are invited to dinner.`)
 }
 )

let guestcant: string = "Ambreen"
console.log(`${guestcant} can't make it to dinner`);

let newguest: string = "Zulkaif"
let indexofguestcant: number = Guestlist2.indexOf(guestcant)

if (indexofguestcant !== -1) {
    Guestlist2[indexofguestcant]= newguest
}
Guestlist2.forEach((guest: string)=>{
    console.log(`Dear ${guest}, you are invited to dinner.`)
})
export{Guestlist2}