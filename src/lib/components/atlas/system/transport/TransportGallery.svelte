<script>
    import '$styles/transport.css';

    import signsData from '$data/system/transport/traffic_sign.json';
    import SignGrid from '$components/atlas/system/transport/SignGrid.svelte';

    const imageModules = import.meta.glob(
        '../../../../assets/images/galery/system/transport/**/*.{svg,png,jpg,jpeg,webp,gif}',
        {
            eager: true,
            import: 'default'
        }
    );

    const transportImages = Object.fromEntries(
        Object.entries(imageModules).map(([path, url]) => {
            const key = path
                .replace('../../../../assets/images/galery/system/transport/', '')
                .replaceAll('\\', '/');

            return [key, url];
        })
    );

    function normalizeTransportPath(path) {
        return path
            ?.replaceAll('\\', '/')
            .replace(/^.*?galery\/system\/transport\//, '')
            .replace(/^\/+/, '');
    }

    function getSignImage(path) {
        const imagePath = normalizeTransportPath(path);

        if (!imagePath) {
            return transportImages['placeholder.svg'];
        }

        if (transportImages[imagePath]) {
            return transportImages[imagePath];
        }

        return transportImages[`${imagePath}/placeholder.svg`] ?? transportImages['placeholder.svg'] ?? path;
    }

    function normalizeCategory(category) {
        return category.trim().toLocaleLowerCase('cs-CZ');
    }

    function formatCategoryTitle(category) {
        const normalized = normalizeCategory(category);

        return normalized.charAt(0).toLocaleUpperCase('cs-CZ') + normalized.slice(1);
    }

    const signs = signsData.map((sign) => ({
        ...sign,
        categoryKey: normalizeCategory(sign.category),
        imageSrc: getSignImage(sign.path)
    }));

    const categories = [...new Set(signs.map((sign) => sign.categoryKey))];
    const groupedCategories = categories.map((categoryKey) => {
        const groupSigns = signs.filter((sign) => sign.categoryKey === categoryKey);
        const firstSign = groupSigns[0];

        return {
            categoryKey,
            categoryCode: firstSign?.categoryCode ?? categoryKey,
            title: formatCategoryTitle(categoryKey),
            signs: groupSigns
        };
    });

    let selectedSign = $state(null);

    function handleSignSelect(sign) {
        selectedSign = selectedSign?.id === sign.id ? null : sign;
    }
</script>

<div class="transport-list">
    {#each groupedCategories as group (group.categoryKey)}
        <section class="transport-category" aria-labelledby={`transport-${group.categoryCode}`}>
            <h2 id={`transport-${group.categoryCode}`}>{group.title}</h2>
            <SignGrid signs={group.signs} {selectedSign} onSelect={handleSignSelect} />
        </section>
    {/each}
</div>