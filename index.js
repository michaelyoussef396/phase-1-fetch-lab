function fetchBooksAndProcess() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      const fifthBook = data && data.length >= 5 ? data[4] : null;
      const combinedText = data ? data.reduce((acc, book) => acc + (book.content ? book.content : ''), '') : '';
      const character1031 = combinedText.length >= 1031 ? combinedText[1030] : null;
      const totalNumberOfPages = data ? data.reduce((acc, book) => acc + (book.numberOfPages ? book.numberOfPages : 0), 0) : 0;

      // Update the DOM with the obtained information
      renderFifthBook(fifthBook);
      renderCharacter1031(character1031);
      renderTotalPages(totalNumberOfPages);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function renderFifthBook(book) {
  const fifthBookElement = document.getElementById('fifth-book');
  if (book) {
    fifthBookElement.textContent = `Fifth Book: ${book.name}`;
  } else {
    fifthBookElement.textContent = 'Fifth Book: Not found';
  }
}

function renderCharacter1031(character) {
  const character1031Element = document.getElementById('character-1031');
  if (character) {
    character1031Element.textContent = `1031st Character: ${character}`;
  } else {
    character1031Element.textContent = '1031st Character: Not found';
  }
}

function renderTotalPages(pages) {
  const totalPagesElement = document.getElementById('total-pages');
  totalPagesElement.textContent = `Total Pages of all Books: ${pages}`;
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooksAndProcess();
});
