<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

require "./conn.php";

$dados = file_get_contents('php://input');


$val = json_decode($dados, true);
$nome = $val["nome"];
$email = $val["email"];
$tel = $val["tel"];

try {
    $sql = "INSERT INTO pessoas (nome) VALUES (?)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$nome]);
    $idlast = $conn->lastInsertId();

    echo "salvo com sucesso";
} catch (\Throwable $th) {
    echo "Error";
}

try {
    $sql = "INSERT INTO contatos ( email, tel, pessoa_id) VALUES (?,?,?)";
    $stmt2 = $conn->prepare($sql);
    $stmt2->execute([$email, $tel, $idlast]);

    echo "salvo com sucesso";
} catch (\Throwable $th) {
    echo "Erro em adicionar na tabela (contato)";
}
