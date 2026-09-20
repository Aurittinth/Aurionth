<script>
    import '$styles/calculate/time.css';

    // Aurionthský čas
    let ath_years = $state(0);
    let ath_mounths = $state(0);
    let ath_weeks = $state(0);
    let ath_days = $state(0);
    let ath_hours = $state(0);
    let ath_minutes = $state(0);
    let ath_seconds = $state(0);

    // Zemský čas
    let eth_years = $state(0);
    let eth_mounths = $state(0);
    let eth_weeks = $state(0);
    let eth_days = $state(0);
    let eth_hours = $state(0);
    let eth_minutes = $state(0);
    let eth_seconds = $state(0);

    // Konstanty pro délky jednotek v sekundách
    const ETH_SEC_MIN = 60;
    const ETH_SEC_HOUR = 3600;
    const ETH_SEC_DAY = 86400;
    const ETH_SEC_MONTH = 30.4375 * 86400;
    const ETH_SEC_YEAR = 365.25 * 86400;

    const ATH_SEC_MIN = 100;
    const ATH_SEC_HOUR = 10000;
    const ATH_SEC_DAY = 400000;
    const ATH_SEC_MONTH = 12400000;
    const ATH_SEC_YEAR = 297600000;

    // 1. PŘEVOD: AURIONTH -> ZEMĚ
    let total_ath_seconds = $derived(
        (ath_years * ATH_SEC_YEAR) +
        (ath_mounths * ATH_SEC_MONTH) +
        (ath_weeks * 8 * ATH_SEC_DAY) +
        (ath_days * ATH_SEC_DAY) +
        (ath_hours * ATH_SEC_HOUR) +
        (ath_minutes * ATH_SEC_MIN) +
        ath_seconds
    );

    let total_eth_converted = $derived(total_ath_seconds * (8 / 9));

    let eth_res = $derived.by(() => {
        let remainder = total_eth_converted;

        const r = Math.floor(remainder / ETH_SEC_YEAR);
        remainder %= ETH_SEC_YEAR;

        const m = Math.floor(remainder / ETH_SEC_MONTH);
        remainder %= ETH_SEC_MONTH;

        const d = Math.floor(remainder / ETH_SEC_DAY);
        remainder %= ETH_SEC_DAY;

        const h = Math.floor(remainder / ETH_SEC_HOUR);
        remainder %= ETH_SEC_HOUR;

        const min = Math.floor(remainder / ETH_SEC_MIN);
        const s = Math.floor(remainder % ETH_SEC_MIN);

        return { r, m, d, h, min, s };
    });

    // 2. PŘEVOD: ZEMĚ -> AURIONTH
    let total_eth_seconds = $derived(
        (eth_years * ETH_SEC_YEAR) +
        (eth_mounths * ETH_SEC_MONTH) +
        (eth_weeks * 7 * ETH_SEC_DAY) +
        (eth_days * ETH_SEC_DAY) +
        (eth_hours * ETH_SEC_HOUR) +
        (eth_minutes * ETH_SEC_MIN) +
        eth_seconds
    );

    let total_ath_converted = $derived(total_eth_seconds * 0.01125);

    let ath_res = $derived.by(() => {
        let remainder = total_ath_converted;

        const r = Math.floor(remainder / ATH_SEC_YEAR);
        remainder %= ATH_SEC_YEAR;

        const m = Math.floor(remainder / ATH_SEC_MONTH);
        remainder %= ATH_SEC_MONTH;

        const d = Math.floor(remainder / ATH_SEC_DAY);
        remainder %= ATH_SEC_DAY;

        const h = Math.floor(remainder / ATH_SEC_HOUR);
        remainder %= ATH_SEC_HOUR;

        const min = Math.floor(remainder / ATH_SEC_MIN);
        const s = Math.floor(remainder % ATH_SEC_MIN);

        return { r, m, d, h, min, s };
    });
</script>

<div class="converter-wrapper">
    <header class="header">
        <h1>Převodník času</h1>
        <p class="subtitle">Interaktivní přepočet mezi časovými soustavami Zemi a Aurionthu</p>
    </header>

    <!-- Referenční informace -->
    <section class="info-card">
        <summary>Přehled jednotek a vzorců převodu</summary>
        <div class="info-grid">
            <div class="info-section">
                <h3>Srovnání jednotek</h3>
                <table class="units-table">
                    <tbody>
                        <tr>
                            <td>1 rok</td>
                            <td>12 m<sub>Z</sub></td>
                            <td>24 m<sub>A</sub></td>
                        </tr>
                        <tr>
                            <td>1 měsíc</td>
                            <td>28–31 d<sub>Z</sub></td>
                            <td>31 d<sub>A</sub></td>
                        </tr>
                        <tr>
                            <td>1 týden</td>
                            <td>7 d<sub>Z</sub></td>
                            <td>8 d<sub>A</sub></td>
                        </tr>
                        <tr>
                            <td>1 den</td>
                            <td>24 h<sub>Z</sub></td>
                            <td>40 h<sub>A</sub></td>
                        </tr>
                        <tr>
                            <td>1 hodina</td>
                            <td>60 min<sub>Z</sub></td>
                            <td>100 min<sub>A</sub></td>
                        </tr>
                        <tr>
                            <td>1 minuta</td>
                            <td>60 s<sub>Z</sub></td>
                            <td>100 s<sub>A</sub></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="info-section">
                <h3>Matematický vztah</h3>
                Základ:
                <div class="formula">T = 1 s</div>
                Vzorce:
                <div class="formula">T<sub>A</sub> = T<sub>Z</sub> &times; 0.01125</div>
                <div class="formula">T<sub>Z</sub> = T<sub>A</sub> &times; (8 / 9)</div>
            </div>
        </div>
    </section>

    <!-- Hlavní převodníky -->
    <div class="converters-grid">
        <!-- Aurionth -> Země -->
        <div class="converter-card">
            <h2>Aurionthský čas &rarr; Zemský</h2>
            
            <div class="inputs">
                <div class="field"><label for="ath_y">ROK (r<sub>A</sub>)</label><input id="ath_y" type="number" bind:value={ath_years} min="0"></div>
                <div class="field"><label for="ath_m">MĚSÍC (m<sub>A</sub>)</label><input id="ath_m" type="number" bind:value={ath_mounths} min="0"></div>
                <div class="field"><label for="ath_w">TÝDEN (t<sub>A</sub>)</label><input id="ath_w" type="number" bind:value={ath_weeks} min="0"></div>
                <div class="field"><label for="ath_d">DEN (d<sub>A</sub>)</label><input id="ath_d" type="number" bind:value={ath_days} min="0"></div>
                <div class="field"><label for="ath_h">HODINA (h<sub>A</sub>)</label><input id="ath_h" type="number" bind:value={ath_hours} min="0"></div>
                <div class="field"><label for="ath_min">MINUTA (min<sub>A</sub>)</label><input id="ath_min" type="number" bind:value={ath_minutes} min="0"></div>
                <div class="field"><label for="ath_s">SEKUNDA (s<sub>A</sub>)</label><input id="ath_s" type="number" bind:value={ath_seconds} min="0"></div>
            </div>

            <div class="result-box">
                <h3>Ekvivalent v zemském čase:</h3>
                <div class="result-grid">
                    <div><span>{eth_res.r}</span> r<sub>Z</sub></div>
                    <div><span>{eth_res.m}</span> m<sub>Z</sub></div>
                    <div><span>{eth_res.d}</span> d<sub>Z</sub></div>
                    <div><span>{eth_res.h}</span> h<sub>Z</sub></div>
                    <div><span>{eth_res.min}</span> min<sub>Z</sub></div>
                    <div><span>{eth_res.s}</span> s<sub>Z</sub></div>
                </div>
            </div>
        </div>

        <!-- Země -> Aurionth -->
        <div class="converter-card">
            <h2>Zemský čas &rarr; Aurionthský</h2>
            
            <div class="inputs">
                <div class="field"><label for="eth_y">ROK (r<sub>Z</sub>)</label><input id="eth_y" type="number" bind:value={eth_years} min="0"></div>
                <div class="field"><label for="eth_m">MĚSÍC (m<sub>Z</sub>)</label><input id="eth_m" type="number" bind:value={eth_mounths} min="0"></div>
                <div class="field"><label for="eth_w">TÝDEN (t<sub>Z</sub>)</label><input id="eth_w" type="number" bind:value={eth_weeks} min="0"></div>
                <div class="field"><label for="eth_d">DEN (d<sub>Z</sub>)</label><input id="eth_d" type="number" bind:value={eth_days} min="0"></div>
                <div class="field"><label for="eth_h">HODINA (h<sub>Z</sub>)</label><input id="eth_h" type="number" bind:value={eth_hours} min="0"></div>
                <div class="field"><label for="eth_min">MINUTA (min<sub>Z</sub>)</label><input id="eth_min" type="number" bind:value={eth_minutes} min="0"></div>
                <div class="field"><label for="eth_s">SEKUNDA (s<sub>Z</sub>)</label><input id="eth_s" type="number" bind:value={eth_seconds} min="0"></div>
            </div>

            <div class="result-box">
                <h3>Ekvivalent v aurionthském čase:</h3>
                <div class="result-grid">
                    <div><span>{ath_res.r}</span> r<sub>A</sub></div>
                    <div><span>{ath_res.m}</span> m<sub>A</sub></div>
                    <div><span>{ath_res.d}</span> d<sub>A</sub></div>
                    <div><span>{ath_res.h}</span> h<sub>A</sub></div>
                    <div><span>{ath_res.min}</span> min<sub>A</sub></div>
                    <div><span>{ath_res.s}</span> s<sub>A</sub></div>
                </div>
            </div>
        </div>
    </div>
</div>