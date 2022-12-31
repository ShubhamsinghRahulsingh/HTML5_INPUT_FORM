//UC1 validate name
        const text=document.querySelector('#text');
        const textError=document.querySelector('.text-error');
        text.addEventListener('input',function(){
            let nameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$');
            if(nameRegex.test(text.value))
            textError.textContent="";
            else
            textError.textContent="Invalid Name";
        });

       