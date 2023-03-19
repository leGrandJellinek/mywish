<? 

function pdo() {
    $dbname = 'mywish';
    $user = 'root';
    $pass = '';
    $host = 'localhost';
    return new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
}