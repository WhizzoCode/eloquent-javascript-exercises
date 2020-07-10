/**
 * # Iterable groups
 * 
 * Make the Group class from the previous exercise iterable. Refer to the
 * section about the iterator interface earlier in the chapter if you aren’t
 * clear on the exact form of the interface anymore.
 * 
 * If you used an array to represent the group’s members, don’t just return the
 * iterator created by calling the Symbol.iterator method on the array. That
 * would work, but it defeats the purpose of this exercise.
 * 
 * It is okay if your iterator behaves strangely when the group is modified
 * during iteration.
 */

class Group {
  
  constructor() {
    this.collection = [];
  }

  add(element) {
    if (!this.has(element)) this.collection.push(element);
  }

  delete(element) {
    this.collection = this.collection.filter(current => element !== current);
  }

  has (element) {
    return this.collection.includes(element);
  }

  static from(object) {
    let g = new Group();
    object.forEach(objElement => g.add(objElement));
    return g;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }

}

class GroupIterator {

  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.collection.length) return {done: true}
    let value = this.group.collection[this.position];
    this.position++;
    return {value, done: false};
  }

}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
