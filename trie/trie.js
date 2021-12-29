// Creation :
// O(n ** 2) time | O(n ** 2) space
// Search:   
//O(length of string) time | O(1)space

class TrieNode {
    constructor(key) {
        this.key = key
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode('')
    }
    insert(word) {
        let current = this.root
        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode(char)
            }
            current = current.children[char]
        }
        current.isEndOfWord = true
    }
    has(word) {
        let current = this.root
        for (const char of word) {
            if (!current.children[char]) return false
            current = current.children[char]
        }
        return current.isEndOfWord
    }
    find(word) {
        let current = this.root
        let output = ''

        for (const char of word) {
            if (!current.children[char]) return false
            current = current.children[char]
            output += current.key
        }
        console.log(output);
        return output
    }
}

const trie = new Trie();

// insert few words
trie.insert("CAT");
trie.insert("DOG");

// search something
trie.has("MAT") // false
trie.has("DOG") // true
trie.find('DOG')
