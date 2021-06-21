const projects = [
    {
        title: 'Weather forecast for the next five days',
        description: 'Going on that camping trip tomorrow? Planning some quality time on the beach? With this tool you&#39;ll know whether you should bring your coat or your sunglasses. You can see the average temperature five days upfront.',
        image: 'assets/img/placeholder-img.svg',
        projectFilter: ['Web app', 'Web development']
    },
    {
        title: 'Blackjack',
        description: 'Creating the card game Blackjack was a fun project to learn object oriented programming in Javascript and PHP. It was a playful way to deal with classes, objects, methods, inheritances, etc.',
        image: 'assets/img/placeholder-img.svg',
        projectFilter: ['Web app']
    },
    {
        title: 'Pokédex',
        description: 'Working on this Pokédex brought back the memories of being hooked in front of the television watching the adventures of Ash and Pikachu. You can enter a name or the ID of a Pokémon to get more information about it.',
        image: 'assets/img/placeholder-img.svg',
        projectFilter: ['Web app', 'Web development']
    },
    {
        title: 'Sporting MXM brand identity',
        description: 'A new local soccer club established was in need of a fresh logo to get recognized more easily. They play on amateur level since their main goal is to have fun while keeping their body fit.',
        image: 'assets/img/placeholder-img.svg',
        projectFilter: ['Graphic design', 'Logo design', 'Branding']
    },
    {
        title: 'Revived brand identity',
        description: 'Clothes that aren\'t worn out deserve a new life rather than just being thrown away. Revived is a brand created to give secondhand clothes a new home by selling them online.',
        image: 'assets/img/placeholder-img.svg',
        projectFilter: ['Graphic design', 'Logo design', 'Branding']
    },
];

document.querySelector('.projectFilter').innerHTML = projects[0].projectFilter.join(' &#8226; ');
document.querySelector('.projectTitle').innerHTML = projects[0].title;
document.querySelector('.projectDescription').innerHTML = projects[0].description;
document.querySelector('.projectImg').src = projects[0].image;

let getProjectReelBtnWrapper = document.getElementById('projectReelBtns');
let getProjectReelBtns = getProjectReelBtnWrapper.getElementsByClassName('projectReelBtn');
for (let i = 0; i < getProjectReelBtns.length; i++){
    getProjectReelBtns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

function getProjectContent(clickedBtn) {
    let getBtnId = clickedBtn.id.substr(7);
    const projectTitle = document.querySelector('.projectTitle');
    const projectDescription = document.querySelector('.projectDescription');
    const projectImg = document.querySelector('.projectImg');
    const projectFilter = document.querySelector('.projectFilter');
    projectTitle.innerHTML = projects[getBtnId].title;
    projectDescription.innerHTML = projects[getBtnId].description;
    projectImg.src = projects[getBtnId].image;
    document.querySelector('.projectFilter').innerHTML = projects[getBtnId].projectFilter.join(' &#8226; ');
}