function sortSentence(sentence) {
    sentence = sentence.split(" ").sort((a, b) => {
        return a[a.length - 1] - b[b.length - 1]
    })
    return sentence.join(" ").replaceAll(/[0-9]/g, "")
};
console.log(sortSentence('love2 I1'));