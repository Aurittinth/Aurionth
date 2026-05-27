<script>
    import '$styles/atlas.css';

    import { ResidentSection } from '$components/atlas/civilization/resident';
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
        <ResidentSection title="Humikus" key={humikusShapes}>
            <p>Humikové, jinak též Lidé, představují nejrozšířenější a nejadaptabilnější linii člověka na Aurionthu. Jsou první linií, která dokázala kráčet napříč kontinentem a také první plout po mořích. Dokázala přetvářet prostředí podle svých potřeb i představ a přežít tak i v nehostinných krajích. Díky mořeplavectví se stali prvními lidmi, kteří osídlili vzdálené ostrůvky a ostrovy, čímž položili základy mnoha pozdějším civilizacím.</p>
            <p>Jejich tělesná stavba nevyniká žádnou extrémní specializací. Nemají mohutné svalstvo, tvrdé kosti či pra-zvířecí instinkt. A přesto se dokázali dostat tak vysoko, jenom díky své adaptabilitě a „normálnosti“. Humikové nejsou bytostmi jedné krajiny – jsou většinou kontinentu. Dokázali přežít v mrazech, pralesích, pustinách o na pobřeží tehdejších vod. Tam kde jiné linie potřebovaly více dokonalé podmínky, Humikové se zkrátka přizpůsobili.</p>
            <p>Jejich evoluce byla vedena schopností improvizace, strategie a neustálého hledání nových řešení. Nebyli nejsilnějšími, ale naučili se využívat prostředí, nástroje i vlastní mysl ke svému přežití. Zatímco jiné linie spoléhaly na své fyzické přednosti a adaptací opovrhovaly, Humikové se ji naučili využívat jako svou největší sílu. Města nevznikaly silou vládce, ale ze zkušeností starších a z nových poznatků.</p>
            <p>Vývoj Humiků se táhne skrze nespočet generací, které se po statisíciletí měnily, zdokonalovaly a přetvářely. Každá generace nesla kus minulosti a kus nové lepší budoucnosti. Díky této neustálé proměně se Humikové stali největší, nejrozšířenější a nejrozmanitější linií člověka.</p>
            <p>I přes svou adaptační vyspělost a rozmanitost se Humikové nedokázali napojit na sílu přírody. Magie, proudící celým Aurionthem tak musela zůstat záhadou a novou příležitostí pro jinou linii.</p>
        </ResidentSection>
    </section>
    
    <div class="section-divider"></div>
    
    <section class="wolf-human">
        <ResidentSection title="Mannoŕ" key={mannorShapes}></ResidentSection>
    </section>

    <div class="section-divider"></div>

    <section class="bear-human">
        <ResidentSection title="Monûlus" key={monulusShapes}></ResidentSection>
    </section>
    
    <div class="section-divider"></div>
    
    <section class="reptile-human">
        
        <ResidentSection title="Luzintŕ" key={luzintrShapes}></ResidentSection>

        <div class="section-divider"></div>

        <ResidentSection title="Luziny" key={luzinyShapes}></ResidentSection>

        <div class="section-divider"></div>

        <ResidentSection title="N’Tŕoidy" key={nTroidyShapes}></ResidentSection>
    
    </section>

    <div class="section-divider"></div>

    <ResidentSection title="Hörtigc?" key={hortigcShapes}></ResidentSection>
    
    <div class="section-divider"></div>

    <ResidentSection title="Slionith" key={slionithShapes}></ResidentSection>

    <div class="section-divider"></div>

    <section class="sea-human">
        
        <ResidentSection title="Oceliś" key={ocelisShapes}></ResidentSection>

        <section class="otter-human">
            <ResidentSection title="O’Zimus" key={oZimusShapes}></ResidentSection>
        </section>
    
        <div class="section-divider"></div>
    
        <section class="shark-human">
            <ResidentSection title="O’Erim" key={oErimShapes}></ResidentSection>
        </section>
    
        <div class="section-divider"></div>
    
        <section class="coral-human">
            <ResidentSection title="O-de’Holl" key={oDeHollShapes}></ResidentSection>
        </section>
    
        <div class="section-divider"></div>
    
        <section class="cetacean-human">
            <ResidentSection title="O’Cūrr" key={oCurrShapes}></ResidentSection>
        </section>
    
        <div class="section-divider"></div>
    
        <section class="octopus-human">
            <ResidentSection title="O-yu’Fklip" key={oYuFklipShapes}></ResidentSection>
        </section>
    
        <div class="section-divider"></div>
    
        <section class="jellyfish-human">
            <ResidentSection title="O’Dōttey" key={oDotteyShapes}></ResidentSection>
        </section>
    
    </section>
    
    <div class="section-divider"></div>
    
    <section class="needle-ear-human">
        <ResidentSection title="Elifip" key={elifipShapes}></ResidentSection>
    </section>
    
    <div class="section-divider"></div>
    
    <section class="dragon-human">
        <ResidentSection title="Drahius’Kânus" key={drahiusKanusShapes}></ResidentSection>
    </section>
    
    <div class="section-divider"></div>
    
    <section class="domesticated-animal-himan">

        <ResidentSection title="Tureo" key={tureoShapes}></ResidentSection>
    
        <section class="pig-human">
            <ResidentSection title="Tureo’Gallos" key={TureoMunosShapes}></ResidentSection>
        </section>
    
        <div class="section-divider"></div>
    
        <section class="cow-human">
            <ResidentSection title="Tureo’Munos" key={TureoMunosShapes}></ResidentSection>
        </section>
    
    </section>
    
    <div class="section-divider"></div>
    
    <section class="orc-like-human">
        <ResidentSection title="Orc’Like" key={OrcLikeShapes}></ResidentSection>
    </section>

</section>