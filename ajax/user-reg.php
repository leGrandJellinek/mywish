<?

/* Здесь происходит регистрация пользователя и  отправка ответа на js (компонент Auth.vue)*/

if(!empty($_POST)){
    include_once "../components/db.php";
    echo "<pre>"; print_r($_POST); echo "</pre>";
}