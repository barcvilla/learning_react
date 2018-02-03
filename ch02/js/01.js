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

function variableSinAmbito()
{
    var topic = "JavaScript";
    if(topic)
    {
        // las llaves no bloquean el alcance de una variable.
        var topic = "React"; // esta variable en el bloque if restablece el valor de topic a nivel function
        console.log("block: ", topic); // block React
    }
    console.log('global: ', topic); // block React
}

function variableConAmbito()
{
    var topic = "JavaScript";
    if(topic)
    {
        let topic = "React"; // let protege el valor de la variable global topic
        console.log('block: ', topic);
    }
    console.log('global: ', topic);
}

function templateString()
{
    var firstName = "Carlos";
    var lastName = "Villanueva";
    console.log("Concatenacion usando signo + " + firstName + " " + lastName);
    // usamos un template string
    console.log(`Usamos template string para concatenar ${firstName} ${lastName}`);
}

function defaultParameterDemo1(name = 'Shane McConkey', activity ='skiing')
{
    console.log(`${name} loves ${activity}`);
}

var defaultPerson={
    name:{
        first: "Shane",
        last: "McConkey"
    },
    favActivity: "skiing"
}
function defaultParameterDemo2(p = defaultPerson)
{
    console.log(`${p.name.first} loves ${p.favActivity}`);
}

function main()
{
    defaultParameterDemo2();
    defaultParameterDemo1();
    templateString();
    variableConAmbito();
    variableSinAmbito();
    declareConstOldWay();
    declareConstModerWay();
}

main();
