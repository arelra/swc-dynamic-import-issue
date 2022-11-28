const dynamicImport = await import(
    /* webpackChunkName: "dynamic" */
    './dynamic-msg'
);


const dynamicMsg = document.createElement('div');
dynamicMsg.innerText = dynamicImport.msg;
document.body.appendChild(dynamicMsg);

const dynamicImport2 = await import(
    /* webpackIgnore: true */
    'https://raw.githubusercontent.com/arelra/swc-dynamic-import-issue/main/src/index.js'
);
