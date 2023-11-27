// List of current and new usernames
let currentusers: string[] = ['Alice', 'Bob', 'John', 'Eva', 'Grace'];
let new_users: string[] = ['john', 'Sarah', 'Charlie', 'Alice', 'Mike'];

// Convert existing usernames to lowercase for case-insensitive comparison
let currentUsersLower = currentusers.map(user => user.toLowerCase());

// Loop through new_users list for availability
for (let new_user of new_users) {
    let new_user_lower = new_user.toLowerCase();
    if (currentUsersLower.includes(new_user_lower)) {
        console.log(`The username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}
