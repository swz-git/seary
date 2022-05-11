<script>
  import App from "../../App.svelte";

  export let data;
  let src = data.thumbnail_src || data.img_src;
</script>

{#if data.img_src !== undefined}
  <div class="feedItem">
    <a href={data.img_src}>
      <img
        src={src.startsWith("data:image")
          ? src
          : `https://swz-imageproxy.herokuapp.com/200x/${src}`}
        alt={data.title}
        loading="lazy"
      />
    </a>
    <a href={data.url}
      >{data.title.substring(0, 100) +
        (data.title.length > 100 ? "..." : "")}</a
    >
  </div>
{/if}

<style scoped>
  .feedItem {
    display: flex;
    flex-direction: column;
    margin: 1rem 0px;
    width: min-content;
  }
  img {
    height: 15vh;
    background-color: black;
  }
  a {
    color: var(--color-accent-2);
    text-decoration: none;
    font-size: 0.9rem;
  }
  div:hover > a {
    text-decoration: underline;
  }
</style>
