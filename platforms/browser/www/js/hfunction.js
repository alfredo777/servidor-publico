
function HTPL(url, id,data){
 fetch(url)
  .then(function(response) {
    return response.text();
  })
  .then(function(html) {
     console.log(html);
     HJSON(data, function(data){
        console.log(JSON.stringify(data));

        var template = Handlebars.compile(html);
        var porecess = template(data); 
        console.log
        document.getElementById(id).innerHTML = porecess;
     })
    
  })
  .catch(function (err) {
    // There was an error
    console.warn('El template no fue posible cargarlo.', err);
});
}

function HJSON(url, callback){
 fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
     console.log(json);
     callback(json);
  })
  .catch(function (err) {
    console.warn('El JSON no fue posible cargarlo', err);
 });
}

Handlebars.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});