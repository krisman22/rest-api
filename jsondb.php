<?php
$koneksi = mysqli_connect('localhost', 'root', '', 'formloa');
$query = mysqli_query($koneksi, "select * from yuridis");

while($row = mysqli_fetch_assoc($query)){
    $data[] = $row;
}

echo json_encode($data);

?>