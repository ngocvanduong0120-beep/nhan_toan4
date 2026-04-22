window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  //JS điền phép tính chữ/số
var player = GetPlayer();
var inp = "dien1";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, '');

//usage function addSpaceBetweenNumbersAndLetters:
//ans = addSpaceBetweenNumbersAndLetters(ans);

//addSpaceBetweenNumbersAndLetters
//ans = ans.replace(/([^\d\s])(?=\d)|(?<=\d)([^\d\s])/g, ' $1 ');
//ans = ans.replace(/(\d)([^\d\s])|([^\d\s])(\d)/g, '$1 $2$3 $4');

ans = ans.replace(/(?<=[+\-x:=])(?=[^\s])|(?<=[^\s])(?=[+\-x:=])/g, ' ');
player.SetVar(inp, ans); 
}

window.Script2 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('dien2');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('dien2', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('dien2', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('dien2', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script3 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('dien3');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('dien3', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('dien3', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('dien3', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script4 = function()
{
  //JS điền phép tính chữ/số
var player = GetPlayer();
var inp = "o_1";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, '');

//usage function addSpaceBetweenNumbersAndLetters:
//ans = addSpaceBetweenNumbersAndLetters(ans);

//addSpaceBetweenNumbersAndLetters
//ans = ans.replace(/([^\d\s])(?=\d)|(?<=\d)([^\d\s])/g, ' $1 ');
//ans = ans.replace(/(\d)([^\d\s])|([^\d\s])(\d)/g, '$1 $2$3 $4');

ans = ans.replace(/(?<=[+\-x:=])(?=[^\s])|(?<=[^\s])(?=[+\-x:=])/g, ' ');
player.SetVar(inp, ans); 
}

window.Script5 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('o_2');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('o_2', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('o_2', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('o_2', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script6 = function()
{
  //JS điền phép tính chữ/số
var player = GetPlayer();
var inp = "o_3";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, '');

//usage function addSpaceBetweenNumbersAndLetters:
//ans = addSpaceBetweenNumbersAndLetters(ans);

//addSpaceBetweenNumbersAndLetters
//ans = ans.replace(/([^\d\s])(?=\d)|(?<=\d)([^\d\s])/g, ' $1 ');
//ans = ans.replace(/(\d)([^\d\s])|([^\d\s])(\d)/g, '$1 $2$3 $4');

ans = ans.replace(/(?<=[+\-x:=])(?=[^\s])|(?<=[^\s])(?=[+\-x:=])/g, ' ');
player.SetVar(inp, ans); 
}

window.Script7 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('o_4');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('o_4', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('o_4', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('o_4', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script8 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('o_5');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('o_5', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('o_5', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('o_5', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script9 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('o_6');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('o_6', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('o_6', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('o_6', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script10 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('o_7');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('o_7', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('o_7', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('o_7', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script11 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('o_8');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('o_8', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('o_8', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('o_8', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script12 = function()
{
  //JS điền phép tính chữ/số
var player = GetPlayer();
var inp = "blank1";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, '');

//usage function addSpaceBetweenNumbersAndLetters:
//ans = addSpaceBetweenNumbersAndLetters(ans);

//addSpaceBetweenNumbersAndLetters
//ans = ans.replace(/([^\d\s])(?=\d)|(?<=\d)([^\d\s])/g, ' $1 ');
//ans = ans.replace(/(\d)([^\d\s])|([^\d\s])(\d)/g, '$1 $2$3 $4');

ans = ans.replace(/(?<=[+\-x:=])(?=[^\s])|(?<=[^\s])(?=[+\-x:=])/g, ' ');
player.SetVar(inp, ans); 
}

window.Script13 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('blank2');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('blank2', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('blank2', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('blank2', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script14 = function()
{
  //JS điền phép tính chữ/số
var player = GetPlayer();
var inp = "blank3";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, '');

//usage function addSpaceBetweenNumbersAndLetters:
//ans = addSpaceBetweenNumbersAndLetters(ans);

//addSpaceBetweenNumbersAndLetters
//ans = ans.replace(/([^\d\s])(?=\d)|(?<=\d)([^\d\s])/g, ' $1 ');
//ans = ans.replace(/(\d)([^\d\s])|([^\d\s])(\d)/g, '$1 $2$3 $4');

ans = ans.replace(/(?<=[+\-x:=])(?=[^\s])|(?<=[^\s])(?=[+\-x:=])/g, ' ');
player.SetVar(inp, ans); 
}

window.Script15 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('blank4');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('blank4', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('blank4', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('blank4', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script16 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('blank5');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('blank5', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('blank5', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('blank5', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script17 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('blank6');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('blank6', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('blank6', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('blank6', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script18 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('blank7');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('blank7', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('blank7', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('blank7', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script19 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('blank8');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('blank8', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('blank8', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('blank8', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script20 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('blank9');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('blank9', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('blank9', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('blank9', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script21 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('blank10');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('blank10', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('blank10', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('blank10', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script22 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('q'+inp);

numb = "+";
player.SetVar('q'+inp, numb);
}

window.Script23 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('q'+inp);

numb = "x";
player.SetVar('q'+inp, numb);
}

window.Script24 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('q'+inp);

numb = "-";
player.SetVar('q'+inp, numb);
}

window.Script25 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb ="1";
player.SetVar('o'+inp, numb);
}

window.Script26 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "2";
player.SetVar('o'+inp, numb);
}

window.Script27 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "3";
player.SetVar('o'+inp, numb);
}

window.Script28 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "4";
player.SetVar('o'+inp, numb);
}

window.Script29 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "5";
player.SetVar('o'+inp, numb);
}

window.Script30 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "6";
player.SetVar('o'+inp, numb);
}

window.Script31 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "7";
player.SetVar('o'+inp, numb);
}

window.Script32 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "8";
player.SetVar('o'+inp, numb);
}

window.Script33 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "9";
player.SetVar('o'+inp, numb);
}

window.Script34 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "0";
player.SetVar('o'+inp, numb);
}

window.Script35 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "1";
player.SetVar('o'+inp, numb);
}

window.Script36 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "2";
player.SetVar('o'+inp, numb);
}

window.Script37 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "3";
player.SetVar('o'+inp, numb);
}

window.Script38 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "4";
player.SetVar('o'+inp, numb);
}

window.Script39 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "5";
player.SetVar('o'+inp, numb);
}

window.Script40 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "6";
player.SetVar('o'+inp, numb);
}

window.Script41 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "7";
player.SetVar('o'+inp, numb);
}

window.Script42 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "8";
player.SetVar('o'+inp, numb);
}

window.Script43 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "9";
player.SetVar('o'+inp, numb);
}

window.Script44 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "0";
player.SetVar('o'+inp, numb);
}

window.Script45 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "1";
player.SetVar('o'+inp, numb);
}

window.Script46 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "2";
player.SetVar('o'+inp, numb);
}

window.Script47 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "3";
player.SetVar('o'+inp, numb);
}

window.Script48 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "4";
player.SetVar('o'+inp, numb);
}

window.Script49 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "5";
player.SetVar('o'+inp, numb);
}

window.Script50 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "6";
player.SetVar('o'+inp, numb);
}

window.Script51 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "7";
player.SetVar('o'+inp, numb);
}

window.Script52 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "8";
player.SetVar('o'+inp, numb);
}

window.Script53 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "9";
player.SetVar('o'+inp, numb);
}

window.Script54 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb ="0";
player.SetVar('o'+inp, numb);
}

window.Script55 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "1";
player.SetVar('o'+inp, numb);
}

window.Script56 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "2";
player.SetVar('o'+inp, numb);
}

window.Script57 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "3";
player.SetVar('o'+inp, numb);
}

window.Script58 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "4";
player.SetVar('o'+inp, numb);
}

window.Script59 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "5";
player.SetVar('o'+inp, numb);
}

window.Script60 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "6";
player.SetVar('o'+inp, numb);
}

window.Script61 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "7";
player.SetVar('o'+inp, numb);
}

window.Script62 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "8";
player.SetVar('o'+inp, numb);
}

window.Script63 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "9";
player.SetVar('o'+inp, numb);
}

window.Script64 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "0";
player.SetVar('o'+inp, numb);
}

window.Script65 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "1";
player.SetVar('o'+inp, numb);
}

window.Script66 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "2";
player.SetVar('o'+inp, numb);
}

window.Script67 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "3";
player.SetVar('o'+inp, numb);
}

window.Script68 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb ="4";
player.SetVar('o'+inp, numb);
}

window.Script69 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "5";
player.SetVar('o'+inp, numb);
}

window.Script70 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "6";
player.SetVar('o'+inp, numb);
}

window.Script71 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "7";
player.SetVar('o'+inp, numb);
}

window.Script72 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "8";
player.SetVar('o'+inp, numb);
}

window.Script73 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb =  "9";
player.SetVar('o'+inp, numb);
}

window.Script74 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb ="0";
player.SetVar('o'+inp, numb);
}

window.Script75 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb ="1";
player.SetVar('o'+inp, numb);
}

window.Script76 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb ="2";
player.SetVar('o'+inp, numb);
}

window.Script77 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb ="3";
player.SetVar('o'+inp, numb);
}

window.Script78 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb ="4";
player.SetVar('o'+inp, numb);
}

window.Script79 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb ="5";
player.SetVar('o'+inp, numb);
}

window.Script80 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb ="6";
player.SetVar('o'+inp, numb);
}

window.Script81 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb ="7";
player.SetVar('o'+inp, numb);
}

window.Script82 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb ="8";
player.SetVar('o'+inp, numb);
}

window.Script83 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb = "9";
player.SetVar('o'+inp, numb);
}

window.Script84 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('o'+inp);

numb ="0";
player.SetVar('o'+inp, numb);
}

window.Script85 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb ="1";
player.SetVar('a'+inp, numb);
}

window.Script86 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb ="2";
player.SetVar('a'+inp, numb);
}

window.Script87 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb ="3";
player.SetVar('a'+inp, numb);
}

window.Script88 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb ="4";
player.SetVar('a'+inp, numb);
}

window.Script89 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb ="5";
player.SetVar('a'+inp, numb);
}

window.Script90 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb ="6";
player.SetVar('a'+inp, numb);
}

window.Script91 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb ="7";
player.SetVar('a'+inp, numb);
}

window.Script92 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb ="8";
player.SetVar('a'+inp, numb);
}

window.Script93 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "9";
player.SetVar('a'+inp, numb);
}

window.Script94 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb ="0";
player.SetVar('a'+inp, numb);
}

window.Script95 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "1";
player.SetVar('a'+inp, numb);
}

window.Script96 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "2";
player.SetVar('a'+inp, numb);
}

window.Script97 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "3";
player.SetVar('a'+inp, numb);
}

window.Script98 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb ="4";
player.SetVar('a'+inp, numb);
}

window.Script99 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "5";
player.SetVar('a'+inp, numb);
}

window.Script100 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "6";
player.SetVar('a'+inp, numb);
}

window.Script101 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "7";
player.SetVar('a'+inp, numb);
}

window.Script102 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "8";
player.SetVar('a'+inp, numb);
}

window.Script103 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "9";
player.SetVar('a'+inp, numb);
}

window.Script104 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb ="0";
player.SetVar('a'+inp, numb);
}

window.Script105 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "1";
player.SetVar('a'+inp, numb);
}

window.Script106 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "2";
player.SetVar('a'+inp, numb);
}

window.Script107 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "3";
player.SetVar('a'+inp, numb);
}

window.Script108 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "4";
player.SetVar('a'+inp, numb);
}

window.Script109 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "5";
player.SetVar('a'+inp, numb);
}

window.Script110 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "6";
player.SetVar('a'+inp, numb);
}

window.Script111 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "7";
player.SetVar('a'+inp, numb);
}

window.Script112 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "8";
player.SetVar('a'+inp, numb);
}

window.Script113 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "9";
player.SetVar('a'+inp, numb);
}

window.Script114 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "0";
player.SetVar('a'+inp, numb);
}

window.Script115 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "1";
player.SetVar('a'+inp, numb);
}

window.Script116 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "2";
player.SetVar('a'+inp, numb);
}

window.Script117 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "3";
player.SetVar('a'+inp, numb);
}

window.Script118 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "4";
player.SetVar('a'+inp, numb);
}

window.Script119 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "5";
player.SetVar('a'+inp, numb);
}

window.Script120 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "6";
player.SetVar('a'+inp, numb);
}

window.Script121 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "7";
player.SetVar('a'+inp, numb);
}

window.Script122 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "8";
player.SetVar('a'+inp, numb);
}

window.Script123 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "9";
player.SetVar('a'+inp, numb);
}

window.Script124 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb ="0";
player.SetVar('a'+inp, numb);
}

window.Script125 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "1";
player.SetVar('a'+inp, numb);
}

window.Script126 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "2";
player.SetVar('a'+inp, numb);
}

window.Script127 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "3";
player.SetVar('a'+inp, numb);
}

window.Script128 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "4";
player.SetVar('a'+inp, numb);
}

window.Script129 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "5";
player.SetVar('a'+inp, numb);
}

window.Script130 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "6";
player.SetVar('a'+inp, numb);
}

window.Script131 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "7";
player.SetVar('a'+inp, numb);
}

window.Script132 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "8";
player.SetVar('a'+inp, numb);
}

window.Script133 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "9";
player.SetVar('a'+inp, numb);
}

window.Script134 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "0";
player.SetVar('a'+inp, numb);
}

window.Script135 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb ="1";
player.SetVar('a'+inp, numb);
}

window.Script136 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "2";
player.SetVar('a'+inp, numb);
}

window.Script137 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "3";
player.SetVar('a'+inp, numb);
}

window.Script138 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "4";
player.SetVar('a'+inp, numb);
}

window.Script139 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "5";
player.SetVar('a'+inp, numb);
}

window.Script140 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "6";
player.SetVar('a'+inp, numb);
}

window.Script141 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "7";
player.SetVar('a'+inp, numb);
}

window.Script142 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb = "8";
player.SetVar('a'+inp, numb);
}

window.Script143 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "9";
player.SetVar('a'+inp, numb);
}

window.Script144 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('a'+inp);

numb =  "0";
player.SetVar('a'+inp, numb);
}

window.Script145 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('q'+inp);

numb = "=";
player.SetVar('q'+inp, numb);
}

window.Script146 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('q'+inp);

numb = "+";
player.SetVar('q'+inp, numb);
}

window.Script147 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('q'+inp);

numb = "−";
player.SetVar('q'+inp, numb);
}

window.Script148 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb ="1";
player.SetVar('e'+inp, numb);
}

window.Script149 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb ="2";
player.SetVar('e'+inp, numb);
}

window.Script150 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb ="3";
player.SetVar('e'+inp, numb);
}

window.Script151 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb ="4";
player.SetVar('e'+inp, numb);
}

window.Script152 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb ="5";
player.SetVar('e'+inp, numb);
}

window.Script153 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb ="6";
player.SetVar('e'+inp, numb);
}

window.Script154 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb ="7";
player.SetVar('e'+inp, numb);
}

window.Script155 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb ="8";
player.SetVar('e'+inp, numb);
}

window.Script156 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "9";
player.SetVar('e'+inp, numb);
}

window.Script157 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb ="0";
player.SetVar('e'+inp, numb);
}

window.Script158 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "1";
player.SetVar('e'+inp, numb);
}

window.Script159 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "2";
player.SetVar('e'+inp, numb);
}

window.Script160 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "3";
player.SetVar('e'+inp, numb);
}

window.Script161 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb ="4";
player.SetVar('e'+inp, numb);
}

window.Script162 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "5";
player.SetVar('e'+inp, numb);
}

window.Script163 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "6";
player.SetVar('e'+inp, numb);
}

window.Script164 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "7";
player.SetVar('e'+inp, numb);
}

window.Script165 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "8";
player.SetVar('e'+inp, numb);
}

window.Script166 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "9";
player.SetVar('e'+inp, numb);
}

window.Script167 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb ="0";
player.SetVar('e'+inp, numb);
}

window.Script168 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "1";
player.SetVar('e'+inp, numb);
}

window.Script169 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "2";
player.SetVar('e'+inp, numb);
}

window.Script170 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "3";
player.SetVar('e'+inp, numb);
}

window.Script171 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "4";
player.SetVar('e'+inp, numb);
}

window.Script172 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "5";
player.SetVar('e'+inp, numb);
}

window.Script173 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "6";
player.SetVar('e'+inp, numb);
}

window.Script174 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "7";
player.SetVar('e'+inp, numb);
}

window.Script175 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "8";
player.SetVar('e'+inp, numb);
}

window.Script176 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "9";
player.SetVar('e'+inp, numb);
}

window.Script177 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "0";
player.SetVar('e'+inp, numb);
}

window.Script178 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "1";
player.SetVar('e'+inp, numb);
}

window.Script179 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "2";
player.SetVar('e'+inp, numb);
}

window.Script180 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "3";
player.SetVar('e'+inp, numb);
}

window.Script181 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "4";
player.SetVar('e'+inp, numb);
}

window.Script182 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "5";
player.SetVar('e'+inp, numb);
}

window.Script183 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "6";
player.SetVar('e'+inp, numb);
}

window.Script184 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "7";
player.SetVar('e'+inp, numb);
}

window.Script185 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "8";
player.SetVar('e'+inp, numb);
}

window.Script186 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "9";
player.SetVar('e'+inp, numb);
}

window.Script187 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb ="0";
player.SetVar('e'+inp, numb);
}

window.Script188 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "1";
player.SetVar('e'+inp, numb);
}

window.Script189 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "2";
player.SetVar('e'+inp, numb);
}

window.Script190 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "3";
player.SetVar('e'+inp, numb);
}

window.Script191 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "4";
player.SetVar('e'+inp, numb);
}

window.Script192 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "5";
player.SetVar('e'+inp, numb);
}

window.Script193 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "6";
player.SetVar('e'+inp, numb);
}

window.Script194 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "7";
player.SetVar('e'+inp, numb);
}

window.Script195 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "8";
player.SetVar('e'+inp, numb);
}

window.Script196 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "9";
player.SetVar('e'+inp, numb);
}

window.Script197 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "0";
player.SetVar('e'+inp, numb);
}

window.Script198 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb ="1";
player.SetVar('e'+inp, numb);
}

window.Script199 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "2";
player.SetVar('e'+inp, numb);
}

window.Script200 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "3";
player.SetVar('e'+inp, numb);
}

window.Script201 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "4";
player.SetVar('e'+inp, numb);
}

window.Script202 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "5";
player.SetVar('e'+inp, numb);
}

window.Script203 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "6";
player.SetVar('e'+inp, numb);
}

window.Script204 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "7";
player.SetVar('e'+inp, numb);
}

window.Script205 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb = "8";
player.SetVar('e'+inp, numb);
}

window.Script206 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "9";
player.SetVar('e'+inp, numb);
}

window.Script207 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('e'+inp);

numb =  "0";
player.SetVar('e'+inp, numb);
}

window.Script208 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('q'+inp);

numb = "x";
player.SetVar('q'+inp, numb);
}

window.Script209 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('q'+inp);

numb = "=";
player.SetVar('q'+inp, numb);
}

window.Script210 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('q'+inp);

numb = ":";
player.SetVar('q'+inp, numb);
}

window.Script211 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_2');

tomato = tomato + "1";
player.SetVar('dien_2', tomato);
}

window.Script212 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_2');

tomato = tomato + "2";
player.SetVar('dien_2', tomato);
}

window.Script213 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_2');

tomato = tomato + "3";
player.SetVar('dien_2', tomato);
}

window.Script214 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_2');

tomato = tomato + "4";
player.SetVar('dien_2', tomato);
}

window.Script215 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_2');

tomato = tomato + "5";
player.SetVar('dien_2', tomato);
}

window.Script216 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_2');

tomato = tomato + "6";
player.SetVar('dien_2', tomato);
}

window.Script217 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_2');

tomato = tomato + "7";
player.SetVar('dien_2', tomato);
}

window.Script218 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_2');

tomato = tomato + "8";
player.SetVar('dien_2', tomato);
}

window.Script219 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_2');

tomato = tomato + "9";
player.SetVar('dien_2', tomato);
}

window.Script220 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_2');

tomato = tomato + "0";
player.SetVar('dien_2', tomato);
}

window.Script221 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_1');

tomato = tomato + "1";
player.SetVar('dien_1', tomato);
}

window.Script222 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_1');

tomato = tomato + "2";
player.SetVar('dien_1', tomato);
}

window.Script223 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_1');

tomato = tomato + "3";
player.SetVar('dien_1', tomato);
}

window.Script224 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_1');

tomato = tomato + "4";
player.SetVar('dien_1', tomato);
}

window.Script225 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_1');

tomato = tomato + "5";
player.SetVar('dien_1', tomato);
}

window.Script226 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_1');

tomato = tomato + "6";
player.SetVar('dien_1', tomato);
}

window.Script227 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_1');

tomato = tomato + "7";
player.SetVar('dien_1', tomato);
}

window.Script228 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_1');

tomato = tomato + "8";
player.SetVar('dien_1', tomato);
}

window.Script229 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_1');

tomato = tomato + "9";
player.SetVar('dien_1', tomato);
}

window.Script230 = function()
{
  var player = GetPlayer();
var tomato = player.GetVar('dien_1');

tomato = tomato + "0";
player.SetVar('dien_1', tomato);
}

window.Script231 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('t1');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('t1', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('t1', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('t1', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script232 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('t2');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('t2', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('t2', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('t2', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script233 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('t3');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('t3', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('t3', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('t3', formattedResult); //thay giá trị biến ở đây
    }
}

}

window.Script234 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "1";
player.SetVar('t'+inp, numb);
}

window.Script235 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "2";
player.SetVar('t'+inp, numb);
}

window.Script236 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "3";
player.SetVar('t'+inp, numb);
}

window.Script237 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "4";
player.SetVar('t'+inp, numb);
}

window.Script238 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "5";
player.SetVar('t'+inp, numb);
}

window.Script239 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "6";
player.SetVar('t'+inp, numb);
}

window.Script240 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "7";
player.SetVar('t'+inp, numb);
}

window.Script241 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "8";
player.SetVar('t'+inp, numb);
}

window.Script242 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "9";
player.SetVar('t'+inp, numb);
}

window.Script243 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "0";
player.SetVar('t'+inp, numb);
}

window.Script244 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "1";
player.SetVar('t'+inp, numb);
}

window.Script245 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "2";
player.SetVar('t'+inp, numb);
}

window.Script246 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "3";
player.SetVar('t'+inp, numb);
}

window.Script247 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "4";
player.SetVar('t'+inp, numb);
}

window.Script248 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "5";
player.SetVar('t'+inp, numb);
}

window.Script249 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "6";
player.SetVar('t'+inp, numb);
}

window.Script250 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "7";
player.SetVar('t'+inp, numb);
}

window.Script251 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "8";
player.SetVar('t'+inp, numb);
}

window.Script252 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "9";
player.SetVar('t'+inp, numb);
}

window.Script253 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "0";
player.SetVar('t'+inp, numb);
}

window.Script254 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "1";
player.SetVar('t'+inp, numb);
}

window.Script255 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "2";
player.SetVar('t'+inp, numb);
}

window.Script256 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "3";
player.SetVar('t'+inp, numb);
}

window.Script257 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "4";
player.SetVar('t'+inp, numb);
}

window.Script258 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "5";
player.SetVar('t'+inp, numb);
}

window.Script259 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "6";
player.SetVar('t'+inp, numb);
}

window.Script260 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "7";
player.SetVar('t'+inp, numb);
}

window.Script261 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "8";
player.SetVar('t'+inp, numb);
}

window.Script262 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "9";
player.SetVar('t'+inp, numb);
}

window.Script263 = function()
{
  var player = GetPlayer();
var inp = player.GetVar('input');
var numb = player.GetVar('t'+inp);

numb = numb + "0";
player.SetVar('t'+inp, numb);
}

};
