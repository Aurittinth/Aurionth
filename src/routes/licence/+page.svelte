<script>
    import '$lib/assets/css/licence.css';
    import czech_flag from '$lib/assets/images/licence/czech_flag.svg';
    import english_flag from '$lib/assets/images/licence/english_flag.svg';
    import { base } from '$app/paths';
</script>

<section class="licence">
    <span id="uptitle">Rozcestník</span>
    <h1 id="signpost">Licence</h1>
    <span id="subtitle">Práva tohoto projektu</span>

    <br><br><br>

    <div class="licence-grid-table">
        <a href="{base}/licence/czech">
            <div class="licence-card">
                <img src={czech_flag} alt="Česká vlajka" />
                <div class="licence-card-text">
                    <span class="card-title">České znění</span>
                    <span class="card-desc">Czech version</span>
                </div>
            </div>
        </a>
        <a href="{base}/licence/english">
            <div class="licence-card">
                <img src={english_flag} alt="Anglická vlajka" />
                <div class="licence-card-text">
                    <span class="card-title">Anglické znění</span>
                    <span class="card-desc">English version</span>
                </div>
            </div>
        </a>
    </div>
</section>