const url = new URLSearchParams(window.location.search)
if (url.has('err')) window.alert("Przesłanie formularza nie powiodło się")