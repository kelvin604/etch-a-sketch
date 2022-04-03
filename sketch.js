const container = document.querySelector('.container');
const restart = document.querySelector('#restart');


for(let i = 0; i < 512; i++){
    let div = document.createElement('div');
    div.textContent = 'o';
    div.addEventListener("mouseover", function(e){
        e.target.style.color = 'red';
        
        setTimeout(function(){
            e.target.style.color = '';
        }, 5000);
    });
    
    
    container.appendChild(div); 
}

restart.addEventListener('click', ()=>{
    container.textContent= ''
    let num = prompt('How many square per row?');
    container.style.setProperty('grid-template-columns', `repeat(${num}, 1fr)`)
    for(let i = 0; i < num * num; i++){
        let div = document.createElement('div');
        div.textContent = 'o';
        div.addEventListener("mouseover", function(e){
            e.target.style.color = 'red';
            setTimeout(function(){
                e.target.style.color = '';
            }, 5000);
        });
        
        
        container.appendChild(div); 
    }
});