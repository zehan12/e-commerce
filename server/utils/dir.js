const R = require("ramda")
const directoryTree = require('directory-tree');

const excludeDirs = ['node_modules', '.git'];

const filterTreeWithRamda = R.curry((excludeDirs, tree) =>
    R.ifElse(
        R.propEq('children', undefined),
        R.assoc('isFolder', false),
        R.pipe(
            R.over(
                R.lensProp('children'),
                R.pipe(
                    R.reject(R.propSatisfies(R.includes(R.__, excludeDirs), 'name')),
                    R.map(filterTree(excludeDirs))
                )
            ),
            R.assoc('isFolder', true)
        )
    )(tree)
);

process.on('message', message => {
    const directoryPath = message.dir;
    const originalTree = directoryTree(directoryPath);
    const filteredTree = filterTreeWithRamda(excludeDirs, originalTree);
    process.send(filteredTree);
});


// process.on("message", message => {
//     const directoryPath = message.dir;
//     const originalTree = directoryTree(directoryPath);
//     const filteredTree = filterTree(originalTree);
//     process.send(filteredTree)
// })

// const excludeDirs = ["node_modules", ".git"];

// function filterTree(tree) {
//     if (tree.children) {
//         tree.children = tree.children
//             .filter(child => !excludeDirs.includes(child.name))
//             .map(child => filterTree(child));
//         tree.isFolder = true; // add isFolder: true property to folder nodes
//     } else {
//         tree.isFolder = false; // add isFolder: false property to file nodes
//     }
//     return tree;
// }


