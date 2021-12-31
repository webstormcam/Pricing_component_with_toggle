let toggle = document.getElementById('toggle');
let basic = document.getElementById('basic');
let pro = document.getElementById('pro');
let master = document.getElementById('master');



function myFunction(){
   
    if(toggle.checked === true){
        console.log('TRUE')
       basic.innerHTML ='19.99'
       pro.innerHTML ='24.99'
       master.innerHTML ='39.99'
    } else{
        console.log('FALSE')
        basic.innerHTML ='199.99'
        pro.innerHTML ='249.99'
        master.innerHTML = '399.99'
    }
}