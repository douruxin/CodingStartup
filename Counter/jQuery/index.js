var count = 12

$('input[type="text"]').val(count)

$('#subtract').on('click', function (e) {
  count--
  if (count < 0) {
    count = 0
    return false
  } else {
    $('input[type="text"]').val(count)
  }
})

$('#add').on('click', function (e) {
  count++
  $('input[type="text"]').val(count)
})

$('input[type="text"]').on('change', function (e) {
  if (e.target.value < 0) {
    $('input[type="text"]').val(0)
    return false
  } else {
    count = e.target.value
  }
})
