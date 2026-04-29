<script>
	import logo from '$lib/assets/images/logo/aurionth-logo.svg';
	import { base } from '$app/paths';
</script>

<section class="hero">
	<p class="hero-eyebrow">Fe pêrpetumo Lumôr</p>
	
	<img src={logo} alt="Aurionth Logo" class="hero-logo" />
	
	<div class="hero-divider"></div>
	<p class="hero-subtitle">
		Svět, který nepamatuje počátek, ale nese stopy biliónů let.
	</p>

	<div class="hero-cta">
		<a href="{base}/about/project" class="btn btn-primary">
			––––––––––––<br>
			O projektu<br>
			––––––––––––
		</a>
		<a href="{base}/about/me" class="btn btn-primary">
			––––––––––––<br>
			O tvůrci<br>
			––––––––––––
		</a>
	</div>
</section>