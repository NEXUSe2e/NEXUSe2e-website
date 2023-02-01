<div class="img-container" style="justify-content: {justify}">
  <img src={img} alt={alt} class="img" style="height: {`${height}`}px" />
</div>

<script>
export let img

export let alt = ''

export let height = '300'

export let position = 'center'

$: justify = { 'left': 'flex-start', center: 'center', right: 'flex-end' }[position]
</script>

<style>
.img-container {
  display: flex;
  width: 100%;
  max-width: 100%;
}

.img {
  --box-shadow: 4px 4px 8px 4px #e5e7eb;

  max-width: 100%;

  -webkit-box-shadow: var(--box-shadow);
  -moz-box-shadow: var(--box-shadow);
  box-shadow: var(--box-shadow);
}
</style>
