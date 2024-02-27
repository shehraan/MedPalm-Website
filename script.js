function getId(id) {
    return document.getElementById(id);
  }
  function nextImg(id, newImage) {
    getId(id).src = newImage
  }
  /**
   * Toggles a button given the id
   ***/
  function toggleButton(id) {
    const button = getId(id);
    if (button.disabled === true) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }
  
  function describe(id) {
    const r = getId(id);
    r.innerHTML = r.innerHTML + 'Bangladeshi fisherman feeding his otters while they catch fish for him in Narail.';
  }
  
  //Creates image function
  