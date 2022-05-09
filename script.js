let Arr=['adv.jpg','adv1.jpg','adv2.jpg','adv3.png','adv4.jpg','adv5.jpeg','adv6.png'];
let image = document.querySelector('#images');
 let i=0;
 let time=document.querySelector('#time');
 let k=0
 let l=0.5
 let h1=document.querySelector('h1');
 let reng=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


function deyis(){
    let n='#'
   
    for(let i=0;i<6;i++){
let k=Math.floor(Math.random()*reng.length)
n+=reng[k]

}
console.log(n);
    h1.style.color=n
image.src=Arr[i]
k=0
console.log(i);
i++
if(i==7){
    i=0
}
}

function deyis2(){
    let n='#'
   
    for(let i=0;i<6;i++){
let k=Math.floor(Math.random()*reng.length)
n+=reng[k]

}
console.log(n);
    h1.style.color=n
    i--
    if(i==-1){
        i=6
    }
   
    image.src=Arr[i]
    k=0
    console.log(i);
    
    }


 
    setInterval(()=>{
        image.src=Arr[i]
        k=0
                i++
                console.log(i);
                if(i==7){
                   i=0
                    }
                   
               
    },10000)


$(function(){
    $(' button').on('click', function(){
        console.log($(this).text());
        image.src=Arr[$(this).text()]
        k=0
        let n='#'
   
        for(let i=0;i<6;i++){
 let k=Math.floor(Math.random()*reng.length)
 n+=reng[k]
 
    }
    console.log(n);
        h1.style.color=n
    })
})



function times(){


    
    if(k<1248){
        k+=l
    }
    else{
        k=0
    }
    time.style.width=`${k}px`
    // console.log(k);
     }
    setInterval(times,1.248)





