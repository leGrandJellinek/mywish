<? 

function pdo() {
    $dbname = 'mywish';
    $user = 'root';
    $pass = '';
    $host = 'localhost';
    return new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
}

function userReg($login,$pass,$name,$photo) {
    $pdo = pdo();
    $pass = password_hash($pass, PASSWORD_DEFAULT);
    $query = "INSERT INTO users (login, pass, name, photo) VALUES (?,?,?,?)";
    $driver = $pdo->prepare($query);
    $result = $driver->execute([$login,$pass,$name,$photo]);
    
    return $result;
}


function userSign($login,$pass) {
    $pdo = pdo();
    $query = "SELECT * FROM users WHERE login=?";
    $driver = $pdo->prepare($query);
    $result = $driver-> execute([$login]);
    $user = $driver->fetch(PDO::FETCH_ASSOC);
    if($user['login'] == $login && password_verify($pass, $user['pass'])) {
       $_SESSION['login'] = $user['login'];
       $_SESSION['photo'] = $user['photo'];
    }else {
        return false;
    }
}

