function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

const magicians: string[] = ['Merlin', 'David Copperfield', 'Houdini', 'Dynamo'];

show_magicians(magicians);
