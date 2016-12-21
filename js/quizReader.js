/*This will be used to read the quiz. Should the quiz be moved to a database, 
update these functions to work with the database.*/

var quizJson ={
            "questions": [
            {
                "question": "¿__________ es la capital de Texas?", "wrong": ["Quién", "Que", "Qué"], "right": "Cuál"
            },
            {
                "question": "____________ (my) libro está sobre la mesa. Tu libro está debajo de la mesa.", "wrong": ["tu", "tú", "sus"], "right": "mi"
            },
            {
                "question": "Nueva York es una ciudad ______________.", "wrong": ["norteamericanos", "norteamericano", "norteamericanas"], "right": "norteamericana"
            },
            {
                "question": "Los estudiantes _______________  en la biblioteca.", "wrong": ["estudien", "estudiando", "estudio"], "right": "estudian"
            },
            {
                "question": " ____________ (this) libro es de mi sobrino.", "wrong": ["Ese", "Estos", "Estas"], "right": "Este"
            },
            {
                "question": "Los profesores ________________ tomar vacaciones durante el verano.", "wrong": ["quiere", "quiero", "quieres"], "right": "quieren"
            },
            {
                "question": "Este fin de semana nosotros ____________ a Houston.", "wrong": ["voy a ir", "vamos a irnos", "van a ir"], "right": "vamos a ir"
            },
            {
                "question": "Mis hermanos ______________ todos los días antes de ir a la escuela.", "wrong": ["nos bañamos", "bañan", "bañamos"], "right": "se bañan"
            },
            {
                "question": "Mi hermano _________________ una persona agradable. Pero hoy está enojado.", "wrong": ["está", "soy", "estoy"], "right": "es"
            },
            {
                "question": "El partido de béisbol es en Dallas.  Dallas _________ en Texas.", "wrong": ["es", "soy", "estoy"], "right": "está"
            },
            {
                "question": "El verano en Texas es ___________________ en Nueva York.", "wrong": ["menos caliente", "tan caliente", "tanto caliente"], "right": "más caliente que"
            },
            {
                "question": "Jupiter _______ el planeta __________ grande de nuestro sistema solar.", "wrong": ["es, tanto", "es, tan", "es, tanto"], "right": "es, más"
            },
            {
                "question": "Quiero comprar flores para mi madre.  Quiero ______________.", "wrong": ["compráselos", "se los comprar", "se los compro"], "right": "comprárselas"
            },
            {
                "question": "A Rolando ______  __________ nadar en el mar.", "wrong": ["se, gusta", "le, gustan", "le, gustar"], "right": "le, gusta"
            },
            {
                "question": "Anoche yo __________(ir) de compras porque necesitaba comprar un par de zapatos.", "wrong": ["fue", "iré", "voy"], "right": "fui"
            },
            {
                "question": "Quiero que Ud _________el periódico.", "wrong": ["lees", "leo", "leí"], "right": "lea"
            },
            {
                "question": "Busco un restaurante que ________________ comida china.", "wrong": ["sirve", "sirvió", "servía"], "right": "sirva"
            },
            {
                "question": "A nosotros nos molesta que Sofía no _________ saludablemente.", "wrong": ["comer", "comerá", "comiera"], "right": "coma"
            },
            {
                "question": "Todos los veranos, nosotros _____________ a las montañas.", "wrong": ["fuimos", "fueron", "iban"], "right": "íbamos"
            },
            {
                "question": "Yo __________(conducir) rápidamente cuando el policía me __________(detener).", "wrong": ["conduciendo, detenía", "conducir, detuvo", "conduje, detener"], "right": "conducía, detuvo"
            },
            {
                "question": "Es necesario escribir una carta para el director. La carta ya ______________________.", "wrong": ["es escrita", "haya escrita", "está escrito"], "right": "está escrita"
            },
            {
                "question": "Mañana ______________ de compras.", "wrong": ["fui", "iba", "fue"], "right": "iré"
            },
            {
                "question": "Iré al cine tan pronto como _____________ mi tarea.", "wrong": ["hice", "haré", "hago"], "right": "haga"
            },
            {
                "question": "Dudaba que Joaquín_________ a Europa.", "wrong": ["vaya", "irá", "ir"], "right": "fuera"
            },
            {
                "question": "__________ un coche, si _____________uno.", "wrong": ["Compraría, necesito", "Compraría, necesitaré", "Compraré, necesitaré"], "right": "Compraría, necesitara"
            }
            ]
        }
/*Used to hold a random order for the quiz */
var quizOrder = [];
/*Used to hold a random order of choices for each question*/
var choiceOrder = [];
/*shouldn't need this because the correct answer value should be 4*/
var answerKey = [];
/*used to hold answers selected by the user. Should be zero'd out on each try*/
var selectedAnswers = [];
function newAttempt(){
    while (answerKey.length) {
        answerKey.pop();
        }
    /*reset selection. According to: https://jsperf.com/zeroarrayjs , this was the fastest way to zero out an array*/
    /*in case a future developer wants to change the value of a zero'd out array*/
    let empty = 0;
    let tempI = 0;
    while (tempI < quizLength) {
        selectedAnswers[tempI++] = empty;
        }
    while (quizOrder.length < quizLength) {
        let selectedQuestion = Math.floor(Math.random() * quizLength);
        if (quizOrder.indexOf(selectedQuestion) > -1) continue;
            quizOrder[quizOrder.length] = selectedQuestion
            }
    /*This was the quickest way according to jspref. I, unfortunately, forgot to get the link. */
    /*while the array holding the random choices is shorter than the array holding the random order for the quiz, make random choices*/
    while (choiceOrder.length < quizOrder.length) {
        let choices = [1, 2, 3, 4];
        /*let tempArray = [];*/
        for (let i = choices.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = choices[i];
            choices[i] = choices[j];
            choices[j] = temp;
            }
        /*assuming each question only has 4 choices*/
        if (choices.length >= 3) {
            choiceOrder.push(choices);
            }
        }
        for (var i in choiceOrder) {
            answerKey.push(choiceOrder[i].indexOf(4))
            }
    }
function getQuizLength(){
    return quizJson.questions.length;
    }