var a= prompt("Введите имя пользователя", );
num = parseInt(a.replace(/\D+/g,""));
if ( num )
{
    var len= a.length;
    len--;
    var an=" ";
    while (len>=0)
    {

        var flag = a.charAt(len).toUpperCase()==a.charAt(len);
        if (flag)
        {
            an=an+a.charAt(len).toLowerCase();
        }
        else
        {
            an=an+a.charAt(len).toUpperCase();
        }
        len--;
    }
    alert(an.split("").reverse().join(""));
}
else
    alert( a.split("").reverse().join(""));
window.onload = function() {
    document.getElementById('button2').onclick = function()
    {
        if(document.body.className != 'new_class')
        {
            document.body.className = 'new_class';
        }
        else
        {
            document.body.className = '';
        }
    }
}
function Link()
{
    location.href='DZ5_2.html';
}
function Flexim()
{
    var r = document.querySelector("div").classList.toggle("move");
} 