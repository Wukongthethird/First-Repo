let address = "1.1.1.1"

var defangIPaddr = function(address) {
  // the regex did not alter the original string
  return address.replace(/\./g, '[.]' );
};

console.log(defangIPaddr(address))