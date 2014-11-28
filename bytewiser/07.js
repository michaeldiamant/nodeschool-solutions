var view = new Uint32Array(1);
view[0] = process.argv[2];

console.log(JSON.stringify(new Uint16Array(view.buffer)));
