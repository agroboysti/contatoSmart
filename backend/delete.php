<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

require './conn.php';

$id = $_GET["id"];

try {
    $sql = "DELETE FROM contatos WHERE pessoa_id = {$id}";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$id]);
} catch (\Throwable $th) {
    echo "Erro ao deletar";
}


try {
    $sql = "DELETE FROM pessoas WHERE id = {$id}";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$id]);
} catch (\Throwable $th) {
    echo "Erro ao deletar";
}
