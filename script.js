document.getElementById('todo1').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText1");
  
  if (this.checked)
  {
    textTodo.innerHTML = "Thức dậy lúc 09:00";
  }
  else
  {
    textTodo.innerHTML = "Thức dậy lúc 06:00";
  }
}


document.getElementById('todo2').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText2");

  if (this.checked)
  {
    textTodo.innerHTML = "Đến trường đúng <del>giờ</del> ngày";
  }
  else
  {
    textTodo.innerHTML = "Đến trường đúng giờ";
  }
}

document.getElementById('todo3').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText3");

  if (this.checked)
  {
    textTodo.innerHTML = "Không rớt quá 1 môn";
  }
  else
  {
    textTodo.innerHTML = "Không rớt môn";
  }
}

document.getElementById('todo4').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText4");

  if (this.checked)
  {
    textTodo.innerHTML = "<del>Giảm</del> béo thành công 5kg";
  }
  else
  {
    textTodo.innerHTML = "Giảm béo thành công 5kg";
  }
}

document.getElementById('todo5').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText5");

  if (this.checked)
  {
    textTodo.innerHTML = "Đi bộ 3km/<del>ngày</del> tuần";
  }
  else
  {
    textTodo.innerHTML = "Chạy bộ 3km/ngày";
  }

}
let container = document.getElementById('container');
let count = 50;
for(var i = 0; i<50; i++){
    let leftSnow = Math.floor(Math.random() * container.clientWidth);
    let topSnow = Math.floor(Math.random() * container.clientHeight);
    let widthSnow = Math.floor(Math.random() * 100);
    let timeSnow = Math.floor((Math.random() * 5) + 5);
    let blurSnow = Math.floor(Math.random() * 10);
    console.log(leftSnow);
    let div = document.createElement('div');
    div.classList.add('snow');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's';
    div.style.filter = "blur(" + blurSnow + "px)";
    container.appendChild(div);
}