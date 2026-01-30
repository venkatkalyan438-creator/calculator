<!DOCTYPE html>
<html>
<head>
    <title>JS Calculator</title>
</head>
<body>

    <h2>JavaScript Calculator</h2>

    <input type="number" id="num1" placeholder="First number"><br><br>
    <input type="number" id="num2" placeholder="Second number"><br><br>

    <button onclick="calculate('+')">Add</button>
    <button onclick="calculate('-')">Subtract</button>
    <button onclick="calculate('*')">Multiply</button>
    <button onclick="calculate('/')">Divide</button>

    <h3 id="result"></h3>

    <script>
        function calculate(op) {
            let a = Number(document.getElementById("num1").value);
            let b = Number(document.getElementById("num2").value);
            let res;

            if (op === '+') res = a + b;
            else if (op === '-') res = a - b;
            else if (op === '*') res = a * b;
            else if (op === '/') {
                if (b === 0) {
                    document.getElementById("result").innerHTML = "Cannot divide by zero";
                    return;
                }
                res = a / b;
            }

            document.getElementById("result").innerHTML = "Result = " + res;
        }
    </script>

</body>
</html>
