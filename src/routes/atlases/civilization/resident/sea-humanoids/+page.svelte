<script>
    import '$styles/atlas.css';

    import ResidentSection from '$components/atlas/civilization/resident/ResidentSection.svelte';
    import ClassificationTable from '$components/atlas/ClassificationTable.svelte';

    import { base } from '$app/paths';
</script>


<header class="atlas-header">
    <nav>
        <ul class="sec-nav">
            <li><a href="#sea-humanoids">      Mořští lidé </a></li>
            <li><a href="#otter-humanoid">     O’Zimus     </a></li>
            <li><a href="#shark-humanoid">     O’Erim      </a></li>
            <li><a href="#coral-humanoid">     O’de’Holl   </a></li>
            <li><a href="#cetacean-humanoid">  O’Cūrr      </a></li>
            <li><a href="#octopus-humanoid">   O’yu’Fklip  </a></li>
            <li><a href="#jellyfish-humanoid"> O’Dōttey    </a></li>
        </ul>
    </nav>
</header>
<!--
Zimus           člověk vydří
Erim            člověk žraločí
O’de’Holl       člověk korálový
Cūrr            člověk kytovcovití
O’yu’Fklip      člověk chobotnicovití
Dōttey          člověk medúzovití
-->
    
<section class="atlas-inside">
    <h1>Obyvatelé - Mořští lidé</h1>

    <section class="sea-humanoids"></section>

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
            Více najdete na podstránce <a href="{base}/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>.
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
            Více najdete na podstránce <a href="{base}/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>.
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
            Více najdete na podstránce <a href="{base}/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>.
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
            Více najdete na podstránce <a href="{base}/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>.
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
            Více najdete na podstránce <a href="{base}/semmeth-?" class="link-blocked" onclick={(e) => e.preventDefault()}>člověk ?</a>.
        </p>
    </section>
-->
</section>