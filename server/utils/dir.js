const directoryTree = require("directory-tree");

process.on("message", message => {
    const directoryPath = message.dir;
    const originalTree = directoryTree(directoryPath);
    const filteredTree = filterTree(originalTree);
    process.send(filteredTree)
})

const excludeDirs = ["node_modules", ".git"];
function filterTree(tree) {
    if (tree.children) {
        tree.children = tree.children
            .filter(child => !excludeDirs.includes(child.name))
            .map(child => filterTree(child));
        tree.isFolder = true; // add isFolder: true property to folder nodes
    } else {
        tree.isFolder = false; // add isFolder: false property to file nodes
    }
    return tree;
}