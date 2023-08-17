function Queue() {
	let endNode = null;
	let startNode = null;

	function enqueue(value) {

		const newNode = Node(value, null);

		if (endNode == null && startNode == null) {
			startNode = newNode
			endNode = newNode
			// endNode & startNode == newNode;

		} else {
			// if there is already a startNode(queue) - what should happen to newNode ?
			// should the newNode become the endNode...
			// newNode.setNextNode(endNode);
			endNode.setNextNode(newNode)
			endNode = newNode

		}
	}

	function dequeue() {
		// return a value
		if (startNode) {
	console.log('HI');
	console.log(startNode);
			const dequeueValue = startNode.getValue();
			// take the value of the the stack
			const newNode = startNode.getNextNode();
			startNode = newNode;
			return dequeueValue;

		}
		console.log('Bye');
	}
	return {
		enqueue,
		dequeue
	}
}

// const queue = Queue();

// queue.enqueue("Andre")
// queue.enqueue("Busi");

// console.log(queue.dequeue())  -- Andre
// console.log(queue.dequeue())  -- Busi