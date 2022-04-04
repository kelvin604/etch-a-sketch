const container = document.querySelector('.container');
const restart = document.querySelector('#restart');


for(let i = 0; i < 512; i++){
    let div = document.createElement('div');
    div.addEventListener("mouseover", function(e){
        e.target.style.backgroundColor = 'black';
        
        setTimeout(function(){
            e.target.style.color = '';
        }, 5000);
    });
    
    
    container.appendChild(div); 
}

restart.addEventListener('click', ()=>{
    
    let num = prompt('How many square per row?');
    if(num > 100){
        return;
    }
    container.textContent= ''
    container.style.setProperty('grid-template-columns', `repeat(${num}, 1fr)`)
    for(let i = 0; i < num * num; i++){
        let div = document.createElement('div');
        div.addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = 'black';
            setTimeout(function(){
                e.target.style.color = '';
            }, 5000);
        });
        
        
        container.appendChild(div); 
    }
});