const btnAbout = document.getElementById('btn-about')
const btnStudy = document.getElementById('btn-study')
const btnHobby = document.getElementById('btn-hobby')


const customAlert = (message) => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.append(overlay);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    overlay.append(contentDiv);

    const messageH3 = document.createElement('h3');
    messageH3.textContent = message;
    contentDiv.append(messageH3);

    const closeButton = document.createElement('button');
    closeButton.className = 'closeBtn';
    closeButton.textContent = 'nice';
    contentDiv.append(closeButton);

    closeButton.addEventListener('click', () => {
        overlay.remove();
    })

     overlay.addEventListener('click', (event) =>{
        if (event.target.className === 'overlay'){
            overlay.remove();
        }
    })
}


const hobbies = [
    {title: 'cook'},
    {title: 'draw'},
    {title:'music'}
];




btnAbout.addEventListener('click', () => {
     customAlert('my name is Polina, Im 17. my birth 5 september 2008. i have a dog and 4 cats.')
})
btnStudy.addEventListener('click', () => {
    customAlert('Im study in Compass College on IT and product desing depatment')
})