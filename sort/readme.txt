Install tsconfig
===================
> tsc --init

Compile
=============
> tsc
> tsc -w (watches for file changes in the src folder)

Execute
=============
> node build/index.js

Compilation & Execution
==========================
> npm init -y
> npm install nodemon concurrently
--modify "scripts" property in package.json
"scripts": {
    "start:build": "tsc-w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },