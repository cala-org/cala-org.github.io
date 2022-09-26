$(()=>{
  $('h2.h2-flex').append('<div class="x-comp">x</div>');
})

fetch('https://www.ala.org/news/rss.xml', {
  // headers: {
  //   'Access-Control-Allow-Origin': 'https://cala-web.github.io/'
  // }
})
  .then(response => response.text())
  .then(str => new DOMParser().parseFromString(str, 'text/xml'))
  .then(async data => {
    const items = data.getElementsByTagName('item');
    console.log(items);
    let html = ``;
    for (let i = 0; i < 5; i++) {
      html += `<li class="mb-2"><a href="${
        items[i].getElementsByTagName('link')[0].innerHTML
      }">${items[i].getElementsByTagName('title')[0].innerHTML}</a></li>`;
    }

    document.querySelector('.ala-news').insertAdjacentHTML('beforeend', html);
  })
  .catch(err => {
    console.log(err.message);
  });