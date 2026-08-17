<script>
    import '$styles/atlas.css';

    import ResidentSection from '$components/atlas/civilization/resident/ResidentSection.svelte';
    import ClassificationTable from '$components/atlas/ClassificationTable.svelte';
</script>

<section class="atlas-inside">

    <nav>
        <ul>
            <li><a href="#opening">              Prolog         </a></li>
            <li><a href="#human-humanoid">       Humikus        </a></li>
            <li><a href="#wolf-humanoid">        Mannoŕ         </a></li>
            <li><a href="#bear-humanoid">        Monûlus        </a></li>
            <li><a href="#lizard-humanoid">      Luzini         </a></li>
            <li><a href="#snake-humanoid">       N’Tŕoidy       </a></li>
            <li><a href="#hybrid-humanoid">      Hörtigc        </a></li>
            <li><a href="#slime-humanoid">       Slionith       </a></li>
            <li><a href="#otter-humanoid">       O’Zimus        </a></li>
            <li><a href="#shark-humanoid">       O’Erim         </a></li>
            <li><a href="#coral-humanoid">       O’de’Holl      </a></li>
            <li><a href="#cetacean-humanoid">    O’Cūrr         </a></li>
            <li><a href="#octopus-humanoid">     O’yu’Fklip     </a></li>
            <li><a href="#jellyfish-humanoid">   O’Dōttey       </a></li>
            <li><a href="#needle-ear-humanoid">  Elifip         </a></li>
            <li><a href="#dragon-humanoid">      Drahius’Kânus  </a></li>
            <li><a href="#pig-humanoid">         Gallos         </a></li>
            <li><a href="#cow-humanoid">         Munos          </a></li>
            <li><a href="#orc-like-humanoid">    Orc’like       </a></li>
        </ul>
    </nav>
<!--
0.0.    Základní pojmy  Prolog                  opening
1.0.    Humikus         Člověk pravý            human-humanoid
2.0.    Mannoŕ          Člověk vlčí             wolf-humanoid
3.0.    Monûlus         Člověk medvědí          bear-humanoid
4.0.    Luzintŕ         Lidé plazí              reptile-humanoids
  4.1.  Luzini          Člověk ještěří          lizard-humanoid
  4.2.  N’Tŕoidy        Člověk hadí             snake-humanoid
5.0.    Hörtigc?        Člověk kříženci         hybrid-humanoid
6.0.    Slionith        Člověk slizovití        slime-humanoid
7.0.    Oceliś          Lidé mořští             sea-humanoids
  7.1.  O’Zimus         Člověk vydří            otter-humanoid
  7.2.  O’Erim          Člověk žraločí          shark-humanoid
  7.3.  O’de’Holl       Člověk korálový         coral-humanoid
  7.4.  O’Cūrr          Člověk kytovcovití      cetacean-humanoid
  7.5.  O’yu’Fklip      Člověk chobotnicovití   octopus-humanoid
  7.6.  O’Dōttey        Člověk medúzovití       jellyfish-humanoid
8.0.    Elifip          Člověk jehlouší         needle-ear-humanoid
9.0.    Drahius’Kânus   Člověk dračí            dragon-humanoid
10.0.   Gallos          Člověk prasečí          pig-humanoid
11.0.   Munos           Člověk kravští          cow-humanoid
12.0.   Orc’like        Člověk orc’like         orc-like-humanoid
-->
    
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
            Více najdete na podstránce  <a href="/semmeth-roenig" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk pravý</a>.
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
            Více najdete na podstránce  <a href="/semmeth-woefleeth" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk vlčí</a>.
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
            Více najdete na podstránce  <a href="/semmeth-faebert" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk medvědí</a>.
        </p>

    </section>
    
    <div class="section-divider"></div>
    
    <section id="lizard-humanoid">
        <ResidentSection
            title="Luzini"
            key="luziniShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk ?']}
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
            Mohutná kostra a silné svalové úpony jim dávají značnou sílu a schopnost lézt. Jejich tělo je sice primárně pro teplé, žhavé pouště a louky, ale díky termoregulaci jsou oproti ještěrkám schopni žít, a především fungovat i v těch nejsevernějších a nejchladnějších oblastech Aurionthu. Jejich tělo v těchto oblastech, však vyžaduje extrémní přísun živin, aby mohlo z čeho vytvářet teplo.
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
            Více najdete na podstránce <a href="/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>
        </p>
    </section>

<!--
    <div class="section-divider"></div>

    <section id="snake-humanoid">
        <ResidentSection
            title="Tŕoidy"
            key="troidyShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk ?']}
            linguistic={['Tŕoidy', 'hadí člověk']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p class="heading">
            Společnost
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Více najdete na podstránce <a href="/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>
        </p>
    </section>
    
    <div class="section-divider"></div>

    <section id="hybrid-humanoid">
        <ResidentSection
            title="Hörtigc?"
            key="hortigcShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk ?']}
            linguistic={['', '']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p class="heading">
            Společnost
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Více najdete na podstránce <a href="/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>
        </p>
    </section>
    
    <div class="section-divider"></div>

    <section id="slime-humanoid">
        <ResidentSection
            title="Slionith"
            key="slionithShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk ?']}
            linguistic={['', '']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p class="heading">
            Společnost
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Více najdete na podstránce <a href="/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>
        </p>
    </section>

    <div class="section-divider"></div>

    <section id="otter-humanoid">
        <ResidentSection
            title="O’Zimus"
            key="oZimusShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk ?']}
            linguistic={['', '']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p class="heading">
            Společnost
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Více najdete na podstránce <a href="/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>
        </p>
    </section>
    
    <div class="section-divider"></div>
    
    <section id="shark-humanoid">
        <ResidentSection
            title="O’Erim"
            key="oErimShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk ?']}
            linguistic={['', '']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p class="heading">
            Společnost
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Více najdete na podstránce <a href="/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>
        </p>
    </section>
    
    <div class="section-divider"></div>
    
    <section id="coral-humanoid">
        <ResidentSection title="O-de’Holl" key="oDeHollShapes" />
    </section>
    
    <div class="section-divider"></div>
    
    <section id="cetacean-humanoid">
        <ResidentSection
            title="O’Cūrr"
            key="oCurrShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk ?']}
            linguistic={['', '']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p class="heading">
            Společnost
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Více najdete na podstránce <a href="/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>
        </p>
    </section>
    
    <div class="section-divider"></div>
    
    <section id="octopus-humanoid">
        <ResidentSection
            title="O-yu’Fklip"
            key="oYuFklipShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk ?']}
            linguistic={['', '']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p class="heading">
            Společnost
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Více najdete na podstránce <a href="/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>
        </p>
    </section>
    
        <div class="section-divider"></div>
    
    <section id="jellyfish-humanoid">
        <ResidentSection
            title="O’Dōttey"
            key="oDotteyShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk ?']}
            linguistic={['', '']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p class="heading">
            Společnost
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Více najdete na podstránce <a href="/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>
        </p>
    </section>
    
    <div class="section-divider"></div>
    
    <section id="needle-ear-humanoid">
        <ResidentSection
            title="Elifip"
            key="elifipShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk ?']}
            linguistic={['', '']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p class="heading">
            Společnost
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Více najdete na podstránce <a href="/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>
        </p>
    </section>
    
    <div class="section-divider"></div>
    
    <section id="dragon-humanoid">
        <ResidentSection
            title="Drahikânus"
            key="DrahikanusShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk ?']}
            linguistic={['', '']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p class="heading">
            Společnost
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Více najdete na podstránce <a href="/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>
        </p>
    </section>
    
    <div class="section-divider"></div>
    
    <section id="pig-humanoid">
        <ResidentSection
            title="Tureo’Gallos"
            key="gallosShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk ?']}
            linguistic={['', '']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p class="heading">
            Společnost
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Více najdete na podstránce <a href="/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>
        </p>
    </section>
    
    <div class="section-divider"></div>
    
    <section id="cow-humanoid">
        <ResidentSection
            title="Tureo’Munos"
            key="munosShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk ?']}
            linguistic={['', '']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p class="heading">
            Společnost
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Více najdete na podstránce <a href="/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>
        </p>
    </section>
    
    <div class="section-divider"></div>
    
    <section id="orc-like-humanoid">
        <ResidentSection
            title="Orc’Like"
            key="orcLikeShapes"
        />

        <ClassificationTable
            scientific={['śemmeth ?', 'člověk ?']}
            linguistic={['', '']}
            popular={[['', '']]}
        />

        <p class="heading">
            Anatomický popis
        </p>
        <p class="heading">
            Rozšiřování
        </p>
        <p class="heading">
            Společnost
        </p>
        <p class="heading">
            Magické vlastnosti
        </p>
        <p class="heading">
            Původ slova
        </p>
        <p>
            Více najdete na podstránce <a href="/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>
        </p>
    </section>
-->
</section>