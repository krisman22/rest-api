function showAllMenu(){
    $.getJSON('data/pizza.json', function(result){
        let menu = result.menu;
        $.each(menu, function(index, data){
            $('#daftar-menu').append('<div class="col-md-4 mb-3"><div class="card" style="width: 18rem;"><img src="img/pizza/'+ data.gambar+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama+'</h5><p class="card-text">'+ data.deskripsi+'</p><p class="card-text text-bold">Rp.'+ data.harga+'</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
            
        });
    });  
}

showAllMenu();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h2').html(kategori);
    
    if (kategori == 'All Menu'){
        $('#daftar-menu').html('');
        showAllMenu();
        return;
    }

    $.getJSON('data/pizza.json', function(result){
        let menu=result.menu;
        let content = '';
        $.each(menu, function(index, data){
            if(data.kategori == kategori.toLowerCase()){
                content += '<div class="col-md-4 mb-3"><div class="card" style="width: 18rem;"><img src="img/pizza/'+ data.gambar+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama+'</h5><p class="card-text">'+ data.deskripsi+'</p><p class="card-text text-bold">Rp.'+ data.harga+'</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
            }
        });

        $('#daftar-menu').html(content);
    });
});

