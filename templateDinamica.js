/*

HTML para el ejemplo

<article class="cards">
<template id="template-id">
<figure class="card">
<img>
<figcaption></figcaption>
</figure>
</template>
</article>

*/

const $cards=document.querySelector(".cards"),
      $template=document.getElementById("template-card"),
      $fragment=document.createDocumentFragment(),
      cardContent = [
          {
              title: "Tecnologia",
              img: "https.....",
          },
          {
            title: "Tecnologia",
            img: "https.....",
        },
        {
            title: "Tecnologia",
            img: "https.....",
        },
        {
            title: "Tecnologia",
            img: "https.....",
        },
      ];
      cardContent.forEach ((el) => {
          $template.querySelector("img").setAttribute("src",el.img);
          $template.querySelector("img").setAttribute("alt",el.title);
          $template.querySelector("figcaption").textContent = el.title;

          let $clone = document.importNode($template, true);

          $fragment.appendChild($clone);

          $cards.appendChild($fragment);
      })