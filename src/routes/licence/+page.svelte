<script>
    import '$lib/assets/css/licence.css';
    import czech_flag from '$lib/assets/images/galery/licence/czech_flag.svg';
    import english_flag from '$lib/assets/images/galery/licence/english_flag.svg';
    import { base } from '$app/paths';
</script>

<section class="licence">
    <span class="uptitle">Rozcestník</span>
    <h1 class="index-title">Licence</h1>
    <span class="subtitle">Práva tohoto projektu</span>

    <br><br><br>

    <div class="licence-grid">
        <a href="{base}/licence/czech">
            <div class="licence-card">
                <img src={czech_flag} alt="Česká vlajka" />
                <span class="card-title">České znění</span>
                <span class="card-desc">Czech version</span>
            </div>
        </a>
        <a href="{base}/licence/english">
            <div class="licence-card">
                <img src={english_flag} alt="Anglická vlajka" />
                <span class="card-title">Anglické znění</span>
                <span class="card-desc">English version</span>
            </div>
        </a>
    </div>
</section>