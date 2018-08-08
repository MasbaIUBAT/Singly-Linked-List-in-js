class Node{
 constructor(value){
   this.value = value;
   this.next;
 }
}

class LinkedList {
 constructor(head) {
   this.head = head;
 }
 add(newNode){
    var currentNode = this.head;
    while(currentNode.next != undefined){
       currentNode = currentNode.next;
     }
     currentNode.next = newNode;
 }
}
var head= new Node("We");
var manobBondon = new LinkedList(head);

var Want = new Node("Want");
manobBondon.add(Want);

var justice = new Node("justice");
manobBondon.add(justice);

var R_jeno_kno = new Node("R_jeno_kno");
manobBondon.add(R_jeno_kno);

var ma_ear = new Node("ma_ear");
manobBondon.add(ma_ear);

var kol_khai_na = new Node("kol_khai_na");
manobBondon.add(kol_khai_na);

var hoi = new Node("hoi");
manobBondon.add(hoi);

console.log(manobBondon);
