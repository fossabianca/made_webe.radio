export default ( context, inject ) => {
  // Utility Functions definitions
  const getStrapiImage = ( url ) => process.env.apiUri + url;

  const markdownImage = ( md ) => {
    let re = /(\!\[.*)(\]\(\/)/gm;
    return md.replace( re, "$1](" + process.env.apiUri + "/" );
  }

  const spreakerEmbed = (id, title, type="e", height="200px", theme="dark" ) => {
    const ref = type === "e" ? "e": "s";
    const resource = type === "e" ? "episode_key" : "show_key";
    let spreakerCode =
      `<a class="spreaker-player" href="https://www.spreaker.com/${ref}/${id}" data-resource="${resource}=${id}"
          data-width="100%" data-height="${height}" data-theme="${theme}" data-playlist="true" data-playlist-continuous="false" data-autoplay="false" data-live-autoplay="false" data-chapters-image="true" data-episode-image-position="left" data-hide-logo="false" data-hide-likes="false" data-hide-comments="false" data-hide-sharing="false" data-hide-download="true">Ascolta ${title} su Spreaker.</a>`;
    return spreakerCode;
  }
  const spreakerIframe = ( id, type = "episode", height = "200px", theme = "dark", limited=false) => {
    let key = limited? "key" : "id";
    let spreakerEmbed = `<iframe src="https://widget.spreaker.com/player?${type}_${key}=${id}&theme=${theme}&playlist=true&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=left&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=false" width="100%" height="${height}" frameborder="0"></iframe>`;


    let e =`<iframe src="https://widget.spreaker.com/player?episode_key=1aeAFQK5Y8zu--43678243&theme=dark&playlist=false&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=left&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true" width="100%" height="350px" frameborder="0"></iframe>`
    let s = `<iframe src="https://widget.spreaker.com/player?show_key=1aeAFQK5Y8zu&theme=dark&playlist=false&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=left&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true" width="100%" height="350px" frameborder="0"></iframe>`

    return spreakerEmbed;
  }
  // Inject $hello(msg) in Vue, context and store.
  inject( 'getStrapiImage', getStrapiImage );
  inject( 'markdownImage', markdownImage );
  inject( 'spreakerEmbed', spreakerEmbed );
  inject( 'spreakerIframe', spreakerIframe );
  // For Nuxt <= 2.12, also add 👇
  // context.$getStrapiImage = getStrapiImage;
  // context.$markdownImage = markdownImage;
  // context.$spreakerEmbed = spreakerEmbed;
}


/* esempio di embed pubblico di un episodio
<a class="spreaker-player" href="https://www.spreaker.com/episode/44441160" data-resource="episode_id=44441160" data-width="100%" data-height="350px" data-theme="dark" data-playlist="show" data-playlist-continuous="true" data-autoplay="false" data-live-autoplay="false" data-chapters-image="true" data-episode-image-position="right" data-hide-logo="false" data-hide-likes="false" data-hide-comments="false" data-hide-sharing="false" data-hide-download="false" data-cover="https%3A%2F%2Fd3wo5wojvuv7l.cloudfront.net%2Fimages.spreaker.com%2Fcloudinary%2Fs--5veUI85S--%2Fw_1000%2Ch_800%2Cc_fit%2Cl_text%3ALato_167_bold%3AProgetto%2520MaDe%2Fimages.spreaker.com%2Fdefault%2Fshow-1400x1400-20190801.jpg">Ascolta "Episode 1 - Progetto MaDe" su Spreaker.</a>

<a class="spreaker-player" href="https://www.spreaker.com/show/altre-storie" data-resource="show_id=4737314" data-theme="dark" data-autoplay="false" data-playlist="show" data-width="100%" data-height="400px">Ascolta "Altre/Storie" su Spreaker.</a><script async src="https://widget.spreaker.com/widgets.js"></script>

<a class="spreaker-player" href="https://www.spreaker.com/user/choramedia/episodio-7-il-presente-ha-sempre-ragione" data-resource="episode_id=44345978" data-theme="dark" data-autoplay="false" data-playlist="false" data-width="100%" data-height="200px">Ascolta "Episodio 7: Il presente ha sempre ragione" su Spreaker.</a><script async src="https://widget.spreaker.com/widgets.js"></script>

<a class="spreaker-player" href="https://www.spreaker.com/episode/44441160" data-resource="episode_id=44441160" data-width="100%" data-height="350px" data-theme="dark" data-playlist="false" data-playlist-continuous="false" data-autoplay="false" data-live-autoplay="false" data-chapters-image="true" data-episode-image-position="right" data-hide-logo="false" data-hide-likes="false" data-hide-comments="false" data-hide-sharing="false" data-hide-download="false" data-cover="https%3A%2F%2Fd3wo5wojvuv7l.cloudfront.net%2Fimages.spreaker.com%2Fcloudinary%2Fs--5veUI85S--%2Fw_1000%2Ch_800%2Cc_fit%2Cl_text%3ALato_167_bold%3AProgetto%2520MaDe%2Fimages.spreaker.com%2Fdefault%2Fshow-1400x1400-20190801.jpg">Ascolta "Episode 1 - Progetto MaDe" su Spreaker.</a>


<a class="spreaker-player" href="https://www.spreaker.com/show/progetto-made" data-resource="show_id=4890900" data-theme="dark" data-autoplay="false" data-playlist="show" data-width="100%" data-height="400px">Ascolta "Progetto MaDe" su Spreaker.</a><script async src="https://widget.spreaker.com/widgets.js"></script>

<iframe src="https://widget.spreaker.com/player?show_id=4890900&theme=dark&autoplay=false&playlist=show" width="100%" height="400px" frameborder="0"></iframe>


<a class="spreaker-player" href="https://www.spreaker.com/user/weberadio.it/episode-1-progetto-made" data-resource="episode_id=44441160" data-theme="dark" data-autoplay="false" data-playlist="false" data-width="100%" data-height="200px">Ascolta "Episode 1 - Progetto MaDe" su Spreaker.</a><script async src="https://widget.spreaker.com/widgets.js"></script>

*/
