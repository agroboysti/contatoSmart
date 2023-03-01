<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

require './conn.php';

$id = $_GET["id"];

$consulta = $conn->query("SELECT *,p.id pid FROM contatos c JOIN pessoas p on p.id = c.pessoa_id WHERE p.id = {$id}");
$linha = $consulta->fetch(PDO::FETCH_ASSOC);

$linha = json_encode($linha);

echo $linha;
