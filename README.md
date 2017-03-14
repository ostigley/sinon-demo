# sinon-demo
I made this repo to demonstrate how to do some cool stuff with sinon in your unit tests.  Smarter everyday.
Another great (and far better) resource: https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/

## Spies!
Spys are cool because they tell you if a function was called.  This is expecially usefull when you are unit testing something that takes a function as an argument, ie a callback scenario.  [Sinon documentation here](http://sinonjs.org/releases/v1.17.7/spies) 

Checkout test/spy.js and run `npm run test:spy` to see spies at work.

## Stubs!
Stubs are cool because they help you limit your unit tests.  Without them, when things go wrong, things cascade in to a pit of doom.  A stub takes the place of a function / object, and returns what ever you want it to, instead of what ever the function / object would normally return. [Sinon documentation here](http://sinonjs.org/releases/v1.17.7/stubs) 

### Example:
My sum function in src/my-homework.js calls a function from another module.  But when I test the sum function, I don't want the other module to be called at all.  

Check out test/stub-nested-module.js and try `npm run test:stub-nested` to see how this works.  Voodoo, but it makes unit testing so much easier.

## Mocks!
Mocks are cool because... well I'm pretty confused about mocks, but I think they are both a stubb AND a spy.  You can use them  to check that a function was called just like a spy, but without having to pass the spy in to the function you are testing in the first place. 

Checkout test/mock.js, and try `npm run test:stub-nested`

## Danger
What happens when you run `npm run test`?  This will run all the files in ./test.  AAAnd it breaks.  This is because once you stub a function in test 'A', it oddly remains stubbed in test 'B'.  This is annoyinng, but .....

## Sandboxes to the rescue
Sinon comes with some black magic that lets you stub to your heart's content without spilling over in to other tests.  Check out the tests in /test/sandboxed-tests/ and try `npm run test:sandbox`.  Now they all pass!  Woooooot.  [Sinon documentation here](http://sinonjs.org/releases/v1.17.7/sandbox) 

I'm doing some stubbing in my own project at the moment with promises.  It's cray: 





