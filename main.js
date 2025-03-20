let leftBox = document.getElementById('left')
let rightBox = document.getElementById('right')
let Lists = document.getElementsByClassName('list')
console.log(Lists);

for(list of Lists){
    list.addEventListener('dragstart',(e)=>{
        let selected = e.target;
    
        rightBox.addEventListener('dragover',(e)=>{
            e.preventDefault();
        })
        rightBox.addEventListener('drop',()=>{
            if(selected){
                rightBox.appendChild(selected)
                selected = null;
            }
        })
        leftBox.addEventListener('dragover',(e)=>{
            e.preventDefault();
        })
        leftBox.addEventListener('drop',()=>{
            if(selected){
                leftBox.appendChild(selected)
                selected = null;
            }
        })
    })
}