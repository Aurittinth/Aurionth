<script>
    import '$styles/atlas.css';

    import ResidentSection from '$components/atlas/civilization/resident/ResidentSection.svelte';
    import ClassificationTable from '$components/atlas/ClassificationTable.svelte';

    import { base } from '$app/paths';
</script>


<header class="atlas-header">
    <nav>
        <ul class="sec-nav">
            <li><a href="#opening">              Prolog         </a></li>
            <li><a href="#human-humanoid">       Humikus        </a></li>
            <li><a href="#wolf-humanoid">        Mannoŕ         </a></li>
            <li><a href="#bear-humanoid">        Monûlus        </a></li>
            <li><a href="#lizard-humanoid">      Luzin          </a></li>
            <li><a href="#snake-humanoid">       Tŕoid          </a></li>
            <li><a href="#slime-humanoid">       Slionith       </a></li>
            <li><a href="#dragon-humanoid">      Drahikânus     </a></li>
            <li><a href="#needle-ear-humanoid">  Elif           </a></li>
            <li><a href="#mass-body-humanoid">   Mokk           </a></li>
            
            <li><a href="#hybrid-humanoids">     Hörtigc        </a></li>
            <li><a href="#sea-humanoids">        Oceliś         </a></li>
        </ul>
    </nav>
</header>

<section class="atlas-inside">
    <h1>Obyvatelé</h1>
    
    <section id="opening">
        <h2>Základní pojmy a jejich význam</h2>
        <p>
            Hned na začátku je potřeba ujasnit si, jak budeme zapisovat a používat některé základní pojmy týkající se obyvatel Aurionthu. Důvodem je především skutečnost, že označení, která v češtině běžně používáme pro člověka, nemají v prostředí Aurionthu tak jednoznačný význam jako na Zemi.
        </p>
        <p>
            V pozemských jazycích bývá slovo <i>člověk</i> zpravidla spojováno s konkrétním biologickým druhem. V češtině se jím označuje příslušník lidského druhu a v množném čísle pak používáme označení <i>lidé</i>. Vedle toho existuje pojem <i>humanoid</i>, který označuje obecnější skupinu tvorů s tělesnou stavbou podobnou člověku, aniž by nutně náleželi k lidskému druhu.
        </p>
        <p>
            V Aurionthu však takové rozdělení není dostačující. Zdejší svět obývá velké množství různých humanoidních ras, které se od sebe mohou výrazně lišit svým původem, stavbou těla, vlastnostmi i způsobem života. Přesto však všechny spadají do společné širší skupiny, pro kterou v českém jazyce budeme používat označení <i>člověk</i>, případně v množném čísle <i>lidé</i>.
        </p>
        <p>
            Toto označení tedy v širším významu neodkazuje na jediný biologický druh. Je zastřešujícím pojmem pro celou skupinu humanoidních ras Aurionthu. Teprve jednotlivá pojmenování určují, o kterou konkrétní rasu či skupinu ras se jedná.
        </p>
        <p>
            Abychom však mohli v českém textu jednoznačně rozlišit tento obecný význam od označení konkrétní lidské rasy, budeme využívat velikost počátečního písmene.
        </p>
        <p>
            Pokud budeme mluvit o <b>Člověku</b> (s velkým Č), budeme tím označovat pouze příslušníka konkrétní rasy <i>Humikus</i>, tedy takzvaného <i>Člověka pravého</i>. Jedná se o rasu, která se svou tělesnou stavbou a dalšími vlastnostmi nejvíce podobá pozemskému člověku.
        </p>
        <p>
            Pokud však použijeme označení <b>člověk</b> (s malým č), půjde o obecný pojem zahrnující všechny humanoidní rasy spadající do této širší skupiny. Vlčí, medvědí, plazí, mořští, dračí i další podobní tvorové jsou tedy v tomto smyslu stále lidé, přestože nejsou Člověkem v užším významu.
        </p>
        <p>
            Stejné rozlišení platí také v množném čísle. <b>Lidé</b> s velkým L označují příslušníky rasy Člověka pravého, zatímco <b>lidé</b> s malým l označují celou širší skupinu humanoidních ras.
        </p>
        <p>
            Toto rozlišení budeme v českých textech používat důsledně. Umožňuje nám totiž zachovat rozdíl mezi obecným pojmem označujícím celou skupinu obyvatel a konkrétní rasou, aniž bychom pro tento účel museli vytvářet zcela nové české označení.
        </p>
        <p>
            Nyní se můžeme pustit do jednotlivých skupin a ras, které do této kategorie spadají.
        </p>
    </section>
    
    <div class="section-divider"></div>
    
    <section id="human-humanoid">
        <ResidentSection
            title="Humikus"
            key="humikusShapes"
        />
        <ClassificationTable
            scientific={['śemmeth roenig', 'člověk pravý']}
            linguistic={['Humikus', 'Člověk']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p>
            Tělesná stavba Humiků nevyniká žádnou výraznou anatomickou specializací či biologickým přizpůsobením pro konkrétní prostředí. Představují fyzický základ člověka na Aurionthu. Nemají mohutné svalstvo, mimořádně tvrdé kosti ani vyvinuté pra-zvířecí instinkty či smyslové orgány přizpůsobené lovu v temnotě.
        </p>
        <p>
            Humikové mají mimořádně proměnlivé rysy podle své geografické lokace, avšak bez vytváření hlubších vizuálních odchylek. Barva kůže, vlasů či očí se přirozeně přizpůsobuje míře slunečního svitu a danému podnebí.
        </p>
        <p>
            Pro některé Aurionth’any by vzhled Humiků mohl působit nevýrazně, avšak právě tato fyzická „univerzálnost“ a absence úzké specializace jim umožňuje efektivně fungovat v jakémkoliv podnebném pásmu.
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p>
            Humikové byli první linií, která dokázala překročit hranice svého původního prostředí, projít napříč kontinentem a osídlit moře i vzdálené ostrovy. Jejich vývoj se táhne přes nespočet generací po statisíciletí.
        </p>
        <p>
            Na rozdíl od jiných linií nebyli nejsilnějšími ani nejrychlejšími, ale dokázali přežít díky hromadění zkušeností, technologiím a strategii. Místo adaptace vlastního těla se naučili přetvářet okolní prostředí podle svých potřeb, čímž položili základy měst a raných civilizací.
        </p>
        <p class="heading">
            Společnost
        </p>
        <p>
            Společnost Humiků je založena na předávání znalostí, využívání nástrojů a neustálém získávání nových poznatků. Způsob jejich života se odvíjí od schopnosti organizace a přizpůsobování krajiny svým potřebám.
        </p>
        <p>
            Humikové se tak naučili využívat své okolí, nástroje i vlastní mysl ve svůj prospěch. První města této civilizace byla postavena již v raných fázích jejich rozšiřování, a to především díky spolupráci a sdílení zkušeností.
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p>
            I přes svou mimořádnou adaptační schopnost a rozmanitost však Humikové nedokázali přirozeně navázat spojení se silou přírody. Magie, která proudila celým Aurionthem, pro ně proto po dlouhou dobu zůstávala především záhadou a nevyužitou možností. To, co pro Humiky představovalo hranici jejich vlastního vývoje, se však mohlo stát příležitostí pro jinou linii člověka.
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Slovo <i>Humikus</i> pochází z latinošského slova <b>humaellitikes</b>, které můžeme přeložit jako <i>„tvor inteligentní“</i>, což bylo označení pro veškerý život vykazující známky inteligence. Označovalo to nejenom lidi, ale i psy, kočky a jiné inteligentní tvory.
        </p>
        <p>
            Jeho přibližné chápání zůstalo, ale pravý význam, co vše pod to spadá a především samotný vzhled slova se měnil. Už v raném Starorodě se toto slovo psalo <i>Humalitikes</i> a již označovalo tvory vzhledově připomínající člověka. V konečném vývoji Starorodu a s přechodem na Novorod se slovo psalo <i>Humalitikus</i> a označovalo pouze tvory podobné člověku a v češtině je jeho ekvivalentem slovo humanoid. Ale samotné <i>Humikus</i> vzniklo již v pozní latinoše, kdy se s příchodem Mannoŕů a Monûlů potřebovalo rozlišit mezi člověkem a Člověkem. Slovo prošlo škrtancema: <b>hum</b><span class="lined">aell</span><b>i</b><span class="lined">ti</span><b>k</b><span class="lined">e</span><span class="added">u</span><b>s</b> a tedy dnešní Humikus (anglicky human).
        </p>
        <p>
            Více najdete na podstránce  <a href="{base}/semmeth-roenig" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk pravý</a>.
        </p>
    </section>
    
    <div class="section-divider"></div>

    <section id="wolf-humanoid">
        <ResidentSection
            title="Mannoŕ"
            key="mannorShapes"
        />

        <ClassificationTable
            scientific={['śemmeth woefleeth', 'člověk vlčí']}
            linguistic={['Mannoŕ', 'vlčí člověk / Vlkouš']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p>
            Tělesná stavba Mannoŕů je výsledkem stovek let adaptace a přizpůsobení lesnímu bytí. Jejich dlouhý evoluční vývoj tak postupně proměnil původní humické rysy v podobu, která je dnes pro Mannoŕy charakteristická. Jejich tělesná stavba je mimořádně rozmanitá a výrazně se liší podle oblastí, v niž jednotlivé skupiny po generace žily. Nejvýraznějším znakem pomineme-li často široký a mohutný ocas a špičaté uši, které jsou často pokryté jemnými chloupky, které napomáhají lepšímu zachycování a rozlišování zvuků v hustém porostu. Mimo tyto doslova vlčí rysy se u Mannorů rozšířily zornice a duhovky očí. Zornice jsou kulaté a velmi tmavé s hlubokým vlčím nitrem, zatímco duhovky nabývají širokého vzhledu a taktéž barevné škály od sytě zelené přes fialově modrou až po výrazně ametystovou, ledově modrou nebo popelavě rudou. Zbarvení očí často přímo souvisí s prostředím a podmínkami konkrétní populace.
        </p>
        <p>
            Výrazné rysy lze pozorovat také v celkové stavbě těla. Zatímco jižní Mannoŕry bývají silní, robustní se svalnatě mohutnými končetinami, což podtrhává místní habitat a stravu bohatou na maso a tuky. Severní Mannoŕry jsou naopak štíhlejší, s jemně delšími končetinami a lehce osvalenou postavou, která jim umožňuje rychlejší pohyb a efektivnější lov v otevřenějších a řidčeji porostlých částech lesních oblastí. A nesmíme zapomenout na tzv. měsíční Mannoŕy, kteří jsou pozdním potomstvem koloniálních Tērranů na Měsíčním ostrově. Tito Mannoŕry byli díky malému množství masa odkázáni především na rostlinou stravu. Ta však byla vysokokalorická a velmi bohatá na bílkoviny, tuky, sacharidy, ale i minerály a vitamíny. Díky tomu jsou měsíční Mannoŕry objemnější, mohutnější a robustnější než jejich severní předci.
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p>
            Jejich rozšíření po kontinentu bylo pomalé, nejisté, ale postupně neodvratné. S rostoucím počtem Mannoŕů se jejich skupiny začaly vzdalovat od původních jižních oblastí a pronikat do dalších částí Aurionthu. Během této doby se stále častěji dostávali do kontaktu s již rozšířenými Humiky a postupně se rozpínajícími Monûly. Vztahy mezi jednotlivými liniemi nebyly zpočátku vždy přátelské. Rozdílný způsob života, odlišné hodnoty i rozdílný pohled na využívání krajiny vedly k četným sporům. Postupem času však začala převládat vzájemná tolerance a spolupráce.
        </p>
        <p>
            Mannoŕové se tak postupně stali nedílnou součástí lidské mozaiky Aurionthu. Do společností, s nimiž přicházeli do kontaktu, přinášeli vlastní způsob života, odlišnou perspektivu a především jiný pohled na vztah mezi člověkem a přírodou. Zatímco Humikové se naučili především přizpůsobovat prostředí vlastním potřebám, Mannoŕové se po tisíciletí učili přizpůsobovat sami sobě prostředí, v němž žili.
        </p>
        <p class="heading">
            Společnost
        </p>
        <p>
            Mannoŕská společnost se tradičně organizuje do smeček po vzoru vlků, kde jednotlivé role stojí na vzájemné podpoře, spolupráci a odpovědnosti vůči ostatním. Kultura je hluboce zakořeněná v úctě k přírodním silám. Za posvátná místa považují staré lesy, tůně a jezera, v nichž vnímají přítomnost duchů přírody. Divočinu nechápou jako překážku k podrobení, ale jako domov, jehož jsou přirozenou součástí.
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p>
            Mannoŕové jsou známí svou mimořádnou schopností vnímat okolní prostředí. Dokážou citlivě reagovat na změny počasí, pohyb zvířat i stav krajiny a své znalosti předávají z generace na generaci. Jejich vztah k přírodě proto není založen pouze na duchovním přesvědčení, ale také na hluboké znalosti jejího fungování.
        </p>
        <p>
            Mannoŕry byli prvními, kdo objevil potenciál magie a dokázal s ním pracovat. Byli prvními, kdo vytvořil runové písmo, které umožňovalo s magií pracovat. Později byli také prvními, kdo magii plně zdokumentovali a popsali pro ostatní méně znalé linie. Mannoŕové tak položili základy dnešní magie.
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Samotný název <i>Mannoŕ</i> pochází ze staré tērianštiny. Předpokládá se, že vznikl ze spojení <b>Ma nia’Noŕ Kaiy</b>, kde <i>Ma</i> znamená „muž“, <i>nia’Noŕ</i> vyjadřuje „v přírodě“ a <i>Kaiy</i> označuje „divokou šelmu“, konkrétně vlka. Název lze tedy doslovně přeložit jako <i>Muž v přírodě vlků</i>. Původní význam však nebyl nutně označením konkrétního druhu člověka. Tērrané tímto spojením označovali především lidi žijící mimo tehdejší civilizovaná sídla, v izolaci a v těsném soužití s divočinou.
        </p>
        <p>
            Postupem času se původně obecné označení začalo spojovat právě s Mannoŕy, jejichž způsob života nejlépe odpovídal jeho původnímu významu. Slovo tak postupně přestalo označovat pouze člověka žijícího v divočině a stalo se vlastním označením celé linie.
        </p>
        <p>
            Více najdete na podstránce  <a href="{base}/semmeth-woefleeth" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk vlčí</a>.
        </p>
    </section>

    <div class="section-divider"></div>

    <section id="bear-humanoid">
        <ResidentSection
            title="Monûlus"
            key="monulusShapes"
        />
        <ClassificationTable
            scientific={['śemmeth faebert', 'člověk medvědí']}
            linguistic={['Monûlus', 'medvědí člověk / Medvěďák']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p>
            Tělo Monûla je přetvořeno drsnými podmínkami horského prostředí a stavěno jako hora sama — je mohutné, těžké a překvapivě měkké na dotek. Silné a husté kosti nesou statnou postavu pohybující se nejčastěji kolem dvou metrů, ačkoliv jedinci pod sto sedmdesát centimetrů nejsou žádnou vzácností.
        </p>
        <p>
            Celé tělo pak pokrývá hustá srst a pod ní silná vrstva podkožního tuku, který v horském a chladném prostředí není slabostí, ale výsadou. Jejich drápy — spíše nehty, avšak silné, dlouhé a výrazné — představují poslední připomínku pradávného zvířete, z něhož tato linie vzešla.
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p>
            Příběh Monûlů začal o mnoho později než u ostatních linií — a málem vůbec nezačal. Jejich původní rozšíření sahalo napříč severní částí dnešního Deru, kde žili jako primitivní, srstnatí a těžkopádní tvorové na pomezí Humika a zvířete. Příchod Humiků je však postupně a neúprosně zatlačil bez jediné velké bitvy, pouze tichým tlakem civilizace na divočinu.
        </p>
        <p>
            Poslední přeživší se uchýlili do středozemí k úpatí Pêrrunských hor. Krutá podhůří, řídký vzduch a dlouhé zimy z nich vytvořily novou, těžkou, robustní a takřka nezničitelnou linii, která si dokázala osvojit i nejnehostinnější výšiny.
        </p>
        <p class="heading">
            Společnost
        </p>
        <p>
            Monûlové nikdy nebyli národem. Žijí rozptýleně v horách a podhůří a největším uskupením, které u nich lze očekávat, je volná skupina čtyř či pěti jedinců, která bývá pouze dočasná.
        </p>
        <p>
            Naučili se číst krajinu způsobem, který jiným liniím zůstává nepřístupný. Jejich prostorová paměť je mimořádná — znají každý průsmyk, převis i svah, který v zimě představuje hrozbu a v létě naopak obživu.
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p>
            Jako každé území i toto je prostoupeno magickými pásy. Magické rostliny rostou podél horských potoků a zvířata v sobě nesou síly, které jinde neexistují.
        </p>
        <p>
            Monûlové v tomto světě nežijí vedle magie, ale žijí skrze ni, aniž by ji cílěně pojmenovávali nebo systematicky ovládali. Je přirozenou součástí jejich prostředí stejně jako sníh a kámen.
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Samotné jméno <i>Monûlus</i> se objevuje teprve asi padesát tisíc let nazpět a pochází z prastarého horského slangu. Prvek <b>Mon</b> označuje něco velkého, mohutného a robustního — doslova <i>„velký jako hora“</i>. Slovo <b>Ûlusii</b> pak znamená horu či monument, ale i stavbu či zázemí.
        </p>
        <p>
            <i>Monûlus</i> tedy doslovně znamená <i>„Velký jako hora“</i>. Toto pojmenování původně nevzniklo jako označení rasy, ale jako popis vlastností jedince, a teprve s odstupem času se z přezdívky stalo vlastní jméno celé linie.
        </p>
        <p>
            Více najdete na podstránce  <a href="{base}/semmeth-faebert" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk medvědí</a>.
        </p>

    </section>
    
    <div class="section-divider"></div>
    
    <section id="lizard-humanoid">
        <ResidentSection
            title="Luzin"
            key="luziniShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk ještěří']}
            linguistic={['Luzin', 'ještěří člověk / Ještěrák']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p>
            Luzini mají svou kůži velmi zvláštní. Disponují měkkými kožešinovými šupanami a specializovaným termoregulačním organismem. Jejich tělo má jako tělo Mannoŕů či Monûlů čtyři končetiny a páteř zakončenou ocasem – dvě nohy, dvě ruce.
        </p>
        <p>
            Oproti nim však nevznikli z linie Humiků, nýbrž z linie Drahikânů. Jejich pleť je zbarvená do pískových barev od pískově žluté, přes okrovou až po tmavě šedou. Tak zvaně novodobí Luzini disponují navíc i zelenou či zelenomodrou barvou pleti.
        </p>
        <p>
            Mohutná kostra a silné svalové úpony jim dávají značnou sílu a schopnost lézt. Jejich tělo je sice primárně pro teplé, žhavé pouště a louky, ale díky termoregulaci jsou oproti ještěrkám schopni žít, a především fungovat i v těch nejsevernějších a nejchladnějších oblastech Aurionthu. Jejich tělo v těchto oblastech však vyžaduje extrémní přísun živin, aby mohlo z čeho vytvářet teplo.
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p>
            Jejich největší rozšíření je v Poušti. Ta je obehnaná hned dvěma pohořími. Pohořím Trojhřbetenní Bōnnerie, konkrétně tedy Severní Bōnnerií a Dlouhou Jižní Bōnnerií, která Poušť svírá ze západní strany. Na východě je však pohoří Zarveth, které se rozestírá po celé výši kontinentu. Poušť se na severu a jihu rozprašuje na teplé louky, kde na severu je chrání velekopec Tawrîl a na jihu navazují louky na teplejší moře Kôrbonio.
        </p>
        <p>
            Poušť tak představuje nejteplejší území na Aurionthu a primární teritórium jak Luzinů tak Tŕoidů.
        </p>
        <p class="heading">
            Společnost
        </p>
        <p>
            Oproti Tŕoidům byli Luzini vždy vděční za jakýkoli shovívavý kontakt s jinými rasami. Vzhledem k drsnosti pouštního vnitrozemí si cenili obchodu a výměny surovin, které sami nemohli v kamenných a pískových pustinách získat. Jejich komunity se soustředí především v blízkosti skalních převisů, stíněných kaňonů a podzemních průduchů, kde se přes noc drží akumulované teplo. Vztahy mezi jednotlivými skupinami stojí na sdílení zpráv o zdrojích vody a bezpečných trasách napříč žhavými pláněmi.
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p>
            Protože je Poušť primárním centrem tepelné magii, jsou právě Luzini i Tŕoidi skvělými vládci ohně. Poušť je masivní studna magie a právě oheň tuhle studnu potřebuje. Nejsou sice skvělými vládci vody, ale pomocí ní ji dokáží schopně vyhledat i v těch nejhorších místech.
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Výraz <i>Luzin</i> je s největší pravděpodobností slangového nebo mytologického původu. V dnešní době je tomu nejbližší slovo <i>Luzaz</i>, což označuje šupinu, nebo <i>Lazente</i> označující sluneční paprsek dopadající na povrch písku.
        </p>
        <p>
            Někteří se domnívají, že tento výraz mohl vzniknout z pradávného dodnes nezjištěného jazyka nazvaného Harmazarr, kde existovalo slovo <i>Hanob</i>, které se ale čte velmi podobně jako dnešní Luzin, a předpokládá se, že označovalo tvora připodobněného pouštnímu bohu Zarthewu, který vypadá právě jako Luzini.
        </p>
        <p>
            Více najdete na podstránce <a href="{base}/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ještěří</a>.
        </p>
    </section>

    <div class="section-divider"></div>

    <section id="snake-humanoid">
        <ResidentSection
            title="Tŕoid"
            key="troidShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk hadí']}
            linguistic={['Tŕoidy', 'hadí člověk / Had']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p>
            Oproti Luzinům mají Tŕoidi pouze dvě horní končetiny v podobě rukou. Spodní část jejich těla přechází v dlouhý, svalnatý hadí ocas, na kterém také stojí. Tato stavba těla jim umožňuje plynulý, rychlý a mimořádně efektivní pohyb v jemných písčitých dunách, kde by klasické nohy zapadaly.
        </p>
        <p>
            Stejně jako Luzini nevznikli z linie Humiků, ale odvozují svůj původ z linie Drahikânů. Oproti Luzinům však mají hladkou holou kůži, pokrytou jemnými, téměř nehmatatelnými šupinkami. Jejich pleť je od vínově fialové, přes rudě písčitou až po zlatavě oranžovou a písčitě žlutou. Jejich zrak je přizpůsoben slunečnímu světlu a tepelným mžitkám nad obzorem.
        </p>
        <p>
            Jejich těla jsou zkrátka monumentem sama o sobě. Když opomeneme jejich doslova obrovitánský ocas, který často měří až 7 metrů, tak jejich samotný trup od pasu nahoru není nijak pozadu. Široká ramena, statné svaly a především a často vypouklé břicho a ještě větší prsa. Pokud bychom opravdu chtěli tvrdit, že Monûlové jsou hory, Tŕoidi pak musí být světadíly.
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p>
            Tŕoidi jsou vládci Pouště. Obývají nejteplejší a nejžhavější písečné duny, které zde existují. Oni jsou krály nestabilního a zrnitého povrchu. Jejich mohutný ocas po tomto povrchu pluje stejně jako po balvanu.
        </p>
        <p>
            Podobně jako Luzini i oni mají termoregulační organismus a oproti klasickým hadům jsou taktéž schopni přežít i v nejsevernějších oblastech. Ale jejich denní spotřeba jídla je oproti Luzinům ještě větší, a to už oni sami mají silnou hostinu, jsou-li v chladu.
        </p>
        <p class="heading">
            Společnost
        </p>
        <p>
            Oproti přístupnějším Luzinům se Tŕoidi jiným rasám vždy raději vyhýbali a i dnes je berou s velkou odtažitostí a rezervou.
        </p>
        <p>
            Jejich domovy jsou pod zemí v dunách písku. Je to velmi precizní práce, ale mnoho architektů to odsekává. Přitom postavit takové skvosty jako dělají Tŕoidi a ještě k tomu do písku, je alespoň chválihodné.
        </p>
        <p>
            Jejich společnost není sice zrovna dvakrát sdílná, ale když zmíníte písek, stavby či jídlo, hned se dají do řeči.
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p>
            Jako obyvatelé Pouště jsou Tŕoidi společně s Luziny skvělými vládci ohně. Právě díky ohni dokáží stavět monumenty v podzemí. Tepelná úprava písku ze sypkého na pevné vlastnosti jim v tom jen a jen napomáhá.
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Slovo <i>Tŕoid</i> podle odhadů pochází z prastarého jazyka Gaaharamantimishe. Spojením slov <i>Tŕaya</i> znamenající podle odhadů vlnitý pohyb a <i>Idamid</i> jako symbol písku. Do nějaké smysluplné podoby se to dalo překložit jako <i>„vlnitý písek“</i>, což krásně odráží nestálost písečných dun, připomínající mořské vlny, ale také typický pohyb Tŕoidů.
        </p>
        <p>
            Více najdete na podstránce <a href="{base}/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk hadí</a>.
        </p>
    </section>

    <div class="section-divider"></div>

    <section id="slime-humanoid">
        <ResidentSection
            title="Slionith"
            key="slionithShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk slizovitý']}
            linguistic={['Slionith', 'Rozteklý']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p>
            Slionithé představují zcela unikátní linii, která se v průběhu věků evolučně odtrhla od svých původních předků z linie Monûlů. Zatímco původní Monûlové se vyznačovali mohutnou stavbou těla, silnými kostmi a hustou srstí přizpůsobenou mrazivým horám, tělesná schránka Slionithů si prošla radikální proměnou. Postupnou adaptací ztratili veškeré pevné části, kosti i tuhé tkáně, až se jejich těla proměnila v plnohodnotnou, přizpůsobivou slizovitou hmotu. Přesto si v základním nastavení zachovávají humanoidní siluetu, která sice na první pohled působí jako vědomě náročná na udržení, avšak představuje jejich přirozenou podstatu.
        </p>
        <p>
            Struktura jejich těla drží tvar bez nutnosti neustálého soustředění. Při velmi důkladném pozorování lze uvnitř jejich rosolovité hmoty zaznamenat malé, ale na pohled mimořádně rychlé proudění a mikroskopické proudy, které v organismu plní funkci jakési vnitřní hydrodynamické kostry. Vzhledem k nepřítomnosti pevných zábran se jejich tělesná schránka dokáže natáhnout do nepředstavitelných šířek nebo se naopak extrémně smrštit. Tyto výrazné tvarové změny však již vyžadují zapojení samotného vědomí. Vizuálně si tak Slionithé i přes svou želatinovou povahu uchovávají široká ramena či náznak celkově masivnější stavby těla, což je estetickým dědictvím po jejich monûlských předcích.
        </p>

        <p class="heading">
            Rozšiřování
        </p>
        <p>
            Vývoj Slionithů jako jedna z posledních vývojových vrstev úzce souvisí s kolonizací ostrova Mallēm rasou Monûlů. Ostrov už v době jejich příchodu nabízel specifické prostředí s dominancí rostlin plodících měkké až želatinové plody, které se pro kolonizátory staly hlavním zdrojem obživy.
        </p>
        <p>
            Dlouhodobá konzumace této stravy a biochemické procesy s ní spojené vedly k postupnému zželatínění a rozvolnění jejich tkání. V důsledku této adaptace na prostředí ostrova se původní monûlští obyvatelé proměnili v samostatnou slizovitou linii.
        </p>
        <p class="heading">
            Společnost
        </p>
        <p>
            Přestože vnější pozorovatelé mohou mít sklon posuzovat Slionithy podle jejich neobvyklé fyzické struktury, jejich existence nepřehlédnutelně dokazuje, že lidskost nespočívá ve tvaru, vzhledu ani velikosti tělesné schránky, ale ve vědomí, vytrvalosti a schopnosti myšlenkového plánování. Společenské uspořádání Slionithů bývá velmi klidné a rozvážné.
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p>
            Magická podstata Slionithů je úzce spjata s hydrokinetickým a tvarovým prvkem magie, který napájí vnitřní proudění jejich těl. Nebojují hrubou fyzickou silou, ale dokáží absorbovat nárazy nebo procházet drobnými průduchy v terénu.
        </p>

        <p class="heading">
            Původ slova
        </p>
        <p>
            Slovo <i>Slionith</i> je vytvořeno jedním ze členů této rasy. Nikdo neví, proč právě toto, či z čeho vzniklo. Sám autor to nikdy neuvedl a vzal si toto tajemství taktéž do hrobu.
        </p>
        <p>
            Ohledně samotného slova existuje nespočet teorií, hypotéz i domněnek. Nikdo nikdy nepřišel na původ. Vědci se proto domnívají, že šlo o pouhé splinutí náhodné sady písmen, tedy lidsky řečeno: prostě si to vymyslel.
        </p>
        <p>
            Více najdete na podstránce <a href="{base}/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk slizovitý</a>.
        </p>
    </section>
    
    <div class="section-divider"></div>

    <section id="dragon-humanoid">
        <ResidentSection
            title="Drahikânus"
            key="drahikanusShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk dračí']}
            linguistic={['Drahikânus', 'Drakovci / Draci']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p>
            Drahikâni představují humanoidní linii spojenou s prastarámi dračími rysy. Jejich tělesná stavba je znatelně šlachovitější a pevnější než u běžného člověka, s vyšší hustotou svalové hmoty a zpevněnou kosterní strukturou. Hlava je je protáhlejší a v zadní části brady často s výčnělky. Hlava má také ruhy, které jsou typické pro draky.
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p>
            Historický přesun a výskyt Drahikânů je úzce spjat s ostrovem Fope. V období vodního pádu, kdy klesala hladina moře, přešli na tento ostrov s předpokladem, že vstupují do neosídleného prostředí. Po příchodu však zjistili, že ostrov již obývají jiné lidské skupiny.
        </p>
        <p class="heading">
            Společnost
        </p>
        <p>
            Před příchodem na Fope čelili Drahikâni složitému postavení. Lidé na kontinentu z nich měli strach a samotní draci je časem zcela zavrhli. Na ostrově Fope však narazili na shovívavější lidské obyvatelstvo, které je přijalo a vzalo mezi sebe, což umožnilo jejich dlouhodobé začlenění a koexistenci.
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p>
            Drahikâni jsou nelepšími vládci magie, ať jde o základní (přírodní) živly jako jsou oheň, voda země či vzduch, tak i ty těžší primární živly jako ether, čas či život se smrtí.
        </p>
        <p>
            Sami taktéž velmi dobře odolávají jednoduché magii. A sami mají již od narození lurickou kapacitu na úrovni, která je u Humiků odhadovaná až v pozdním dospívání. To vše pochází právě z dračí linie. A také jsou velmi citlivý na magii.
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Označení <i>Drahikânus</i>, obdobně pak varianta <i>Drahius’Kânus</i>, v sobě nese plně doložený odkaz na prastarého, vznešeného a božího pradraka jménem Kânus Drâhus. Tato rasa na jeho počest přetvořila své pojmenování, díky čemuž mezi lidmi vznikla časem i mytologická historka jejich původu.
        </p>
        <p class="heading">
            Mytologie
        </p>
        <p>
            Současná věda nemá k dispozici pádný neprůstřelný důkaz o přesném původu Drahikânů. Jejich evoluční stálost po sta tisíce let však podporuje verzi, že na Aurionthu nejsou původní.
        </p>
        <p>
            Příběhy o jejich vzniku se dělí do dvou hlavních větví: První vypráví o tom, že se dávným drakům nelíbil prapůvodní lid, a proto vybrali jedince ze svých řad a přetvořili je na humanoidy. Po dlouhém období se nakonec rozhodli při vodním pádu, historicky doložený pokles mořské hladiny, přejít na vzdálený ostrov, který vyhledali. Zde však k jejich očekávání, nebylo pusto. Byla zde rozsáhlá infrastruktura místního národa, která zdaleka přesahovala hranice, které byli na kontinentu. Lidé je zde přijmuli za své a spolupracovali, bez ohledu na vzhled, či původ.
        </p>
        <p>
            Druhý, výrazněji mytologický příběh vypráví o tom, že Pradrak Kânus Drâhus se snesl na zem a oplodnil přinejmenším 200 plně náhodných lidí. Z tohoto masového oplodnění podle legend vznikla dnešní rasa Drahikânů.
        </p>
        <p>
            Více najdete na podstránce <a href="{base}/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk dračí</a>.
        </p>
    </section>
    
    <div class="section-divider"></div>
    
    <section id="needle-ear-humanoid">
        <ResidentSection
            title="Elif"
            key="elifipShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk jehlouchý']}
            linguistic={['Elif', 'Horalové']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p>
            Elifové představují lidskou linii výrazně přizpůsobenou životu v náročném prostředí Derských hor. Dlouhodobý vývoj v podmínkách s řidším vzduchem vedl ke zvětšení objemu jejich plicního koše a k přirozeně klidnějšímu krevnímu oběhu, který si zachovává stabilitu i ve fyzicky náročných nebo stresových situacích. Jejich uši získaly špičatý tvar, díky němuž fungují jako efektivní přijímač měkkých a dunivých vibrací šířících se skalním prostředím.
        </p>
        <p>
            Jejich tělo je hubené a často zbarvené do šedomodra až zelenofialova. Jsou vysocí s dlouhými končetinami a velmi obratní. Jejich hrudník je díky plicím objemnější a širší.
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p>
            Původním i hlavním sídelním prostorem této lidské linie jsou horské oblasti Derských hor a pohoří Gôrthōnh. Přestože je toto prostředí pro běžný život téměř nehostinné, Elifové zde dokázali dlouhodobě prosperovat. Mimo své domovské hory se vyznačují mimořádnou fyzickou zdatností v nížinách, kde z nich fyziologické přizpůsobení dělá vynikající běžce.
        </p>
        <p class="heading">
            Společnost
        </p>
        <p>
            Život ve vysokohorských podmínkách utvořil společenství založené na úzké soudržnosti, pevné disciplíně a schopnosti vnímat jemné změny horského prostředí. Svůj horský domov považují za přirozené útočiště a k obyvatelům nižších poloh přistupují s odstupem, avšak bez nevraživosti.
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p>
            Díky horskému přizpůsobení jsou skvělými vládci vzduchu a někteří i země. Taktéž jsou velmi duchovní a etherická síla jim taktéž velmi jde. Díky zemi dokáží včas předvídat sesuvy půdy nebo rychle zjistit poryv větru.
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Slovo <i>Elif</i> vzniklo převážně z jejich slangových výrazů <i>eel</i> pro vánek či slabý vítr a <i>iefii</i> pro rychlost a obratnost. Ve spojení bychom tedy je mohli nazvat <i>rychlý vánek</i> či lépe <i>větrná obratnost</i>.
        </p>
        <p>
            Více najdete na podstránce <a href="{base}/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk jehlouchý</a>.
        </p>
    </section>
    
    <div class="section-divider"></div>

    <section id="mass-body-humanoid">
        <ResidentSection
            title="Mokk"
            key="mokkShapes"
        />

        <ClassificationTable
            scientific={['śemmeth wekk', 'člověk objemný']}
            linguistic={['Mokk (Mokkun)', '']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p>
            Mocci představují zavalitou a neobyčejně fyzicky zdatnou linii člověka. Jejich anatomie se vyznačuje širokými rameny, objemným hrudním košem, masivní kosterní stavbou a výrazně vyvinutým svalstvem. Často také toto vše doplňuje mohutný a objemný břich, způsoben především jejich stravou. Pokožka Mokků má vyšší hustotu pigmentu s přirozenými zelenohnědými až olivově zemitými barvami.
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p>
            Hlavním místem, jejich pobytu je dnešní stát Mocumer a jeho ostrovy. Mocci osídlili především oblasti s bujnou vegetací.
        </p>
        <p class="heading">
            Společnost
        </p>
        <p>
            Společnost Mokků v Mocumeru je velmi volná a schovívavá. Nehraje se zde na postavení, peníze ani krev. Je to společnost, která přijme každého. tradicí je velké množství jídla, a honosné hostiny i v klasických dnech. Přestože z vnější perspektivy působí tvrdým, uzavřeným a striktním dojmem, uvnitř panuje klid, milost a především ochota. Mají však pevná pravidla chování, dresscodů do společností a občas netradiční až extravagantní zvyky. Mají pevný právní řád, velkou škálu řemeslných profesí.
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p>
            Mocci disponují přirozenou rezistencí vůči organickým jedům a velmi často ovládají zemní magii. Zemní magie jim napomáhá ve stavebnictví a smyslu pro humor. Někteří z nich dokáži naopak ovládat vodu, která naopak napomáhá jejich zemědělství a samotné obživě.
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Slovo <i>Mokk</i>, starší výraz pak <i>Mokkun</i>, odkazuje na cumerská slova <i>makkan</i> (objemný, honosný), <i>fellun</i> (tlustý, obžerný, nenasytný) a starší <i>wekk</i> (silný, velký, objemný).
        </p>
        <p>
            Více najdete na podstránce <a href="{base}/semmeth-wekk" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk objemný</a>.
        </p>
    </section>
    
    <div class="section-divider"></div>

    <section id="hybrid-humanoids">
        <ResidentSection
            title="Hörtigc"
            key="hortigcShapes"
        />

        <ClassificationTable
            scientific={['?', '?']}
            linguistic={['Hörtigc', 'kříženec / hybrid']}
            popular={[
                ['Mazariag', 'mutant'],
                ['Mâzzatī', 'míšenec'],
                ['Fûlig', 'zmetek']
            ]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p>
            Hörtigcové představují obrovskou skupinu, která nevznikla přirozenou evoluční cestou. Jejich vznik je přisuzován neznámé magii, která je před dávnými lety (přibližně 1 miliardu let nazpět) nečekaně zasáhla. Největší transformace postihla linii Humiků, ale zasaženi byli i Mannoŕové či Monûlové.
        </p>
        <p>
            Tato magie způsobila, že se jejich těla — nejčastěji v dolní polovině — transformovala do forem nejrůznějších aurionthských tvorů. Za nepředstavitelně dlouhou dobu od tohoto zásahu si však stihli projít hned několika vlastními evolučními vrstvami. Tyto postupné změny jim umožnily především lepší biologické sžití s novými hybridními těly a stabilizaci jejich organismu.
        </p>
        <p>
            Anatomie jednotlivých Hörtigců je velmi rozmanitá. Záleží na tom, s jakým tvorem se jejich původní linie spojila. Ačkoliv byla původní transformace náhlou mutací, dnešní Hörtigcové mají pevně propojenou nervovou i svalovou soustavu, díky čemuž svá hybridní těla ovládají s naprostou přirozeností.
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p>
            Jejich rozšíření dnes již není tak časté, ale na Aurionthu stále existují. Nevytvářejí obří souvislé říše, ale nalézt je lze napříč různými zeměmi.
        </p>
        <p>
            Z evolučního hlediska jsou živým důkazem toho, že i nehoda může být počátkem nového druhu a že původ není ničím víc než udržením v čase.
        </p>
        <p class="heading">
            Společnost
        </p>
        <p>
            Vzhledem k jejich pestrosti bývá společnost Hörtigců buď pevně integrovaná do komunit jiných linií, nebo vytváří menší, velmi rozmanité osady, kde vedle sebe žijí jedinci s úplně odlišnými anatomickými znaky.
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Slovo <i>Hörtigc</i> je akorát trochu více odborně znějící slova <i>Höregc</i>, tedy kříženec, hybrid.
        </p>
        <p>
            Samotné slovo <i>Höregc</i> pak pochází ze Starorodu a znamená <i>„výsledek dvou“</i>.
        </p>
        <p>
            Více najdete na podstránce <a href="{base}/atlases/civilization/resident/hybrid-humanoids">Hörtigc</a>.
        </p>
    </section>
    
    <div class="section-divider"></div>
    
    <section id="sea-humanoids">
        <ResidentSection
            title="Oceliś"
            key="ocelisShapes"
        />

        <ClassificationTable
            scientific={['?', '?']}
            linguistic={['Oceliś', 'Oceánci']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p>
            Tělesná stavba Oceliśů představuje unikátní adaptaci na vodní a pobřežní prostředí Aurionthu. Jejich kůže je hladká, pevná a přirozeně uzpůsobená k pohybu ve vodním sloupci i k ochraně před vysoušením na souši.
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p>
            Oceli obývají vodní oblasti Aurionthu, od mělkých pobřežních vod až po otevřený oceán.
        </p>
        <p class="heading">
            Společnost
        </p>
        <p>
            Žijí v rozechvělých společenstvích vybudovaných v zatopených jeskyních, na útesech nebo v podmořských kamenných strukturách.
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p>
            Ocelové jsou výbornými vládci vodní magie.
        </p>
        <p>
            Více najdete na podstránce <a href="{base}/atlases/civilization/resident/sea-humanoids">Oceliś</a>.
        </p>
    </section>
</section>