
function readSingleFile(e) {
    var file = this.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        contents = e.target.result;
        generateArray(contents);
        getChart();
    };
    reader.readAsText(file);
}

function generateArray(file) {
    inputArray = file.split("\n");
    array2 = [];
    for (var i = 0; i < inputArray.length - 1; i++) {
        array2[i] = String(inputArray[i]);
    }
    generateData(array2);
    generateResultObjects();   
    auto_grow(document.getElementById("textarea1"));    
}

function generateData(array2) {
    
    data = {
        imagespaths: String( array2[0]),
        soundtrackspaths: String( array2[1]),
    };
}

function generateResultObjects() {
    result = {
        path1: ["This is the path to the image:", String(0)],
    };
    result2 = {
        path2: ["This is the path to soundtrack", String(0)],
    };
}


