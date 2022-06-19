function myFun(){
    let inputVal = document.getElementById('numbers_input').value;
    const myArray = inputVal.split(",");
    let grid = document.querySelector('.num-holder');
    let timeout = 1000
    let pillers = []
    for(let i = 0 ; i < myArray.length ; i++){
        let piller = document.createElement('div')
        piller.setAttribute('id' , "num"+ i);
        piller.innerHTML = myArray[i];
        grid.append(piller);
        pillers.push(piller);
    }
    let next = document.createElement('button');
    next.innerHTML = "next";
    next.setAttribute('id' , "sort-btn");
    grid.append(next);
}
function bubble_sort(){
    for(let i = 0 ; i < 9; i++){
        for(let j = 0 ; j< (squares.length - i -1 ); j ++ ){
            // setTimeout(()=>{
                if(parseInt(squares[j].innerHTML) > parseInt(squares[j+1].innerHTML)){
                    if(j > 0 ){
                        squares[j-1].classList.remove('exchange')
                        squares[j + 1 - 1].classList.remove('exchange')
                    }
                    squares[j].classList.add('exchange')
                    squares[j+1].classList.add('exchange')
                    setTimeout(()=>{
                        let temp = squares[j].innerHTML
                        squares[j].innerHTML = squares[j+1].innerHTML
                        squares[j+1].innerHTML = temp
                    }, 1000)
                    if(j === squares.length - i - 2 ){
                        setTimeout(() => {
                            squares[j].classList.remove('exchange')
                            squares[j+1].classList.remove('exchange')
                        }, 2000)
                    }
                }
            }
            // , timeout)
            timeout += 2000;
        }
    }
// }
//bubble_sort()
