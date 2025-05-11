document.addEventListener('DOMContentLoaded', function () { 
    const accordItem = document.querySelectorAll('.accord__item');
    
    accordItem.forEach( e => {
        e.addEventListener('click', accordDetails);
    });


    function accordDetails() {
       accordItem.forEach( e => {
            const details = e.parentNode;
            if (details != this.parentNode) {
                details.removeAttribute('open');
            };
       });
    }
}); 
