var form=document.getElementById('addform');
var itemList=document.getElementById('items');

form.addEventListener('submit',addtask);
itemList.addEventListener('click',removetask);

var count=0;
function addtask(e){
    e.preventDefault();

    var item=document.getElementById('item').value;
    document.getElementById('item').value='';
    var li=document.createElement('li');
    var checkbox = document.createElement('input'); 
        checkbox.type = "checkbox"; 
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(item));
    
    var deleteBtn=document.createElement('button');
        deleteBtn.appendChild(document.createTextNode('X'));
        deleteBtn.className='delete';
        li.appendChild(deleteBtn);
         
        itemList.appendChild(li);

    document.getElementById('count').innerText=++count+' tasks left';
}

function removetask(e){
    var li=e.target.parentElement;
    if(e.target.classList.contains('delete')){
      itemList.removeChild(li);
      document.getElementById('count').innerText=--count+' tasks left';
    }
    else{
        if(e.target.checked){
            li.style.textDecoration="line-through";
            li.style.color="rgb(109, 17, 146)";
        }
        else{
            li.style.textDecoration="none";
            li.style.color="#2f4f4f";
        }
    }
}