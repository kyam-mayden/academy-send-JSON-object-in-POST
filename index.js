var form = document.querySelector('form')


//$.ajax

// function sendAjax(variable){
//     $.ajax({
//         url: 'post.php',
//         type: 'POST',
//         data: variable
//     }).done(function(data) {
//         console.log(data)
//     })
// }


//$.post
function sendAjax(variable){
    $.post('post.php', variable, function(data){
        console.log(data)
    })
}

form.addEventListener("submit",function(e) {
    e.preventDefault()
    var jsonObj= {}
    var input = document.querySelectorAll(".field")
    input.forEach(function(field){
        if(field.value != "")
        jsonObj[field.name] = field.value
        }
    )
    jsonObj['Field15'] = input[12]['checked']
    sendAjax(jsonObj)
    $('#optional').load('post.php')
})
