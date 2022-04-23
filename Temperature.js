function fahTocel(fah)
{
   return (fah-32)*5/9;
}

function celTofah(cel)
{
   return (cel*9/5)+32 ;
}

let temp1=document.querySelector("#temp1");
let temp2=document.querySelector("#temp2");
let error=document.querySelector('#error');

function changeTemp()
{
  let input1=document.querySelector("#input1");
  let input2=document.querySelector("#input2");
  if(input1.value=="" && input2.value=="")
  {
    error.style.display = "block";
  }
  else if(input1.value=="" && input2.value!="")
  {
    if(temp2.value=="celsius")
    {
        let celsius = input2.value;
        let fahrenheit = celTofah(celsius);
        input1.value = fahrenheit;
    }
    else {

      let fahrenheit = input2.value;
      let celsius = fahTocel(fahrenheit);
      input1.value = celsius;
    }
  }

  else if(input1.value!="" && input2.value=="")
  {
    if(temp1.value=="celsius")
    {
        let celsius = input1.value;
          console.log(celsius);
        let fahrenheit = celTofah(celsius);
        input2.value = fahrenheit;
    }
    else {

      let fahrenheit = input1.value;
      let celsius = fahTocel(fahrenheit);
      input2.value = celsius;
    }
  }
}

temp1.addEventListener('change',
function(t)
{
  if(t.target.value=="fahrenheit")
  {
    temp2.children[1].selected=true;
  }
  else if(t.target.value=="celsius")
  {
    temp2.children[0].selected=true;
  }
}
);

temp2.addEventListener('change',
function(t)
{
  if(t.target.value=="fahrenheit")
  {
    temp1.children[0].selected=true;
  }
  else if(t.target.value=="celsius")
  {
    temp1.children[1].selected=true;
  }
}
);

document.querySelector("#input1").addEventListener("input",
function()
{
      document.querySelector("#input2").value = "";
});

document.querySelector("#input2").addEventListener("input",
function()
{
      document.querySelector("#input1").value = "";
});
