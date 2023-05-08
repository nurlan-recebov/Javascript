function strStr(haystack, needle) {
    const c1 = haystack.length
    const c2 = needle.length
    for (let i = 0; i <= c1 - c2; i++) {
        if (haystack.substring(i, i + c2) === needle)
            return i;
    }

    return -1
};

console.log("sadbutsad")