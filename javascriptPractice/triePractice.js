//TODO trie practice

class TrieNode {
  constructor(key = null) {
    this.key = key;
    this.children = {};
    this.end = false;
  }
}

var Trie = function () {
  this.root = new TrieNode();
};

Trie.prototype.add = function (word) {
  let node = this.root;

  for (const char of word) {
    if (!node.children[char]) {
      node.children[char] = new TrieNode(char);
      node.children[char].parent = node;
    }
    node = node.children[char];
  }

  node.end = true;
  return word;
};

Trie.prototype.lookup = function (word) {
  let node = this.root;

  for (const char of word) {
    if (node.children[char]) {
      node = node.children[char];
    } else {
      return false;
    }
  }

  return node.end;
};
