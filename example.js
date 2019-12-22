
import h from 'https://dev.jspm.io/hyperscript';

const rendered = (
  h('div#page',
    h('div#header', 'Hello world!'))
);

const renderString = rendered.outerHTML;

if (typeof window === 'undefined') {
  // node
  console.log(renderString);
} else {
  // browser
  document.body.innerHTML = renderString;
}
