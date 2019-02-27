({x(x){alert(/\d/g.test(x)?[].reduce.call(x,(x,y,z)=>x+=z%2?y.toLowerCase():y.toUpperCase(),''):x.split('').sort(()=>-1).join(''))}}).x(prompt("Как вас зовут?"))
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