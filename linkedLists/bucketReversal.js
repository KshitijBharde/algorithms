/**
 *
 * 1-2-3-4-5-6-7-8 just now
n= 3 just now
32165487 
*/


class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let list = [1, 2, 3, 4, 5, 6, 7, 8];

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next.next = new ListNode(7);
head.next.next.next.next.next.next.next = new ListNode(8);

function reverseKGroup(head, k) {
    if (!head || k === 1) return head;

    let dummy = new ListNode(0);
    dummy.next = head;

    let prevGroupEnd = dummy;
    let current = head;

    while (current) {
        // Check if there are at least k nodes left
        let count = 0;
        let node = current;
        while (node && count < k) {
            node = node.next;
            count++;
        }
        if (count < k) break;

        // Reverse k nodes
        let groupStart = current;
        let prev = null;
        for (let i = 0; i < k; i++) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        // Connect the reversed group to the rest of the list
        prevGroupEnd.next = prev;
        groupStart.next = current;
        prevGroupEnd = groupStart;
        console.log('x');
    }

    return dummy.next;
}


let newHead = reverseKGroup(head, 3);

let str = ''

while (newHead) {
    str += newHead.value;
    newHead = newHead.next;
}

console.log(str);