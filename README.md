# moby

[Moby Thesaurus II](http://en.wikipedia.org/wiki/Moby_Project#Thesaurus), packaged as a node module and CLI.

## Command Line Usage

Install moby as a global node module:

```sh
npm install moby --global
```

Then pass it any search term:

```sh
moby ponder
ponder,appraise,back down,balance,be abstracted,brood,brood over,chaw,chew over,chew the cud,cogitate,con over,consider,contemplate,debate,deliberate,deliberate over,deliberate upon,demur,digest,dwell,evaluate,excogitate,falter,fear,hang back,hem and haw,hesitate,hover,hum and haw,introspect,jib,meditate,meditate upon,mind,mull over,muse,muse on,muse over,pause,perpend,play around with,play with,ponder over,pull back,reason,reflect,reflect over,retreat,revolve,roll,ruminate,ruminate over,run over,scruple,shilly-shally,shy,speculate,stick at,stickle,stop to consider,straddle the fence,strain at,study,think,think over,think twice about,toy with,turn over,weigh,withdraw,yield
```

## Node.js Usage

Install moby in your project directory, passing `--save` to add it
`dependencies` in your package.json file.

```sh
cd my-project
npm install moby --save
```

In your code:

```js
var moby = require('moby')
moby.search('ponder')
```

## License

Same license as the one on the [moby project homepage](http://icon.shef.ac.uk/Moby/):

The Moby lexicon project is complete and has been placed into the public domain.
Use, sell, rework, excerpt and use in any way on any platform. Placing this
material on internal or public servers is also encouraged. The compiler is not
aware of any export restrictions so freely distribute world-wide.
