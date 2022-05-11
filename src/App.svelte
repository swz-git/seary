<script>
  import stylesheet from "./style.css";
  import WebFeed from "./Components/Web/Feed.svelte";
  import ImagesFeed from "./Components/Images/Feed.svelte";
  document.title = window.env.APPNAME;
  document.setFavicon("/assets/search_icon.svg");

  const urlParams = new URLSearchParams(window.location.search);
  let searchInput = urlParams.get("q");
  let category = urlParams.get("c") || "Web";

  document.title = [searchInput, category.toLowerCase(), window.env.APPNAME]
    .filter((item) => item != null)
    .join(" - ");

  let feed = [];
  let resultTime = 0;
  let currentlyLoading = false;
  let lastSearch = "";

  async function search(term) {
    let startTime = new Date().getTime();
    lastSearch = term;
    currentlyLoading = true;
    let config = {
      q: term,
      pageno: 1,
      time_range: "None",
      language: "en-US",
      format: "json",
      engines:
        category === "Web"
          ? "google,bing,brave"
          : category === "Images"
          ? "google images,bing images,qwant images"
          : "",
    };
    if (category === "Web") {
      config.category_general = 1;
    }
    if (category === "Images") {
      config.category_images = 1;
    }
    let req = await fetch(`https://${window.env.SEARXDOMAIN}/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(config),
    }).catch((e) => {
      currentlyLoading = false;
      throw e;
    });
    currentlyLoading = false;
    let data = await req.json();
    let endTime = new Date().getTime();
    feed = data.results;
    resultTime = endTime - startTime;
    console.log;
  }

  if (searchInput) {
    search(searchInput);
  }

  function updateSearch(query = lastSearch, cat = category) {
    window.location = `/?${new URLSearchParams({
      q: query,
      c: cat,
    }).toString()}`;
  }

  function keydown(e) {
    if (e.key === "Enter") {
      updateSearch(e.target.value);
    }
  }

  function web() {
    category = "Web";
    updateSearch();
  }
  function images() {
    category = "Images";
    updateSearch();
    // window.location = `https://duck.com/?q=${lastSearch}&ia=images&iax=images`;
  }
</script>

<main>
  <header>
    <div class="topHeader">
      <p class="title">{window.env.APPNAME}</p>
      <input type="text" on:keydown={keydown} value={searchInput} />
      <img src="/assets/search_icon.svg" class="search" alt="Search" />
    </div>
    <div class="bottomHeader">
      <p class={category === "Web" ? "active" : ""} on:click={web}>Web</p>
      <p class={category === "Images" ? "active" : ""} on:click={images}>
        Images
      </p>
    </div>
  </header>
  <div class="content">
    {#if currentlyLoading}
      <h1>Loading results</h1>
    {/if}
    {#if !currentlyLoading}
      {#if category === "Web"}
        <WebFeed data={feed} {resultTime} />
      {/if}
      {#if category === "Images"}
        <ImagesFeed data={feed} {resultTime} />
      {/if}
    {/if}
  </div>
</main>

<link rel="stylesheet" type="text/css" href={stylesheet} />
