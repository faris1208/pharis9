// const button = document.getElementById('button');
// const rectangle = document.getElementById('rectangle');
// // const rectangleh3 = document.getElementById('rectangleh3');


// const changerectanglecolor = function() {
//     rectangle.style.backgroundColor = 'white';
//     rectangle.style.width = '80%';
//     rectangle.style.color = 'black';
//     rectangle.style.height = '200px';

//     if(backgroundColor === 'white'){
//         rectangle.style.backgroundColor = 'black';
//         rectangle.style.width = '80%';
//         rectangle.style.color = 'white';
//     }else{
//         rectangle.style.backgroundColor = 'black';
//         rectangle.style.width = '50%';
//         rectangle.style.color = 'white';
//     }
    
// };
// button.addEventListener('click',changerectanglecolor);





const button =document.getElementById('button');

button.addEventListener('click', function onClick(event){
    const rectangle = document.getElementById('rectangle');
    const backgroundcolor = rectangle.style.backgroundColor; 
    // const width = rectangle.style.width; 
    // const color = rectangle.style.color; 
    // const height = rectangle.style.height; 
    
    if(backgroundcolor =='white'){
        // rectangle.style.backgroundColor='black';
             rectangle.style.backgroundColor = 'black';
            rectangle.style.width = '80%';
            rectangle.style.color = 'white';
            rectangle.style.height = '150px';
    }else{
            rectangle.style.backgroundColor='white';
            rectangle.style.width = '60%';
            rectangle.style.color = 'black';
            rectangle.style.height = '150px';
    }
})