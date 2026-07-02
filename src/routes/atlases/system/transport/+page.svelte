<script>
    import '$styles/transport.css';

    import TransportGallery from '$components/atlas/system/transport/TransportGallery.svelte';

    import { base } from '$app/paths';

    const tableData = [
        { categoryCode: '10',   czech: 'informační',    english: 'informational',   nodjezchna: 'Inphonigciy',      codeID: '10-IPH-NULL-000' },
        { categoryCode: '11',   czech: 'směrodatné',    english: 'directional',     nodjezchna: 'Dīdrânnoy',        codeID: '11-IPH-DIDR-000' },
        { categoryCode: '12',   czech: 'identifikační', english: 'identification',  nodjezchna: 'Yndefayoniy',      codeID: '12-IPH-YNDE-000' },
        { categoryCode: '13',   czech: 'oblastní',      english: 'regional',        nodjezchna: 'Torianjia',        codeID: '13-IPH-TORI-000' },
        { categoryCode: '20',   czech: 'výstražné',     english: 'warning',         nodjezchna: 'Aleritiy',         codeID: '20-ALE-NULL-000' },
        { categoryCode: '30',   czech: 'přednostní',    english: 'priority',        nodjezchna: 'Uriagoy',          codeID: '30-URI-NULL-000' },
        { categoryCode: '40',   czech: 'mocenské',      english: 'authoritative',   nodjezchna: 'Gigaristoriy',     codeID: '40-GIA-NULL-000' },
        { categoryCode: '41',   czech: 'příkazové',     english: 'command',         nodjezchna: 'Edureiyiy',        codeID: '41-GIA-EDUR-000' },
        { categoryCode: '42',   czech: 'zákazové',      english: 'prohibitory',     nodjezchna: 'Arôtagciy',        codeID: '42-GIA-ARTA-000' },
        { categoryCode: '50',   czech: 'pozemní',       english: 'ground',          nodjezchna: 'Laśaenderniy',     codeID: '50-LAD-NULL-000' },
        { categoryCode: '51',   czech: 'vodorovné',     english: 'horizontal',      nodjezchna: 'Horizontiy',       codeID: '51-LAD-HORI-000' },
        { categoryCode: '52',   czech: 'sloupkové',     english: 'columnar',        nodjezchna: 'Fillariy',         codeID: '52-LAD-FILL-000' },
        { categoryCode: '53',   czech: 'ruční',         english: 'hand-held',       nodjezchna: 'Delôpiye',         codeID: '53-LAD-DELO-000' },
        { categoryCode: '54',   czech: 'ostatní',       english: 'miscellaneous',   nodjezchna: 'Edoray',           codeID: '54-LAD-EDOR-000' },
        { categoryCode: '60',   czech: 'světelné',      english: 'light-signal',    nodjezchna: 'Lumôris',          codeID: '60-LUM-NULL-000' },
        { categoryCode: '70',   czech: 'dodatkové',     english: 'supplementary',   nodjezchna: 'Zapraway',         codeID: '70-ZAP-NULL-000' },
        { categoryCode: '71',   czech: 'informativní',  english: 'informative',     nodjezchna: 'Inphonigciyay',    codeID: '71-ZAP-IPHO-000' },
        { categoryCode: '72',   czech: 'úsekové',       english: 'sectional',       nodjezchna: 'Eronikiy',         codeID: '72-ZAP-ERON-000' },
        { categoryCode: '73',   czech: 'ostatní',       english: 'miscellaneous',   nodjezchna: 'Edoray',           codeID: '73-ZAP-EDOR-000' }
    ];
</script>

<section class="traffic-atlas">
    <section class="opening">
        <h1>Dopravní značky</h1>

        <p>Dopravní značky patří mezi nejrozšířenější formu vizuální komunikace v silničním provozu – soustavu standardizovaných piktogramů, barev a tvarů, jejíž úkolem je předávat účastníkům provozu informace bez ohledu na jazyk, věk či úroveň gramotnosti. Jejich primárním účelem je zajistit bezpečnost a plynulost provozu, a to jak preventivně (upozorněním na nebezpečí), tak direktivně (stanovením závazných pravidel).</p>
        
        <p>Aby byl systém značek přehledný a rozšiřitelný, je rozdělen do sedmi hlavních kategorií podle svého primárního účelu: <b>informační</b> (dále členěné na <i>směrodatné</i>, <i>identifikační</i> a <i>oblastní</i>), <b>výstražné</b>, <b>přednostní</b>, <b>mocenské</b> (<i>příkazové</i> a <i>zákazové</i>), <b>pozemní</b> (<i>vodorovné</i>, <i>sloupkové</i>, <i>ruční</i> a <i>ostatní</i>), <b>světelné</b> a <b>dodatkové</b> (<i>informativní</i>, <i>úsekové</i> a <i>ostatní</i>). Každá kategorie i podkategorie nese vlastní dvouciferný kód, na jehož základě je odvozeno jednotné označení <span class="text-code">Kód ID</span> — identifikátor umožňující jednoznačné odkazování na konkrétní značku napříč celým seznamem.</p>
        
        <p>Následující klikací seznam shrnuje všechny kategorie a jejich novorodský ekvivalent; níže v galerii pak najdete jednotlivé značky, mapové a jiné piktogramy užívané v silničním provozu i souvisejících odvětvích dopravy.</p>

        <section class="table-section">
            <table class="table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>České</th>
                        <th>Anglické</th>
                        <th>Novorodské</th>
                        <th>Kód</th>
                    </tr>
                </thead>
                <tbody>
                    {#each tableData as row}
                        <tr>
                            <td><span class="code">{row.categoryCode}</span></td>
                            <td>{row.czech}</td>
                            <td>{row.english}</td>
                            <td>{row.nodjezchna}</td>
                            <td><span class="code-id">{row.codeID}</span></td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </section>
    </section>

    <section class="transport-gallery">
        <TransportGallery />
    </section>
</section>
