function hashStringToInt(str, tableSize) {
  let hash = 17;
  for(let i=0; i<str.length; i++) {
    hash = (13 * hash * str.charCodeAt(i)) % tableSize
  }
  return hash;

}

class HashTable {

  table = new Array(3);
  numItems = 0;
  resize = () => {
    const newTable = new Array(this.table.length*2);
    this.table.forEach(item => {
      if(item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if(newTable[idx]){
            newTable[idx].push([key, value])
          } else {
            newTable[idx] = [[key, value]];
      
          }
        })
      }
    })
    this.table = newTable
  }

  setItem = (key, value) => {

    this.numItems++;
    // 항목의 갯수를 테이블의 길이로 나눈값이 80%에 가까워질수록 테이블의 길이를 늘리면
    // 성능적으로 훨씬 유리하기 때문에 (분산 또한 용이하다.)
    const loadFactor = this.numItems / this.table.length;
    if(loadFactor > .8) {
      //80프로 이상이면 Resize
      this.resize()
    }
    const idx = hashStringToInt(key, this.table.length)
    if(this.table[idx]){
      this.table[idx].push([key, value])
    } else {
      this.table[idx] = [[key, value]];

    }
  }

  //key 를 주고 value 반환
  getItem = (key) => {
      const idx = hashStringToInt(key, this.table.length)
      if(!this.table[idx]) {
        return null
      }
      return this.table[idx].find(x => x[0] === key)[1];
  }
}


const myTable = new HashTable();
myTable.setItem('firstName', 'bob');
myTable.setItem('lastName', 'tim');
console.log(myTable.table.length)
myTable.setItem('age', 5);
myTable.setItem('dob', '1/2/3');
console.log(myTable.getItem('firstName'))
console.log(myTable.getItem('lastName'))
console.log(myTable.getItem('age'))
console.log(myTable.getItem('dob'))
console.log(myTable.table[0])
console.log(myTable.table.length)