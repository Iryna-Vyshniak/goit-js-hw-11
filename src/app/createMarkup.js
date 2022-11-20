// import * as bootstrap from 'bootstrap';

export function createMarkup(photos) {
  return photos
    .map(
      ({
        tags,
        webformatURL,
        largeImageURL,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return /*html*/ `
            <a href='${largeImageURL}' class="card-link js-card-link">
            <div class="photo-card">
              <img class="photo" src="${webformatURL}" alt="${tags}" loading="lazy" />
              <div class="info">
                <div class="info-item info-item-likes">
                  <button type="button" class="circle">
                    <i class="bi bi-heart-fill" onclick="style.color='#ff0000'"></i>
                  </button>
                  <div class="box-likes"><b>Likes</b>
                  <span id="value">${likes}</span>
                  </div>
                  
                </div>
                <p class="info-item">
                  <b>Views</b>
                  ${views}
                </p>
                <p class="info-item">
                  <b>Comments</b>
                  ${comments}
                </p>
                <p class="info-item">
                  <b>Downloads</b>
                  ${downloads}
                </p>
              </div>
            </div>
            </a>`;
      }
    )
    .join('');
}
