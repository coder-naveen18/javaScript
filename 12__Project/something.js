    
    
    const fullName = document.querySelector('#name')
    const gender = document.querySelector('#gender')
    const email = document.querySelector('#mail')
    const phone = document.querySelector('#phone')
    const Location = document.querySelector('#location')
    const image = document.querySelector('#image_Random');


    async function getUserDetails(){
        const requestUrl = await fetch('https://randomuser.me/api/');
        const data = await requestUrl.json();

        const user = data.results[0];
        
        displayUserDetails(user);
    } 

    function displayUserDetails(user){
        fullName.innerHTML = `${user.name.title} ${user.name.first} ${user.name.last} `;
        gender.innerHTML = `${user.gender}`;
        email.innerHTML = `${user.email}`;
        phone.innerHTML = `${user.phone}`;
        Location.innerHTML = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
        image.setAttribute("src" , `${user.picture.large}`)

    }
    getUserDetails()