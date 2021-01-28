
function getFullname(firstname, surname, useFormalName) {
    const fullName = (`${firstname} ${surname}`);
    return useFormalName ? 'Lord ' + fullName : fullName;
  }
  const fullname1 = getFullname("Mantasha", "Zahra", false);
  console.log(fullname1);
  document.write(fullname1);
  const fullname2 = getFullname("Ashtar", "Abbas", true);
  console.log(fullname2);
  document.write(fullname2);