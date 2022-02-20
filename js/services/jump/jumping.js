document.getElementById('jump').addEventListener('click', function(){
    const page = document.getElementById('j-url').value;
    location.assign(`https://my-project-calculate.netlify.app/?urlj=${page}`)
})