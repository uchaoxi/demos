export class Heap {
    constructor(heap) {
        this.heap = heap || [];
    }

    leftIndex(i) {
        return 2 * i + 1;
    }

    rightIndex(i) {
        return 2 * i + 2;
    }

    parentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    push(val) {
        this.heap.push(val);
        this.shiftUp(this.heap.length - 1);
    }


    shiftUp(i) {
        const pIndex = this.parentIndex(i);
        if (this.heap[pIndex] > this.heap[i]) {
            this.swap(pIndex, i);
            this.shiftUp(pIndex);
        }
    }

    pop() {
        const result = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.length = this.heap.length - 1;
        this.shiftDown(0);
        return result;
    }

    shiftDown(i) {
        let lIndex = this.leftIndex(i);
        let rIndex = this.rightIndex(i);

        let minIndex = -1;
        if (lIndex >= this.heap.length) {
            return;
        }
        if (rIndex >= this.heap.length) {
            minIndex = lIndex;
        } else {
            minIndex = this.heap[lIndex] < this.heap[rIndex] ? lIndex : rIndex;
        }

        if (this.heap[i] > this.heap[minIndex]) {
            this.swap(i, minIndex);
            this.shiftDown(minIndex);
        }
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

