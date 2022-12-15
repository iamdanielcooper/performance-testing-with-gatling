const getAllUsersButton = document.getElementById('getAllUsersButton');
const allUsersOutput = document.getElementById('allUsersOutput');
const howAreYouButton = document.getElementById('howAreYou');

const addUserForm = document.getElementById('addUserForm');

const getAllUsers = async () => {
    const response = await (await fetch('http://localhost:3000')).json();
    allUsersOutput.innerText = JSON.stringify(response);
};

const addUser = async e => {
    e.preventDefault();
    await fetch('http://localhost:3000/add');
};

getAllUsersButton.addEventListener('click', getAllUsers);
addUserForm.addEventListener('click', addUser);
