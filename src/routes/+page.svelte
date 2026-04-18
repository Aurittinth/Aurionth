<script>
	import logo from '../lib/assets/images/logo/aurionth-logo.svg';
	import { base } from '$app/paths';
</script>

<section class="hero">
	<p class="hero-eyebrow">
		Fe pêrpetumo Lumôr<br> <!-- ◆ &#9670; -->
		V neustálém světle
	</p>
	
	<img src={logo} alt="Aurionth Logo" class="hero-logo" />
	
	<div class="hero-divider"></div>
	<p class="hero-subtitle">
		Svět, který nepamatuje počátek, ale nese stopy biliónů let.
	</p>

	<div class="hero-cta">
		<a href="{base}/" class="btn btn-primary">Vstoupit do světa</a>
		<a href="{base}/" class="btn btn-outline">Procházet atlasy</a>
	</div>
</section>
