# moby

[Moby](http://en.wikipedia.org/wiki/Moby_Project#Thesaurus) is a weird and
wonderful English thesaurus that sometimes yields unusual and illumintating word
relationships. This repository is a node.js module and comand-line tool for
querying the thesaurus.

[![NPM](https://nodei.co/npm/moby.png)](https://nodei.co/npm/moby/)

## Command Line Usage

Install [node.js](http://nodejs.org/) if you don't already have it, then install
moby as a global node module:

```sh
npm install moby --global
```

Then pass it any search term:

```sh
moby weird
weird,Friday,Friday the thirteenth,absurd,appointed lot,astral influences,astrology,awe-inspiring,awesome,awful,awing,beyond belief,bizarre,blue,book of fate,cadaverous,cantrip,cast,charm,circumstance,cockamamie,constellation,corpselike,crazy,creepy,cup,curious,curse,deadly,deathlike,deathly,deathly pale,destination,destiny,dies funestis,doom,dreadful,eccentric,eerie,eldritch,end,evil eye,exorcism,extravagant,fantastic,fatality,fate,fearful,foolish,forecast,foredoom,foretelling,fortune,freaked out,freaky,funny,future,ghastly,ghostlike,ghostly,glamour,grisly,grotesque,gruesome,haggard,haunting,hex,high-flown,hoodoo,horrific,ides of March,incantational,incantatory,incredible,inevitability,inscrutable,jinx,kismet,kooky,laughable,livid,lot,ludicrous,lurid,macabre,magian,magic,magic spell,malocchio,moira,monstrous,mortuary,mysterious,necromantic,nonsensical,numinous,odd,oddball,off,off the wall,out,outlandish,outrageous,outre,pale,passing strange,peculiar,planets,poppycockish,portion,preposterous,preternatural,prevision,prognosis,prognostication,prophecy,quaint,queer,ridiculous,shaman,shamanic,shamanist,shamanistic,singular,sorcerous,spell,spookish,spooky,stars,strange,supernal,supernatural,talismanic,thaumaturgic,uncanny,unco,uncolike,uncouth,unearthly,unlucky day,unnatural,voodoo,voodooistic,wan,wanga,whammy,wheel of fortune,wild,will of Heaven,witch,witchlike,witchy,wizardlike,wizardly,wondrous strange
```

## Node.js Usage

Install moby in your project directory, passing `--save` to add it to the list of
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
