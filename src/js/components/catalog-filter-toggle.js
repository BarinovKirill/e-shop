import vars from '../vendor/_vars';

vars.$catalogFiltersTop.forEach(el =>{
    el.addEventListener('click', (e) =>{
        e.currentTarget.closest('.catalog-filter').classList.toggle('catalog-filter--open');
    });
})

vars.$hideFilters.addEventListener('click', (e) =>{
    vars.$catalogFiltersTop.forEach(el =>{
        el.closest('.catalog-filter').classList.remove('catalog-filter--open');
        console.log('123');
    });  
});

const createChoiceItem = (text) => {
    return(
        `
        <buttton class="btn-reset catalog-choice__item">
            <span>${text}</span>
            <svg>
                <use xlink:href=img/sprite.svg#choice-close></use>
            </svg>
        </buttton>
        `
    )
}

vars.$catalogFilterItems.forEach(el => {
    el.querySelector('input').addEventListener('change', (e) =>{
        let checked = el.querySelector('input').checked;

        if (checked) {
            el.querySelector('.custom-checkbox').classList.add('custom-checkbox--active');
            let text = el.querySelector('.custom-checkbox__text').textContent;

            vars.$catalogChoice.insertAdjacentHTML('afterbegin', createChoiceItem(text));
            
        }else {
            el.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active')
        }

        let activeCheckboxes = document.querySelectorAll('.custom-checkbox--active');

        if(activeCheckboxes.length > 0) {
            vars.$catalogChoice.style.display = 'block';
            console.log('asdasasdasd');
        } else {
            vars.$catalogChoice.style.display = 'none';
        }
    });
});

vars.$catalogChoice.addEventListener('click', (e) => {
    if (e.target.classList.contains('catalog-choice__item')) {
        e.target.remove();
    }

    if (e.currentTarget.children.length === 1) {
        e.currentTarget.style.display = 'none';
    }
});