function showTree() {
    showNodeTree(document.documentElement, 0);
}

function showNodeTree(node, level) {
    showNode(node, level);

    if (node.hasChildNodes()) {
        var childNode = node.firstChild;

        while (childNode.nextSibling) {
            showNodeTree(childNode, level + 1);
            childNode = childNode.nextSibling;
        }
    }
}

function showNode(node, level) {
    let nodeInfo = new Array;

    let indentation = "  ".repeat(level);
    nodeInfo.push(indentation);

    let nodeType = node.nodeType;
    nodeInfo.push(nodeType);

    let nodeName = node.nodeName;
    nodeInfo.push(nodeName);

    let nodeValue = node.nodeValue;
    if (nodeValue) nodeInfo.push(`"${nodeValue.replace(/\n/g, '\\n')}"`);

    console.log(nodeInfo.join(' '));
}
