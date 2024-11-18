//<reference path='./vendor/babylon.d.ts' />

// get canvas
const canvas = document.getElementById('renderCanvas');

// create babylon engine
const engine = new BABYLON.Engine(canvas, true);

function createScene() {
    // 3d scene
    const scene = new BABYLON.Scene(engine);

    // Camera
    const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0,0, -11), scene)

    // Create a Light 
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0));

    const box = BABYLON.MeshBuilder.CreateBox('box', {}, scene);
    
    return scene;

}

// create scene
const scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
})