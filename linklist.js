class Linkedlsit {
  constructor() {
    this.head = null
    this.tail = null
  }
  append(value) {
    const Newnode = { value: value, next: null }

    if (this.tail) {
      this.tail.next = Newnode
    }
    this.tail = Newnode
    if (!this.head) {
      this.head = Newnode
    }
  }
  prepend(value) {
    const Newnode = { value: value, next: this.head }
    this.head = Newnode
    if (!this.tail) {
      this.tail = Newnode
    }
  }

  toArray() {
    const content = []
    let curNode = this.head
    while (curNode) {
      content.push(curNode)
      curNode = curNode.next
    }
    return content
  }
}
const List1 = new Linkedlsit()

List1.append(1)
List1.append('a')
List1.append(0.23)
List1.append('New Car')
List1.prepend('New Value')
console.log(List1.toArray())
