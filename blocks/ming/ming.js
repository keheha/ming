export function decorate(block) {
    const col1 = block.querySelector(':scope > div > div');
    const col2 = block.querySelector(':scope > div > div[2]');

    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    li1.innerText = col1;
    li1.className= ming;
    ul.append(li1);
    const li2 = document.createElement('li');
    li2.innerText = col2;
    li2.className= ming;
    ul.append(li2);
    
    block.textContent = '';
    block.append(ul);
}