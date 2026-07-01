<script>
    import '$styles/transport.css';

    import signsData from '$data/system/transport/traffic_sign.json';
    import SignGrid from '$components/atlas/system/transport/SignGrid.svelte';

    const imageModules = import.meta.glob(
        '../../../../assets/images/galery/system/transport/*.{svg,png,jpg,jpeg,webp,gif}',
        {
            eager: true,
            import: 'default'
        }
    );

    const transportImages = Object.fromEntries(
        Object.entries(imageModules).map(([path, url]) => [path.split('/').pop(), url])
    );

    function getSignImage(svgPath) {
        const fileName = svgPath?.split(/[\\/]/).pop();

        if (!fileName) {
            return transportImages['placeholder_sign.svg'];
        }

        return transportImages[fileName] ?? transportImages['placeholder_sign.svg'] ?? svgPath;
    }

    const signs = signsData.map((sign) => ({
        ...sign,
        svgPath: getSignImage(sign.svgPath)
    }));

    function formatCategoryTitle(category) {
        return category.charAt(0).toUpperCase() + category.slice(1);
    }

    const categories = [...new Set(signs.map((s) => s.category))];
    const groupedCategories = categories.map((category) => ({
        category,
        title: formatCategoryTitle(category),
        signs: signs.filter((sign) => sign.category === category)
    }));

    let selectedSign = $state(null);

    function handleSignSelect(sign) {
        selectedSign = selectedSign?.ID === sign.ID ? null : sign;
    }
</script>

<div class="transport-list">
    {#each groupedCategories as group (group.category)}
        <section class="transport-category" aria-labelledby={`transport-${group.category}`}>
            <h2 id={`transport-${group.category}`}>{group.title}</h2>
            <SignGrid signs={group.signs} {selectedSign} onSelect={handleSignSelect} />
        </section>
    {/each}
</div>