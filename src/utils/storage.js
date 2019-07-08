function initialStorage(){
  if (!get('characters')) {
    var characters = [];
    var stringfiedCharacters = JSON.stringify(characters)
    localStorage.setItem('characters' ,stringfiedCharacters);
  } else {
    return false;
  }
}

function get(key){
  if (localStorage.getItem(key) ) {
    return JSON.parse(localStorage.getItem(key))
  } else {
    // console.warn('No hay nada almacenado con esa key')
    return null;
  }
}

function save(name, obj){
  if (typeof obj === 'object') {
    localStorage.setItem(name, JSON.stringify(obj))
    // console.info('Object stored succcesfully!')
    return true;
  } else if (typeof obj === 'string' || typeof obj === 'number') {
  // console.info('item stored succesfully')
    localStorage.setItem(name, obj);
  } else {
  // console.warn('Item NOT stored')
    return false;
  }
}


export {initialStorage, get, save}
