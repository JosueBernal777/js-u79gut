//Componente tipo lista de objetos

export function getList(listId, dataArray) {
  let wrapper = document.getElementById(listId);
  for (let element of dataArray) {
    let data = document.createElement('div');
    data.className = 'item';
    data.style.backgroundImage = `url(${element.img})`;
    let title = document.createElement('h2');
    title.textContent = element.name;
    data.appendChild(title);
    wrapper.appendChild(data);
  }
}
