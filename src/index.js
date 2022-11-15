const dynamicImport = await import(
    /* webpackChunkName: "dynamic" */
    './dynamic-msg'
);

const dynamicMsg = document.createElement('div');
dynamicMsg.innerText = dynamicImport.msg;
document.body.appendChild(dynamicMsg);
