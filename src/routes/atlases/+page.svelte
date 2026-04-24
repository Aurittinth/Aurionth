<script>
    import image from '$lib/assets/images/galery/placeholder.jpg';
    import { base } from '$app/paths';
</script>

<section class="atlas">
    <span class="uptitle">Rozcestník</span>
    <h1>Atlasy</h1>
    <span class="subtitle">NRD – Svět starý bilióny let.</span>
    
    <section id="opening">
        <h2>Úvod</h2>
        <p>Tato sekce slouží jako takové knihovna vědění o Aurionthu. Zde najdete informace o světě, jeho obyvatelích, historii, kultuře, ale i žichočichů, rostlin, bohů či nudných minerálů.</p>
        <p>Každý z atlasů (odkazů níže) se zabívá jednou „problematikou“ tohoto světa.</p>
        <p>Kupříkladu atlas „Svět“ se zabívá geografickou, klimatickou, kosmologickou, ale i geopolitickou stránkou Aurionthu.</p>
        <br>
        <p>Je to čistě na Vás, co si vyberete za dnešní čtení.</p>
        <br>
        <p><b>PS:</b> Atlasy jsou rozděleny do kategorií, podle toho, čím se zabývají.</p>
    </section>

    <div class="sep"></div>

    <section id="reality">
        <h2>Realita</h2>
        <div class="grid-table">
            <div class="grid-item">
                <a href="{base}/atlases/reality/kosmos">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Kosmos</span>
                        <span class="desc">Otec všeho</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/reality/galaxy">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Galaxie</span>
                        <span class="desc">Neskutečná řeka života</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/reality/planetary-system">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Soustava</span>
                        <span class="desc">Zahrada Therôśu</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/reality/planet">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Planeta</span>
                        <span class="desc">Pohled z nebes</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/reality/country">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Země</span>
                        <span class="desc">Politiky, vztahy, historie</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/reality/region">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Oblasti</span>
                        <span class="desc">Širé pláně či snad úzké řeky</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/reality/city">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Města</span>
                        <span class="desc">Historie tajných uliček</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/reality/strukture">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Struktury</span>
                        <span class="desc">Monumenty tohoto světa</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/reality/item">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Předměty</span>
                        <span class="desc">Drahé i levné</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/reality/mineral">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Minerály</span>
                        <span class="desc">Horniny i drahokami</span>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <div class="sep"></div>

    <section id="life">
        <h2>Život</h2>
        <div class="grid-table">
        
            <div class="grid-item">
                <a href="{base}/atlases/life/animal">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Živočichové</span>
                        <span class="desc">Fauna Aurionthu</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/life/botanic">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Botanika</span>
                        <span class="desc">Flóra Aurionthu</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/life/microorganism">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Mikroorganismus</span>
                        <span class="desc">Bakterie, viry či snad spóry</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/life/illness">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Nemoce</span>
                        <span class="desc">Úzce spjato s organismem</span>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <div class="sep"></div>

    <section id="entity">
        <h2>Bytosti</h2>
        <div class="grid-table">
            <div class="grid-item">
                <a href="{base}/atlases/entity/deity">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Božstvo</span>
                        <span class="desc">Víra ve víšší moc</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/entity/mystic">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Mystika</span>
                        <span class="desc">Vše záhadné, nikoli božské</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/entity/spirituality">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Duchovno</span>
                        <span class="desc">Paranormálno Aurionthu</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/entity/demonlogia">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Démonologie</span>
                        <span class="desc">Démoni a jiné stvůry</span>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <div class="sep"></div>

    <section id="magic">
        <h2>Magie</h2>
        <div class="grid-table">
        
            <div class="grid-item">
                <a href="{base}/atlases/magic/rune">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Runy</span>
                        <span class="desc">Pradávné znaky magie</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/magic/spell">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Zaklínadla</span>
                        <span class="desc">Kouzla, čáry, magie</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/magic/curse">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Kletby</span>
                        <span class="desc">Zlo sneslé magií</span>
                    </div>
                </a>
            </div>
        
            <div class="grid-item">
                <a href="{base}/atlases/magic/ritual">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Rituály</span>
                        <span class="desc">Pradávné tance</span>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <div class="sep"></div>

    <section id="civilization">
        <h2>Civilizace</h2>
        <div class="grid-table">
            <div class="grid-item">
                <a href="{base}/atlases/civilization/resident">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Obyvatelé</span>
                        <span class="desc">Rasy, druhy, poddruhy</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/civilization/culture">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Kultura</span>
                        <span class="desc">Zvyky, víry, svátky</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/civilization/history">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Dějiny</span>
                        <span class="desc">Války, boje, spojenectví</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/civilization/charakter">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Postavy</span>
                        <span class="desc">Legendy, lidí, příběhy</span>
                    </div>
                </a>
            </div>
        
        </div>
    </section>

    <div class="sep"></div>

    <section id="systems">
        <h2>Systémy</h2>
        <div class="grid-table">
            <div class="grid-item">
                <a href="{base}/atlases/system/taxonomia">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Taxonomie</span>
                        <span class="desc">Struktura i dělení</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/system/law_world">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Zákony světa</span>
                        <span class="desc">Funčnost a systémy</span>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <div class="sep"></div>

    <section id="lists">
        <h2>Seznamy</h2>
        <div class="grid-table">
            <div class="grid-item">
                <a href="{base}/atlases/list/name">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Jména</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/list/surname">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Příjmení</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/list/family">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Rody</span>
                    </div>
                </a>
            </div>
            <div class="grid-item">
                <a href="{base}/atlases/list/role">
                    <img src={image} alt="placeholder" width="50%" height="auto" />
                    <div class="item-text">
                        <span class="title">Postavení</span>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <br><br><br>
</section>
