// creamos el nodo de arbol 
function TeeNodo(value){
    return{
        value: value,
        left: null,
        right: null

    }//solo es valido para JavaScript 
}

function insertNode (nodo, value){
    if (value < node.value) {
        if (node.left === null) {
            node.left = TreeNode (value);
        }else{
            insertNode(node.left, value );
        }
    }else {
        if (node.right === null){
            node.right = TreeNode(value);
        }else{
            insertNode(node.left, value );
        }
    }
}

function insertData(root, value){
    if(root === null){
        return TreeNode(value);
    }else {
        
    }
}