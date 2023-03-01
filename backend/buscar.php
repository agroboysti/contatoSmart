<?php

require "./conn.php";

$dados = file_get_contents('php://input');

$dados = json_decode($dados, true);



$buscar = $dados["buscar"];



require 'conn.php';

$consulta = $conn->query("SELECT * FROM contatos c JOIN pessoas p ON p.id = c.pessoa_id WHERE p.nome LIKE '%{$buscar}%' OR c.tel LIKE '%{$buscar}%' OR c.email LIKE '%{$buscar}%';");
$linha = $consulta->fetchALL(PDO::FETCH_ASSOC);


$linha = json_encode($linha);

echo $linha;
