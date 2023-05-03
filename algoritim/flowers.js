function flowers(flowered, n) {
    for (let i = 0; n > 0 && i < flowered.length; i++) {
        if (!flowered[i] && !flowered[i - 1] && !flowered[i + 1]) {
            flowered[i] = 1;
            n--;
        }
    }
    return n == 0;
};
console.log(flowers([1, 0, 0, 0, 1], 1))