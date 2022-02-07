function trial() {
    let x;
    window.y = 0;
    x = window.y;
    x++;
    return x;
  }
  trial();
  console.log(typeof x);
  console.log(typeof window.y);