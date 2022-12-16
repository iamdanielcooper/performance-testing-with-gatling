const getAllUsersButton = document.getElementById('getAllUsersButton');
const allUsersOutput = document.getElementById('allUsersOutput');
const howAreYouButton = document.getElementById('howAreYou');
const userDetailsOutput = document.getElementById('userDetailsOutput');

const addUserForm = document.getElementById('addUserForm');

const getUserById = async userId => {
    const response = await (
        await fetch(`http://localhost:3000/${userId}`)
    ).json();
    userDetailsOutput.innerText = JSON.stringify(response);
};

const createUserButton = userData => {
    const userButton = document.createElement('button');
    userButton.id = userData._id;
    userButton.innerText = userData.githubUsername;
    userButton.addEventListener('click', () => getUserById(userData._id));
    return userButton;
};

const getAllUsers = async () => {
    allUsersOutput.innerHTML = '';
    const response = await (await fetch('http://localhost:3000')).json();
    const allUsers = response.map(user => createUserButton(user));
    allUsers.forEach(user => allUsersOutput.append(user));
};

const addUser = async e => {
    e.preventDefault();
    const name = document.getElementById('userName').value;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name }), // body data type must match "Content-Type" header
    };

    await fetch('http://localhost:3000/add', options);
};

getAllUsersButton.addEventListener('click', getAllUsers);
addUserForm.addEventListener('submit', addUser);
