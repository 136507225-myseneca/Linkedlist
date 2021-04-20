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

  insertAfter(value, afterValue) {
    const existingnode = this.find(afterValue)
    if (existingnode) {
      const Newnode = { value: value, next: existingnode.next }
      existingnode.next = Newnode
    }
  }

  find(value) {
    if (!this.head) {
      return null
    }
    let curNode = this.head
    while (curNode) {
      if (curNode.value === value) {
        return curNode
      }
      curNode = curNode.next
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

  delete(value) {
    if (!this.head) {
      return
    }
    while (this.head && this.head.value === value) {
      this.head = this.head.next
    }
    let curNode = this.head

    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next
      } else {
        curNode = curNode.next
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode
    }
  }
}
const List1 = new Linkedlsit()

List1.append(1)
List1.append('a')
List1.append(0.23)
List1.append('New Car')
List1.prepend('Car')
List1.prepend('New Value')
console.log(List1.toArray())
List1.delete('a')
List1.delete('New Car')
List1.delete('New Value')
List1.insertAfter(0.21, 0.23)
console.log(List1.toArray())
