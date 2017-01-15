# EntropyNet
.Net Core and Angular version of the Entropy application. 

Front end is going to be Angular 2 and Typescript. 

Need to get Typescript compilation running alongside .Net compilation in tasks.json.

In the meantime, navigate to the public2 folder is bash and run:
        tsc -p . --watch

<em><strong>Installing 3rd party typings</strong></em>
<li>e.g. for lodash</li>
<li>npm install lodash</li>
<li>npm install --save @types/lodash</li>
<li>provide the package name and js file link in systemjs.config.js</li>