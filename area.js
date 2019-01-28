<label for="length">length</label> <input id="length" type="number" value="0" min="0">
<br>
<label for="width">width</label> <input id="width" type="number" value="0" min="0">
<br>
<label for="finalArea">Area</label> <input id="finalArea" type="number" value=a>
<script>
  function updateArea() {
  var l = length.value
  var w = width.value
  var a = l * w
  finalArea.value = a
}
 length.oninput = updateArea
 width.oninput = updateArea
 </script>
