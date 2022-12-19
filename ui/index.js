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

const createUserArticle = userData => {
    // Container
    const userArticle = document.createElement('article');
    // Title
    const title = document.createElement('h2');
    title.textContent = userData.githubUsername;

    // Button to open Data
    const openButton = document.createElement('button');
    openButton.innerText = 'open';
    openButton.addEventListener('click', () => getUserById(userData._id));

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteButton.addEventListener('click', () =>
        console.log('this will delete')
    );

    // Add all to article
    userArticle.appendChild(title);
    userArticle.appendChild(openButton);
    userArticle.appendChild(deleteButton);

    userArticle.id = userData._id;
    return userArticle;
};

const getAllUsers = async () => {
    allUsersOutput.innerHTML = '';
    const response = await (await fetch('http://localhost:3000')).json();
    const allUsers = response.map(user => createUserArticle(user));
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
