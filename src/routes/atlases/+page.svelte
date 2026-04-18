<script>
    import image from '$lib/assets/images/galery/placeholder.jpg';
    import { base } from '$app/paths';
</script>

<section class="atlas">
    <h1>Atlases</h1>

    <br><br><br>

    <div class="grid-table">

        <div class="grid-item">
            <a href="{base}/atlases/">
                <img src={image} alt="placeholder" width="50%" height="auto" />
                <p>Atlas živočichů</p>
            </a>
        </div>

        <div class="grid-item">
            <a href="{base}/atlases/">
                <img src={image} alt="placeholder" width="50%" height="auto" />
                <p>živočichové</p>
            </a>
        </div>
    
    </div>

    <br><br><br>
</section>