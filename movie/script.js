function searchMovie(){
    $('#movie-list').html('');

    $.ajax({
        url : 'http://www.omdbapi.com',
        type : 'get',
        dataType : 'json',
        data : {
            'apikey' : '6dc070b9',
            's' : $('#search-input').val()
        },
        success : function (result){
           if (result.Response === 'True'){
                 let movies = result.Search;

                 $.each(movies, function(i, data){
                    $('#movie-list').append(`
                    <div class="col-md-4">
                    <div class="card mb-3">
                        <img class="card-img-top" src="`+ data.Poster +`" alt="Card image cap">
                        <div class="card-body">
                        <h5 class="card-title">`+ data.Title+`</h5>
                        <p class="card-text">`+ data.Year+`</p>
                        <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModalCenter"
                        data-id="`+ data.imdbID+`">Details</a>
                        </div>
                    </div>
                    </div>
                 `)
                 })
                 
                 
           }else{
               $('#movie-list').html(`
               <h3 class="text-center"> `+result.Error+` </h3>
               `)
           }
            
        }
    });
}

$('#search-input').on('keyup', function(event){
    if (event.keyCode === 13){
        searchMovie();
    }
})

$('#btn-search').on('click', function(){
    searchMovie();
});

//Function Button Detail

$('#movie-list').on('click', '.see-detail' ,function(){
    $.ajax({
        url : 'http://www.omdbapi.com',
        type : 'get',
        dataType : 'json',
        data : {
            'apikey' : '6dc070b9',
            'i' : $(this).data('id') 
        },
        success : function(movie){
            if(movie.Response === 'True'){
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                            <img src="`+ movie.Poster+`" class="img-fluid ">
                            </div>
                            <div class="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item"><h3>`+ movie.Title+`<h3></li>
                                    <li class="list-group-item">Realeased : `+ movie.Released+`</li>
                                    <li class="list-group-item">Genre : `+ movie.Genre+`</li>
                                    <li class="list-group-item">Director : `+ movie.Director+`</li>
                                    <li class="list-group-item">Actors : `+ movie.Actors+`</li>
                                    <li class="list-group-item">Sinopsis : `+ movie.Plot+`</li>

                                    
                                </ul>
                            </div>
                        </div
                    </div>
                `)
                
                
            }
        }
    })
    
})