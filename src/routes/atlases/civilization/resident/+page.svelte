<script>
    import '$styles/atlas.css';
    import { base } from '$app/paths';

    import { ResidentSection } from '$components/atlas/civilization/resident';

    const humikusShapes = [
        { _case: '1', singular: 'Humikus', alterSungular: [''], plural: 'Humici', alterPlural: ['Humikové'] },
        { _case: '2', singular: 'Humika', alterSungular: [''], plural: 'Humiků', alterPlural: [''] },
        { _case: '3', singular: 'Humikovi', alterSungular: [''], plural: 'Humikům', alterPlural: [''] },
        { _case: '4', singular: 'Humika', alterSungular: [''], plural: 'Humiky', alterPlural: [''] },
        { _case: '5', singular: 'Humiku', alterSungular: [''], plural: 'Humici', alterPlural: ['Humikové'] },
        { _case: '6', singular: 'Humikovi', alterSungular: [''], plural: 'Humicích', alterPlural: ['Humikách'] },
        { _case: '7', singular: 'Humikami', alterSungular: [''], plural: 'Humiky', alterPlural: [''] }
    ];
    const mannorShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const monulusShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const luzintrShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const luzinyShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const nTroidyShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const hortigcShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const slionithShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const ocelisShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const oZimusShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const oErimShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const oDeHollShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const oCurrShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const oYuFklipShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const oDotteyShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const elifipShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const drahiusKanusShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const tureoShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const tureoGallosShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const TureoMunosShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
    const OrcLikeShapes = [
        { _case: '1', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '2', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '3', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '4', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '5', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '6', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] },
        { _case: '7', singular: '…', alterSingular: [''], plural: '…', alterPlural: [''] }
    ];
</script>

<section class="atlas-inside">
    <section class="opening">
        <h1>Obyvatelé</h1>
        
        <h2>Základní pojmy a jejich význam</h2>
        
        <p>Hned ze začátku si musíme ujasnit, jak budeme zapisovat pojmy, které se týkají obyvatel.</p>
        <p>Jako první je třeba si uvědomit, že jazyky nám známé jako čeština mají mnohdy jenom jedno pojmenování pro humanoidní postavy, a to slovo  <i>člověk</i>, v množném čísle pak <i>lidé</i>.</p>
        <p>Ačkoli se nám může zdát, že tento pojem je dostačující, pro svět Aurionth je potřeba rozlišovat tento pojem na dvě různé vrstvy, které třeba v angličtině lze částečně vyřešit více slovy.</p>
        <p>Primárním problémem pozemských jazyků, je rozdělení pojmu člověka a humanoida. Na Zemi jsou tyto pojmy chápany jako dvě rozdílné kategorie, přičemž člověk je považován za biologický druh, zatímco humanoid je spíše popisný termín pro tvory, kteří mají podobné rysy jako lidé, ale nejsou jimi z hlediska biologie. V kontextu Aurionthu však tyto pojmy nabývají zcela shodného významu. Je to převážně kvůli přitomnosti takových to tvorů. Oproti Zemi má Aurionth mnohem větší rozmanitost humanoidních ras, takže tyto pojmy nejsou nápomocné.</p>
        <p>Pro jejich rozlišení v češkém jazyce použijeme funkci velkého písmene.</p>
        <p>Když budeme mluvit o <b class="differentiality">Č</b>lověku s velkým č, budeme tím myslet pouze biologickou větech rasy nejvíce se podobající našemi homo sapiens, tedy lidské rase. Když však budeme mluvit o <b class="differentiality">č</b>lověku s malým č, budeme tím myslet jakéhokoliv druha Aurionth’ana (obyvatel Aurionthu).</p>
        <p>To samé platí i pro množný tvar: <b>L</b>idé a <b class="differentiality">l</b>idé.</p>
        <p>Nyní se ale pustme do jejich popisu.</p>
    </section>
    
    <div class="section-divider"></div>
    
    <section class="human">
        <ResidentSection title="Humikus" pattern="Pán" shapes={humikusShapes}>
            <p>Humikové, jinak též Lidé, představují nejrozšířenější a nejadaptabilnější linii člověka na Aurionthu. Jsou první linií, která dokázala kráčet napříč kontinentem a také první plout po mořích. Dokázala přetvářet prostředí podle svých potřeb i představ a přežít tak i v nehostinných krajích. Díky mořeplavectví se stali prvními lidmi, kteří osídlili vzdálené ostrůvky a ostrovy, čímž položili základy mnoha pozdějším civilizacím.</p>
            <p>Jejich tělesná stavba nevyniká žádnou extrémní specializací. Nemají mohutné svalstvo, tvrdé kosti či pra-zvířecí instinkt. A přesto se dokázali dostat tak vysoko, jenom díky své adaptabilitě a „normálnosti“. Humikové nejsou bytostmi jedné krajiny – jsou většinou kontinentu. Dokázali přežít v mrazech, pralesích, pustinách o na pobřeží tehdejších vod. Tam kde jiné linie potřebovaly více dokonalé podmínky, Humikové se zkrátka přizpůsobili.</p>
            <p>Jejich evoluce byla vedena schopností improvizace, strategie a neustálého hledání nových řešení. Nebyli nejsilnějšími, ale naučili se využívat prostředí, nástroje i vlastní mysl ke svému přežití. Zatímco jiné linie spoléhaly na své fyzické přednosti a adaptací opovrhovaly, Humikové se ji naučili využívat jako svou největší sílu. Města nevznikaly silou vládce, ale ze zkušeností starších a z nových poznatků.</p>
            <p>Vývoj Humiků se táhne skrze nespočet generací, které se po statisíciletí měnily, zdokonalovaly a přetvářely. Každá generace nesla kus minulosti a kus nové lepší budoucnosti. Díky této neustálé proměně se Humikové stali největší, nejrozšířenější a nejrozmanitější linií člověka.</p>
            <p>I přes svou adaptační vyspělost a rozmanitost se Humikové nedokázali napojit na sílu přírody. Magie, proudící celým Aurionthem tak musela zůstat záhadou a novou příležitostí pro jinou linii.</p>
        </ResidentSection>
    </section>
    
    <div class="section-divider"></div>
    
    <section class="wolf-human">
        <ResidentSection title="Mannoŕ" pattern="Pán" shapes={mannorShapes}></ResidentSection>
    </section>

    <div class="section-divider"></div>

    <section class="bear-human">
        <ResidentSection title="Monûlus" pattern="Pán" shapes={monulusShapes}></ResidentSection>
    </section>
    
    <div class="section-divider"></div>
    
    <section class="reptile-human">
        
        <ResidentSection title="Luzintŕ" pattern="Pán" shapes={luzintrShapes}></ResidentSection>

        <div class="section-divider"></div>

        <ResidentSection title="Luziny" pattern="Páni" shapes={luzinyShapes}></ResidentSection>

        <div class="section-divider"></div>

        <ResidentSection title="N’Tŕoidy" pattern="Páni" shapes={nTroidyShapes}></ResidentSection>
    
    </section>

    <div class="section-divider"></div>

    <ResidentSection title="Hörtigc?" pattern="Pán" shapes={hortigcShapes}></ResidentSection>
    
    <div class="section-divider"></div>

    <ResidentSection title="Slionith" pattern="Pán" shapes={slionithShapes}></ResidentSection>

    <div class="section-divider"></div>

    <section class="sea-human">
        
        <ResidentSection title="Oceliś" pattern="???" shapes={ocelisShapes}></ResidentSection>

        <section class="otter-human">
            <ResidentSection title="O’Zimus" pattern="???" shapes={oZimusShapes}></ResidentSection>
        </section>
    
        <div class="section-divider"></div>
    
        <section class="shark-human">
            <ResidentSection title="O’Erim" pattern="???" shapes={oErimShapes}></ResidentSection>
        </section>
    
        <div class="section-divider"></div>
    
        <section class="coral-human">
            <ResidentSection title="O-de’Holl" pattern="???" shapes={oDeHollShapes}></ResidentSection>
        </section>
    
        <div class="section-divider"></div>
    
        <section class="cetacean-human">
            <ResidentSection title="O’Cūrr" pattern="???" shapes={oCurrShapes}></ResidentSection>
        </section>
    
        <div class="section-divider"></div>
    
        <section class="octopus-human">
            <ResidentSection title="O-yu’Fklip" pattern="???" shapes={oYuFklipShapes}></ResidentSection>
        </section>
    
        <div class="section-divider"></div>
    
        <section class="jellyfish-human">
            <ResidentSection title="O’Dōttey" pattern="???" shapes={oDotteyShapes}></ResidentSection>
        </section>
    
    </section>
    
    <div class="section-divider"></div>
    
    <section class="needle-ear-human">
        <ResidentSection title="Elifip" pattern="Pán" shapes={elifipShapes}></ResidentSection>
    </section>
    
    <div class="section-divider"></div>
    
    <section class="dragon-human">
        <ResidentSection title="Drahius’Kânus" pattern="Pán" shapes={drahiusKanusShapes}></ResidentSection>
    </section>
    
    <div class="section-divider"></div>
    
    <section class="domesticated-animal-himan">

        <ResidentSection title="Tureo" pattern="Pán" shapes={tureoShapes}></ResidentSection>
    
        <section class="pig-human">
            <ResidentSection title="Tureo’Gallos" pattern="Pán" shapes={TureoMunosShapes}></ResidentSection>
        </section>
    
        <div class="section-divider"></div>
    
        <section class="cow-human">
            <ResidentSection title="Tureo’Munos" pattern="Žena" shapes={TureoMunosShapes}></ResidentSection>
        </section>
    
    </section>
    
    <div class="section-divider"></div>
    
    <section class="orc-like-human">
        <ResidentSection title="Orc’Like" pattern="???" shapes={OrcLikeShapes}></ResidentSection>
    </section>

</section>