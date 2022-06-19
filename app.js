let squares = [];
let arrlength;

    let timeout = 1000;
function myFun(){
    let inputVal = document.getElementById('numbers_input').value;
    const myArray = inputVal.split(",");
    arrlength = myArray.length;
    let grid = document.querySelector('.num-holder');
    for(let i = 0 ; i < arrlength ; i++){
        let piller = document.createElement('div');
        piller.setAttribute('id' , "num-"+ i);
    //    piller.style.background = "red";
       piller.style.border= "border 1px solid black";
       piller.style.height = "50px"
       piller.style.width = "10px"
        piller.innerHTML = myArray[i];
        // piller.style.backgroundColor =  "green";
        grid.append(piller);
        squares.push(piller);
    }
}
let idx = 0;
let j = 0;
function bubble_sort(){
    // for(let i = 0 ; i < arrlength; i++){
        // for(let j = 0 ; j< (squares.length - idx -1 ); j ++ ){
            if(j >= squares.length-1){
                j = 0 ;
            }
            // setTimeout(()=>{
                console.log(squares[j].innerHTML)
                if(parseInt(squares[j].innerHTML) > parseInt(squares[j+1].innerHTML)){
                    console.log("after")
                    if(j > 0 ){
                        squares[j-1].classList.remove('exchange')
                        squares[j].classList.remove('exchange')
                        // j++;
                    }
                    squares[j].classList.add('exchange')
                    squares[j+1].classList.add('exchange')
                    // setTimeout(()=>{
                        let temp = squares[j].innerHTML
                        console.log(typeof(temp));
                        squares[j].innerHTML = squares[j+1].innerHTML
                        squares[j+1].innerHTML = temp
                    // }, 1000)
                    // if(j === squares.length - idx - 2 ){
                    //     setTimeout(() => {
                    //         squares[j].classList.remove('exchange')
                    //         squares[j+1].classList.remove('exchange')
                    //     }, 2000)
                    //     j++;
                    // }
                }
                j++;
            }
        //     , timeout)
        //     timeout += 2000;
        // // }
        // idx++;
       
        
    // }



//bubble_sort() 
