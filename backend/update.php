<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

require "./conn.php";

$dados = file_get_contents('php://input');

$id = $_GET["id"];

$val = json_decode($dados, true);
$nome = $val["nome"];
$email = $val["email"];
$tel = $val["tel"];


try {
    $sql = "UPDATE pessoas SET nome=? WHERE id={$id}";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$nome]);
} catch (\Throwable $th) {
    "Echo em atualização Tabela pessoas";
}

try {
    $sql = "UPDATE contatos SET email=?, tel=? WHERE pessoa_id={$id}";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$email, $tel]);
} catch (\Throwable $th) {
    "Echo em atualização Tabela contatos";
}
