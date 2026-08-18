<script>
    import '$styles/atlas.css';

    import ResidentSection from '$components/atlas/civilization/resident/ResidentSection.svelte';
    import ClassificationTable from '$components/atlas/ClassificationTable.svelte';

    import { base } from '$app/paths';
</script>


<header class="atlas-header">
    <nav>
        <ul class="sec-nav">
            <li><a href="#hybrid-humanoid"> Kříženci </a></li>
            <li><a href="#pig-humanoid">    Gallos   </a></li>
            <li><a href="#cow-humanoid">    Munos    </a></li>
        </ul>
    </nav>
</header>

<section class="atlas-inside">
    <h1>Obyvatelé - Kříženci</h1>
    
    <section id="hybrid-humanoid">
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
            Více najdete na podstránce <a href="/?" class="link-blocked" onclick={(e) => e.preventDefault()}>[placeholder]</a>.
        </p>
    </section>

    <div class="section-divider"></div>

    <section id="pig-humanoid">
        <ResidentSection
            title="Gallos"
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
            Více najdete na podstránce <a href="{base}/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>.
        </p>
    </section>
    
    <div class="section-divider"></div>
    
    <section id="cow-humanoid">
        <ResidentSection
            title="Munos"
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
            Více najdete na podstránce <a href="{base}/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>.
        </p>
    </section>
</section>