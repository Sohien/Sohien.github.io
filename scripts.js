
let imgs1 = {
    image: 'images/imgs1.jpg',
    title: "Spyro on coffee break",
    description: 'Concept art from Spyro Reignited Trilogy end credits.'
};

let imgs2 = {
    image: "images/imgs2.jpg",
    title: "Spyro the painter",
    description: 'Concept art from Spyro Reignited Trilogy end credits.'
};

let imgs3 = {
    image: "images/imgs3.jpg",
    title: "Spyro and the team",
    description: 'Concept art from Spyro Reignited.'
};

let imgs4 = {
    image: "images/imgs4.jpg",
    title: "Final Fantasy 9 Chocobo",
    description: 'Concept art of a Chocobo and Fat Chocobo.'
};

let imgs5 = {
    image: "images/imgs5.jpg",
    title: "Pixel art of a natural landscape",
    description: 'Pixel art of a forest landscape.'
};

let imgs6 = {
    image: "images/imgs6.jpg",
    title: "Pixel art of an elaborate tree",
    description: 'Pixel tree from Totoro.'
};

let imgs7 = {
    image: "images/imgs7.jpg",
    title: "Pixel waterfall animation",
    description: 'Detailed pixel animation of a waterfall.'
};

let imgs8 = {
    image: "images/imgs8.jpg",
    title: "Nier Automata art",
    description: '2B and moss-covered giant in forest.'
};

let imgs9 = {
    image: "images/imgs9.jpg",
    title: "City at night from Detroit: Become Human",
    description: 'Concept art of the night city.'
};

let imagesData = [imgs1, imgs2, imgs3, imgs4, imgs5, imgs6, imgs7, imgs8, imgs9];
let currentPhoto = 0;

console.log("Current image count: " + imagesData.length)

var num = 1;
imagesData.forEach((index) => {
    $('#thumbnail').append('<img class="box" id="'+ num +'" src= "images/imgs' + num + '.jpg">');
    num = num + 1;
   })
   
   $(".box").first().remove();


let loadPhoto = (photoNumber) => {
    $('#imggallery').fadeOut(200, function() {
        $('#imggallery').attr('src', imagesData[currentPhoto].image).bind('onreadystatechange load', function() {
            if (this.complete) $(this).fadeIn(200);
        });
    });
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);
}


let loadThumb = (currentPhoto) => {
    var idnum = currentPhoto + 1;
    $('#'+ idnum).addClass("highlight")
    if (1 < idnum < imagesData.length)
    var prevnum = idnum - 1;
    $('#'+ prevnum).removeClass("highlight")
    var forwnum = idnum + 1;
    $('#'+ forwnum).removeClass("highlight")
    if ( idnum === 1)
    prevnum = imagesData.length;
    $('#'+ prevnum).removeClass("highlight")
    if ( idnum === imagesData.length)
    forwnum = 1;
    $('#'+ forwnum).removeClass("highlight")
}



loadPhoto(currentPhoto);
loadThumb(currentPhoto);

$('.box').hover((event) => {
    $('.box').not($(this)).removeClass("highlight")
    let indexClicked = parseInt($(event.target).attr('id'));
    currentPhoto = indexClicked-1;
    loadPhoto(currentPhoto);
    $('#thumbtitle').text(imagesData[currentPhoto].title);
    $(document).bind('mousemove', function(e){
        $('#tail').css({
            left: e.pageX + 5,
            top: e.pageY - 20
        });
    });
    })

$(".box").hover(
    function () {
    $(this).addClass('highlight');
    });

$( ".box" ).mouseleave(function() {
    $('#thumbtitle').empty()
      });
    


$(".box").click(() => {
    let indexClicked = parseInt($(event.target).attr('id'));
    currentPhoto = indexClicked-1;
    window.open(imagesData[currentPhoto].image)
})

$('#buttonleft').click(() => {
    if ( imagesData.length-1 >= currentPhoto >= 0) {
    currentPhoto--; }
    if (currentPhoto < 0) {currentPhoto = imagesData.length-1}
    loadPhoto(currentPhoto);
    loadThumb(currentPhoto);
})

$('#buttonright').click(() => {
    if ( imagesData.length-1 >= currentPhoto >= 0){
    currentPhoto++; }
    if (currentPhoto > imagesData.length-1) {currentPhoto = 0}
    loadPhoto(currentPhoto);
    loadThumb(currentPhoto)
    })

$('#imggallery').click(() => {
    window.open(imagesData[currentPhoto].image)
})