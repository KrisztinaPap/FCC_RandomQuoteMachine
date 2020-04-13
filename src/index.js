$(document).ready(function() {
  //footer current year element
  $("#currentYear").html(new Date().getFullYear());

  // quotes collection
  let quotes = [
    {
      text:
        '"Life is like riding a bicycle. To keep your balance, you must keep moving."',
      author: "Albert Einstein"
    },
    {
      text: '"I have no special talents. I am only passionately curious."',
      author: "Albert Einstein"
    },
    {
      text:
        '"Once you can accept the universe as matter expanding into nothing that is something, wearing stripes with plaid comes easy."',
      author: "Albert Einstein"
    },
    {
      text:
        '"The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom."',
      author: "Isaac Asimov"
    },
    {
      text:
        '"All we have to decide is what to do with the time that is given us."',
      author: "J. R. R. Tolkien"
    },
    {
      text: '"Not all those who wander are lost."',
      author: "J. R. R. Tolkien"
    },
    {
      text:
        '"The Answer to the ultimate question of Life, The Universe and Everything is...42!"',
      author: "Douglas Adams"
    },
    {
      text: '"Stories of imagination tend to upset those without one."',
      author: "Terry Pratchett"
    },
    {
      text: '"Literature is the most agreeable way of ignoring life."',
      author: "Fernando Pessoa"
    },
    {
      text:
        '"Literature is a textually transmitted disease, normally contracted in childhood."',
      author: "Jane Yolen"
    },
    {
      text:
        '"He liked the mere act of reading, the magic of turning scratches on a page into words inside his head."',
      author: "John Green"
    },
    {
      text: '"Make improvements, not excuses. Seek respect, not attention"',
      author: "Roy T. Bennett"
    }
  ];

  // Initial quote displayed on page as soon as it loads
  let randomNumber = Math.floor(Math.random() * quotes.length);
  $("#text").html(quotes[randomNumber].text);
  $("#author").html(quotes[randomNumber].author);

  // New quote button
  $("#new-quote").on("click", function() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    $("#text").html(quotes[randomNumber].text);
    $("#author").html(quotes[randomNumber].author);
  });

  // Tweet quote button
  $(".tweet-button").on("click", function() {
    $(this).attr(
      "href",
      "https://twitter.com/intent/tweet?text=" +
        "My new favourite quote: " +
        quotes[randomNumber].text +
        " - " +
        quotes[randomNumber].author
    );
  });
});
