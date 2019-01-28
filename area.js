length: <input id="length" type="number">
width: <input id="width" type="number">
Area: <input id="finalArea" type="number">
<script>
  function area() {
  var l = length.value
  var w = width.value
  var a = l * w
  finalArea.value = a
}
<script>
 length.oninput = area
 width.oninput = area
</script>
