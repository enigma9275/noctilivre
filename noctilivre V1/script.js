function showForm(){
  document.getElementById('landing').classList.add('hidden'); 
  document.getElementById('library-page').classList.add('hidden'); 
  document.getElementById('form-page').classList.remove('hidden'); 
}

function showLanding(){
  document.getElementById('form-page').classList.add('hidden'); 
  document.getElementById('library-page').classList.add('hidden'); 
  document.getElementById('landing').classList.remove('hidden'); 
}

function showLibrary(){
  document.getElementById('landing').classList.add('hidden'); 
  document.getElementById('form-page').classList.add('hidden'); 
  document.getElementById('library-page').classList.remove('hidden'); 
  displayLibrary(); 
}

document.getElementById('book-form').addEventListener('submit', function(e){
  e.preventDefault();
  let books = JSON.parse(localStorage.getItem('books')||'[]');
  let book = {
    name: document.getElementById('bookName').value,
    author: document.getElementById('author').value,
    genre: document.getElementById('genre').value,
    rating: document.getElementById('rating').value,
    recommend: document.getElementById('recommend').value,
    recommendIf: document.getElementById('recommendIf').value,
    review: document.getElementById('review').value,
    pros: document.getElementById('pros').value,
    length: document.getElementById('length').value,
    explicit: document.getElementById('explicit').value,
    pages: document.getElementById('pages').value,
    format: document.getElementById('format').value
  };
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  document.getElementById('book-form').reset();
  showLibrary();
});

function displayLibrary(){
  let books = JSON.parse(localStorage.getItem('books')||'[]');
  let container = document.getElementById('library');
  container.innerHTML='';
  books.forEach((b,i)=>{
    let card = document.createElement('div'); 
    card.className='card';
    card.innerHTML = `<h3>${b.name} - ${b.author}</h3>
      <p><strong>Genre:</strong> ${b.genre}</p>
      <p><strong>Notation:</strong> ${'⭐'.repeat(b.rating)}</p>
      <p><strong>Recommander ?</strong> ${b.recommend}</p>
      <p><strong>Recommandé si :</strong> ${b.recommendIf}</p>
      <p><strong>Avis:</strong> ${b.review}</p>
      <p><strong>Points forts:</strong> ${b.pros}</p>
      <p><strong>Longueur :</strong> ${b.length}</p>
      <p><strong>Scènes choquantes / smut:</strong> ${b.explicit}</p>
      <p><strong>Nombre de pages:</strong> ${b.pages}</p>
      <p><strong>Format :</strong> ${b.format}</p>
      <button onclick="toggleSpoiler(${i})" class="btn secondary-btn">Afficher Spoiler</button>
      <div id="spoiler-${i}" class="spoiler">Contenu spoiler ici...</div>`;
    container.appendChild(card);
  });
}

function toggleSpoiler(i){
  let el=document.getElementById(`spoiler-${i}`);
  el.classList.toggle('show-spoiler');
}
