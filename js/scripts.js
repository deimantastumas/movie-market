$(document).ready(function(){
  for (var i = 0; i < films.length; i++)
  {
    var image = films[i].image;
    var price = films[i].price;
    var title = films[i].title;
    var location = films[i].location;
    LoadFilm(image, price, title, location);
  }

  $("#box").change(function(){
    var searchField = $('#box').val();
    $('#products').html('');
    for (var i = 0; i < films.length; i++)
    {
      var expression = new RegExp(searchField, "i");
      if (films[i].title.search(expression) != -1 || films[i].location.search(expression) != -1) {
        var image = films[i].image;
        var price = films[i].price;
        var title = films[i].title;
        var location = films[i].location;
        LoadFilm(image, price, title, location);
      }
    }
  });

  function LoadFilm(image, price, title, location) {
    $("#products").append('<div class="product"></div>');
    $(".product:last").append('<p>' + location + '</p>');
    $(".product:last").append('<div class="picture"></div>');
    $(".picture:last").append('<img src="' + image + '" />');
    $(".picture:last").append('<div class="text"></div>');
    $(".text:last").append('<span>' + price + '</span>');
    $(".product:last").append('<p>' + title + '</p>');
  }
});
