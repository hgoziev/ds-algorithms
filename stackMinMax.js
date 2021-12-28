class StackMinMax {
    stack = []
    min = []
    max = []
    peek() {
        return this.stack[this.stack.length - 1]
    }

    pop() {
        return this.stack.pop()
    }

    push(number) {
        if (number > this.min[this.min.length - 1]) {
            let temp = this.min[this.min.length - 1]
            this.min[this.min.length - 1] = number
            this.min.push(temp)
        } else {
            this.min.push(number)
        }

        if (number < this.max[this.max.length - 1]) {
            let temp = this.max[this.max.length - 1]
            this.max[this.max.length - 1] = number
            this.max.push(temp)
        } else {
            this.max.push(number)
        }

        this.stack.push(number)

    }

    getMin() {
        return this.min[this.min.length - 1]
    }

    getMax() {
        return this.max[this.max.length - 1]
    }
}


const stack = new StackMinMax()

stack.push(5)
stack.push(7)
stack.push(2)
stack.pop()
console.log(stack.getMin());
console.log(stack.getMax());
console.log(stack.peek());