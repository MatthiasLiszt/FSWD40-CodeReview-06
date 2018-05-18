$(document).ready(function(){
 
 $('#showMedia').click(function(){
  console.log('show Media');
  var content=[];
  function doRatingStars(n){
   var stars=[];
   for(var i=0;i<n;++i){stars.push('&starf;');}
   if(n===0){stars.push('&#x2606;');}
   return stars.join('');//returns a String
  }
  mediaData.map(function(o){var o1=mediaMask.replace("$$image$",o.image).replace("$$title$",o.title).replace("$$author$",o.author);
                            var o2=o1.replace("$$type$",o.type).replace("$$genre$",o.genre).replace("$$publisher$",o.publisher);
                            var stars=doRatingStars(o.rating);
                            var output=o2.replace("$$description$",o.description).replace("$$rating$",stars);
                              
                            content.push(output);
                            console.log(o.image);
                           }); 
  
  $('#generalOutput').html(content);  
 });

 $('#addMedia').click(function(){
   $('#generalOutput').html(addMediaDialog);
 });

});