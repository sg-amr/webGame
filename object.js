
blockList = [
    {id: "stone", name: ""}
]


function chank() {
    // id : block id
    // direc: block's direction
    // dt: block detail ex: item in chest
    // rx ry rz : relative position in each chank
    const blockData = (blockId, direc, detail) => {
        // check blockId exit or not
        let blockExit = false;
        blockList.forEach((element) => {
            blockExit = blockExit || element === blockId;
            if (blockExit) break;
        });
        if (not(blockExit)) console.error("world loading error: block data -blockId is not defined string");

        // check direc exit or not
        const definedDirec = ["ux", "dx", "uy", "dy", "ux", "dx"];
        let direcExit = false;
        definedDirec.forEach((element) => {
            direcExit = direcExit || element === direc;
            if (direcExit) break;
        });
        if (not(direcExit)) console.error("world loading error: block data -direc is not defined string");

        //return
        if (blockExit && direcExit) {
            return {id: blockId, direc: direc, dt: detail};
        } else {
            console.error("world generating error: look at the error message ^^^^ ")
        }
    }

    //blockData -> 1*16 line
    let chankBlockData = [];
    for (let i; i <= limitHeight; i++) {
        let layer = [];
        for (let i; i <= 16; i++) {
            layer.push()
        }
        chankBlockData.push(layer)
    }
    return {
        block: blockData,
        entity: entityData,
        setup: {
            load: undefined,
        },
        dimen: undefined,
        pos: {x: undefined, y: undefined, z: undefined}
    };
}

function createChank() {
    
}