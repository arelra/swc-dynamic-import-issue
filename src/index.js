const dynamicImport = import(
    /* webpackChunkName: "dynamic" */
    './dynamic-msg'
);

dynamicImport.then((module) => {
    const dynamicMsg = document.createElement('div');
    dynamicMsg.innerText = module.msg;
    document.body.appendChild(dynamicMsg);
});
