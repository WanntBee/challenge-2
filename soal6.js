function getAngkaTerbesarKedua(dataAngka) {
    let max = -Infinity, result = -Infinity;
  
    for (const value of dataAngka) {
      const nr = Number(value)
  
      if (nr > max) {
        [result, max] = [max, nr] // save previous max
      } else if (nr < max && nr > result) {
        result = nr; // new second biggest
      }
    }
  
    return result;
  }
  
  const dataAngka = [9,4,7,7,4,3,2,2,8];
  
  console.log(getAngkaTerbesarKedua(dataAngka));
  console.log(getAngkaTerbesarKedua(0));
  console.log(getAngkaTerbesarKedua());
  
  