<?

/* Здесь происходит регистрация пользователя и  отправка ответа на js (компонент Auth.vue)*/

if(!empty($_POST)){
    include_once "../components/db.php";

    /* Сохраняем данные с формы */
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    $pdo = pdo();
    // Подготовка запроса с использованием подстановки параметра :username
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
    // Привязка значения параметра :username к значению из $_POST["username"]
    $stmt->bindParam(':username', $_POST["username"]);
    // Выполнение запроса
    $stmt->execute();
    // Получение результата запроса
    $result = $stmt->fetch();
    if ($result) {
        // Пользователь с таким именем уже существует в базе данных
        echo "Имя пользователя уже занято!";
    } else {
        // Пользователь с таким именем отсутствует в базе данных
        userReg($username, $password, $email); /* Регистрация пользователя */
        echo "Имя пользователя свободно!";
    }
    echo "<pre>"; print_r($_POST); echo "</pre>";
}