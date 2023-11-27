let favtrnsp :  Array<[brand: string , transport: string]>= []
favtrnsp.push( ["ferrari", "Enzo" ])
favtrnsp.push( ["honda", "Bike" ])

favtrnsp.forEach(([brand , transport])=>{
    console.log(`I would like to own ${brand} ${transport}.`)
}
)