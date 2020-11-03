import vars from '../vendor/_vars';

let counter = 0;
let delay = 6000;

const data = [
    {
        title: 'Title of Product 1',
        where: 'Moscow, Russia'
    },
    {
        title: 'Title of Product 2',
        where: 'kiev, Ukraine'
    },
    {
        title: 'Title of Product 3',
        where: 'Minsk, Belarus'
    },
]

const closeMarketing = () => {
    vars.$marketing.classList.remove('marketing--visible');
}

const changeMarketingData = () => {
    vars.$marketing.classList.remove('marketing--visible');

    setTimeout(() => {
        vars.$marketing.classList.add('marketing--visible');
    }, delay - 4500);

    const stringTitle = `${data[counter].title}`;
    const stringWhere = `15 minutes ago ${data[counter].where}`;

    vars.$marketing.querySelector('.marketing__title').textContent = stringTitle;
    vars.$marketing.querySelector('.marketing__suptitle').textContent = stringWhere;

    counter++;

    if (counter === data.length){
        counter = 0;
    }
}

changeMarketingData();

setInterval(changeMarketingData, delay);

vars.$marketing.addEventListener('click', (e) =>{
    if (e.target.classList.contains('marketing__close')){
        closeMarketing();
    }
})