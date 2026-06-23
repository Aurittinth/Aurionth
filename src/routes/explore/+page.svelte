<script>
    import { base } from '$app/paths';

    import blindAurionth from '$images/galery/Aurionth-blind-map.svg';
</script>

<header class="atlas-header">
    <nav>
        <ul class="sec-nav">
            <li><a href="#opening">Úvod</a></li>
        </ul>
    </nav>
</header>

<section class="explore">
    <section id="opening">
        <h1>Prozkoumej Aurionth</h1>
        <p>
            Nevíte, kde začít? Aurionth je rozsáhlý svět plný míst, bytostí, jazyků, kultur, systémů a příběhů. Tahle stránka slouží jako klidný rozcestník: vyberte si, co vás právě zajímá, a nechte se navést dál.
        </p>

        <section class="explore-links">
            <div class="box">
                <a href="/about/project">Chci pochopit, co je to Aurionth</a>
                <p>Začněte u samotného projektu, jeho podstaty, vzniku a smyslu.</p>
            </div>
            <div class="box">
                <a href="/atlases">Chci vstoupit do světa</a>
                <p>Hlavní knihovna vědění: geografie, život, magie, civilizace, bytosti a systémy.</p>
            </div>
            <div class="box">
                <a href="/atlases/civilization/resident">Chci poznat obyvatele</a>
                <p>Rasy, druhy, poddruhy a základní pojmy života na Aurionthu.</p>
            </div>
            <div class="box">
                <a href="#map">Chci vidět mapu</a>
                <p>Slepá mapa Aurionthu a první prostorová představa o světě.</p>
            </div>
            <div class="box">
                <a href="/languages">Chci jazyky</a>
                <p>Jazykové části projektu, slovníky a lingvistika. Zatím spíš připravovaná sekce.</p>
            </div>
            <div class="box">
                <a href="/study-resources">Chci studijní poznámky</a>
                <p>Vedlejší znalostní část webu: programování, předměty a poznámky.</p>
            </div>
        </section>

        <div id="map" class="map">
            <img src={blindAurionth} alt="Slepá mapa Aurionthu" loading="lazy" />
        </div>

        <p>Pokud jste zde poprvé, začněte stránkou O projektu. Pokud už chcete rovnou číst svět samotný, pokračujte do Atlasů. A pokud hledáte nejkonkrétnější živý vstup, otevřete Obyvatele.</p>
    </section>
</section>