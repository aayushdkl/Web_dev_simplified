const selec1 = document.querySelectorAll('button')
console.log(selec1.dataset)

// selec1.dataset.test = "4444"
// let con_array = Array.from(selec1)
selec1.forEach(element => {
    element.addEventListener('click',() => {
        element.dataset.test ++;
        let no_of_clicks = element.dataset.test;
        console.log(no_of_clicks)
        if (no_of_clicks==5) {
            element.style.color = "blue";
        }
    })
    
});