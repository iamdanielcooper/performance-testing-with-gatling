const helloWorldButton = document.getElementById('helloWorld');
const howAreYouButton = document.getElementById('howAreYou');

const getHelloWorld = async () => {
    const response = await fetch('http://localhost:3000');
    console.log(response);
};

helloWorldButton.addEventListener('click', getHelloWorld);
