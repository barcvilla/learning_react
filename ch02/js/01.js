function declareConstOldWay()
{
    var pizza = true;
    pizza = false;
    console.log("Pizza = " + pizza);
}

function declareConstModerWay()
{
    const EMPANADAS = true;
    console.log("Empanadas: " + EMPANADAS);
}

declareConstOldWay();
declareConstModerWay();