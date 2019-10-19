
# serve-output

Serve arbitrary script output

### Usage

```bash
npx @micburks/serve-output script.js
```

```js
// script.js
console.log(`
  <div>
    <h1>Hello world!</h1>
  </div>
`);
```

#### Using modules

`serve-output` requires Node 12 and runs your script equivalent to

```sh
node --experimental-modules --loader @micburks/jspm-loader script.js
```

```js
// script.js
import fetch from 'https://dev.jspm.io/node-fetch';
import greet from './greet.js';

(async () => {
  const data = await fetch('/user')
    .then(res => res.json());

  console.log(`
    <div>
      <h1>${greet(data.name)}</h1>
    </div>
  `);
})();
```
