class FileSystemNode {
    constructor(name, isDirectory) {
        this.name = name;
        this.isDirectory = isDirectory;
        this.left = null;
        this.right = null;
    }
}

function findPath(root, target) {
    function dfs(node, path) {
        if (!node) {
            return null;
        }

        // Add current node to the path
        const currentPath = path ? `${path}/${node.name}` : node.name;

        // Check if this is the target
        if (node.name === target) {
            return currentPath;
        }

        // Recursively search left and right subtrees
        const leftResult = dfs(node.left, currentPath);
        if (leftResult) return leftResult;

        const rightResult = dfs(node.right, currentPath);
        if (rightResult) return rightResult;

        // If not found in this subtree
        return null;
    }

    const result = dfs(root, "");
    return result || "File/Directory Not Found";
}

// Test the implementation
function runTest() {
    // Constructing the file system tree
    const root = new FileSystemNode("root", true);
    const documents = new FileSystemNode("documents", true);
    const pictures = new FileSystemNode("pictures", true);
    const report = new FileSystemNode("report.txt", false);
    const project = new FileSystemNode("project", true);
    const plan = new FileSystemNode("plan.pdf", false);
    const vacation = new FileSystemNode("vacation", true);
    const beach = new FileSystemNode("beach.jpg", false);
    const profile = new FileSystemNode("profile.png", false);

    root.left = documents;
    root.right = pictures;
    documents.left = report;
    documents.right = project;
    project.left = plan;
    pictures.left = vacation;
    pictures.right = profile;
    vacation.left = beach;

    // Test cases
    console.log(findPath(root, "report.txt"));  // Should output: /root/documents/report.txt
    console.log(findPath(root, "vacation"));    // Should output: /root/pictures/vacation
    console.log(findPath(root, "nonexistent.txt"));  // Should output: File/Directory Not Found
}

runTest();


// This solution uses a depth-first search (DFS) approach to traverse the file system tree. Here's a breakdown of the implementation:

// FileSystemNode class:

// Represents a node in the file system tree.
// Has properties for name, isDirectory flag, and left and right child nodes.
// findPath function:

// Uses a nested dfs (depth-first search) function to traverse the tree.
// The dfs function takes the current node and the current path as parameters.
// It builds the path as it traverses down the tree.
// If the target is found, it returns the full path.
// If the target is not found after fully traversing the tree, it returns null.
// Main logic:

// If the dfs function returns a path, we return it.
// If dfs returns null (target not found), we return "File/Directory Not Found".
// runTest function:

// Constructs the file system tree as per the given example.
// Runs test cases to demonstrate the functionality.