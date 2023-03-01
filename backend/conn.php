<?php

$host = 'sql105.epizy.com';
$dbname = 'epiz_33489832_luffys';
$user = 'epiz_33489832';
$pass = 'n5NgGt19xiJH';

error_reporting(E_ALL);

ini_set("display_errors", 1);


try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", "$user", "$pass");

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "A sua conexão com o banco de dados falhou: " . $e->getMessage();
}
