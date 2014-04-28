# moby

[moby-thesaurus.org](http://moby-thesaurus.org) is a free and
open-source website designed to facilitate meanderings through the [Moby
Thesaurus](http://en.wikipedia.org/wiki/Moby_Project#Thesaurus), the largest
thesaurus in the English language.

This git repository is many things:

- The source code for the [moby-thesaurus.org](http://moby-thesaurus.org/) website.
- A tiny and simple JavaScript interface for querying Moby Thesaurus data.
- A command-line interface (CLI) for searching a local, cached copy of moby from the terminal.
- A module on npm called [moby](https://www.npmjs.org/package/moby).
- Rad.

## Browser Usage

Go to [moby-thesaurus.org](http://moby-thesaurus.org/) and get lost in the associations.

## Command Line Usage

Install [node.js](http://nodejs.org/) if you don't already have it. Then:

```sh
npm install moby --global
moby weird

Friday,Friday the thirteenth,absurd,appointed lot,astral
influences,astrology,awe-inspiring,awesome,awful,awing,beyond
belief,bizarre,blue,book of
fate,cadaverous,cantrip,cast,charm,circumstance,cockamamie,constellation,corpselike,crazy,creepy,cup,curious,curse,deadly,deathlike,deathly,deathly
pale,destination,destiny,dies,funestis,doom,dreadful,eccentric,eerie,eldritch,end,evil
eye,exorcism,extravagant,fantastic,fatality,fate,fearful,foolish,forecast,foredoom,foretelling,fortune,freaked
out,freaky,funny,future,ghastly,ghostlike,ghostly,glamour,grisly,grotesque,gruesome,haggard,haunting,hex,high-flown,hoodoo,horrific,ides
of
March,incantational,incantatory,incredible,inevitability,inscrutable,jinx,kismet,kooky,laughable,livid,lot,ludicrous,lurid,macabre,magian,magic,magic
spell,malocchio,moira,monstrous,mortuary,mysterious,necromantic,nonsensical,numinous,odd,oddball,off,off
the wall,out,outlandish,outrageous,outre,pale,passing
strange,peculiar,planets,poppycockish,portion,preposterous,preternatural,prevision,prognosis,prognostication,prophecy,quaint,queer,ridiculous,shaman,shamanic,shamanist,shamanistic,singular,sorcerous,spell,spookish,spooky,stars,strange,supernal,supernatural,talismanic,thaumaturgic,uncanny,unco,uncolike,uncouth,unearthly,unlucky
day,unnatural,voodoo,voodooistic,wan,wanga,whammy,wheel of fortune,wild,will of
Heaven,witch,witchlike,witchy,wizardlike,wizardly,wondrous strange
```

Display results one per line:

```sh
moby weird | tr , '\n'
```

## Node.js Usage

Install moby in your project directory. The `--save` flags adds it to the list of
`dependencies` in your package.json file.

```sh
cd my-project
npm install moby --save
```

Then in your javascript code:

```js
var moby = require('moby')

console.log(moby.search('weird'))

console.log(moby.search('smaragdine'))

console.log(moby.reverseSearch('smaragdine'))
```

## License

Same license as the one on the [moby project homepage](http://icon.shef.ac.uk/Moby/):

The Moby lexicon project is complete and has been placed into the public domain.
Use, sell, rework, excerpt and use in any way on any platform. Placing this
material on internal or public servers is also encouraged. The compiler is not
aware of any export restrictions so freely distribute world-wide.
