const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)

for (const placeholder of placeholders){
    //console.log(placeholder)
    placeholder.addEventListener('dragover',dragover)
    placeholder.addEventListener('dragenter',dragenter)
    placeholder.addEventListener('dragleave',dragleave)
    placeholder.addEventListener('drop',dragdrop)
}

function dragstart (event) {
    //console.log('dragstart',event.target) //best way
    //console.log('dragstart',this)
    //console.log('dragstart',event.target)
    event.target.classList.add('hold')
    setTimeout(()=>event.target.classList.add('hide'),0)
    //event.target.classList.add('hide')
}

function dragend (event){
    //console.log('dragend')
    //event.target.classList.remove('hold')
    //event.target.classList.remove('hide')
    event.target.className = 'item';
}

function dragover (event) {
    event.preventDefault()
    //console.log('dragover')
}

function dragenter (event) {
    event.target.classList.add('hovered')
    //console.log('dragenter')
}

function dragleave (event) {
    event.target.classList.remove('hovered')
    //console.log('dragleave')
}

function dragdrop (event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
    //console.log('dragdrop')
}

