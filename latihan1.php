<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>WPU HUT</title>

    <?php
    $data = file_get_contents('data/pizza.json');
    $menu = json_decode($data, true);

    $menu = $menu["menu"];
    echo $menu[0]["nama"];
    ?>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
        <a class="navbar-brand" href="#">
        <img src="img/logo.png" width="120" alt="" srcset="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link " href="#">Features</a>
            <a class="nav-item nav-link " href="#">Pricing</a>
            <a class="nav-item nav-link  disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </div>
  </div>

        </div>
    </nav>


    <div class="container">
        <div class="col">
            <h2>All Menu</h2>
        </div>

        <div class="row">
            <?php foreach ($menu as $row): ?>
            <div class="col-md-4 mb-3">
                <div class="card" style="width: 18rem;">
                    <img src="img/pizza/<?= $row["gambar"] ?>" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title"><?= $row["nama"] ?></h5>
                <p class="card-text"><?= $row["deskripsi"] ?></p>
                <p class="card-text text-bold"><?= $row["harga"] ?></p>
                <a href="#" class="btn btn-primary">Pesan Sekarang</a>
         </div>
            </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>