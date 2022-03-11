function getSplitName(personName) {
    if ( personName > 2 ) {
    const splittedName = [first, middle, last] = personName.split(' ');
      return(splittedName);
    }
    else if (personName < 2 ) {
      const splittedName = [first, last] = personName.split(' ');
      return (splittedName);
    }
  }
  
  console.log(getSplitName("Aldi Daniela Pranata"))
  console.log(getSplitName("Dwi Kuncoro"))
  console.log(getSplitName("Aurora"))
  console.log(getSplitName("Aurora Aureliya Sukma Darma"))
  console.log(getSplitName(0))