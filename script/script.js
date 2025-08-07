const form = document.getElementById("form");
const input = document.getElementById("email");


const handleSubmit = (e) => {
    e.preventDefault();

//   const data = {};
//   const fields = e.target.querySelectorAll("input, select, textarea");
  
//   for (const field of fields) {
//     data[field.name] = field.value;
//   }

    const data = Object.fromEntries(new FormData(e.target));
    
    console.log(data['email']);

    if (!/^\S+@\S+\.\S+$/.test(data['email'])) {
        document.querySelector('#email').classList.add('error');
        document.querySelector('.error-message').classList.add('error'); 
    } else {
        document.querySelector('.form-card-confirm').classList.add('confirmed');
        document.querySelector('.form-card').classList.add('confirmed');
    }
    
};

function removeError () {
    document.querySelector('#email').classList.remove('error');
    document.querySelector('.error-message').classList.remove('error'); 
}

form.addEventListener("submit", handleSubmit);
input.addEventListener("keydown", removeError);
