<?php


require 'conn.php';

$consulta = $conn->query("SELECT *,p.id pid FROM contatos c JOIN pessoas p on p.id = c.pessoa_id");
$linha = $consulta->fetchALL(PDO::FETCH_ASSOC);


$linha = json_encode($linha);

echo $linha;
