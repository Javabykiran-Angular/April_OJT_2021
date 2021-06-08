//Rest Parameter Function

function add(...item:number[]){
    for (let i = 0; i < item.length; i++) {
        console.log(item[i]);        
    }
}

add(10,12,13,14,15);
add();