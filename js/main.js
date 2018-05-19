$(document).ready(function() {

    $('#showMedia').click(function() {
        console.log('show Media');
        var content = [];

        function doRatingStars(n) {
            var stars = [];
            for (var i = 0; i < n; ++i) { stars.push('&starf;'); }
            if (n === 0) { stars.push('&#x2606;'); }
            return stars.join(''); //returns a String
        }

        mediaData.map(function(o) {
            if (o !== null) {
                var o1 = mediaMask.replace("$$image$", o.image).replace("$$title$", o.title).replace("$$author$", o.author);
                var o2 = o1.replace("$$type$", o.type).replace("$$genre$", o.genre).replace("$$publisher$", o.publisher);
                var stars = doRatingStars(o.rating);
                var output = o2.replace("$$description$", o.description).replace("$$rating$", stars).replace("$$index$", content.length);

                content.push(output);
                console.log(o.image);
            }
        });

        $('#generalOutput').html(content);
    });

    $('#addMedia').click(function() {
        $('#generalOutput').html(addMediaDialog);
    });

    $('#eraseMedia').click(function() { eraseMedia(); });

    $('#loadLocalStorage').click(function() {
        var catLoad = localStorage.getItem('MyMediaDataCatalog');
        console.log(JSON.stringify(localStorage.getItem('MyMediaDataCatalog')));
        if (catLoad === undefined) { $('#generalOutput').html('<h2>error: could not find your media catalog</h2>'); } else {
            mediaData = JSON.parse(catLoad);
            $('#generalOutput').html('<h2>your media catalog has been loaded</h2>');
        }
    });

    $('#saveLocalStorage').click(function() {
        localStorage.setItem('MyMediaDataCatalog', JSON.stringify(mediaData));
        console.log(JSON.stringify(localStorage.getItem('MyMediaDataCatalog')));
        $('#generalOutput').html('<h2>your media catalog has been saved</h2>');
    });
});

function eraseMedia() {
    if (mediaMaskActiveElement !== undefined) {
        delete mediaData[Number(mediaMaskActiveElement)];
        removeUndefinedFromArray(mediaData);
        $('#generalOutput').html('<h2>the selected media has been removed</h2>');
        mediaMaskActiveElement = undefined;
    } else { $('#generalOutput').html('<h2 color="red">error: no media has been selected</h2>'); }
}

function removeUndefinedFromArray(x) {
    var content = [];
    x.map(function(e) {
        if (e !== undefined) { content.push(e); }
    });
    x = JSON.parse(JSON.stringify(content));
}

function showByCategory(category) {
    console.log('show by category ' + category);
    var content = [];

    function doRatingStars(n) {
        var stars = [];
        for (var i = 0; i < n; ++i) { stars.push('&starf;'); }
        if (n === 0) { stars.push('&#x2606;'); }
        return stars.join(''); //returns a String
    }
    var I = 0;
    mediaData.map(function(o) {
        if (o !== null) {
            var o1 = mediaMask.replace("$$image$", o.image).replace("$$title$", o.title).replace("$$author$", o.author);
            var o2 = o1.replace("$$type$", o.type).replace("$$genre$", o.genre).replace("$$publisher$", o.publisher);
            var stars = doRatingStars(o.rating);
            var output = o2.replace("$$description$", o.description).replace("$$rating$", stars).replace("$$index$", I++);

            if (o.genre == category) {
                content.push(output);
                console.log(o.image);
            }
        }
    });

    if (content.length < 1) { $('#generalOutput').html('<h2>there is currently no media in this category</h2>'); } else { $('#generalOutput').html(content); }
}