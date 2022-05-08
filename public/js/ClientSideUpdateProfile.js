(function () {

    const myForm = document.getElementById("formForEditUser");
    let addressInput = document.getElementById("address");
    let phnInput = document.getElementById("phonenumber");
    let errorDiv = document.getElementById('errorcheck');
    if (myForm) {
    myForm.addEventListener("submit", (event) => {
        valid = true
        if(addressInput.value){
            if(addressInput.value.length >= 500){
                event.preventDefault();
                valid = false
                addressInput.value = ''
                errorDiv.hidden = false;
                errorDiv.innerHTML = 'Address is too long'
                return
            }
        }
        if(phnInput.value){
            if(phnInput.value.length != 10){
                event.preventDefault();
                valid = false
                phnInput.value = ''
                errorDiv.hidden = false;
                errorDiv.innerHTML = 'Phone number is not valid'
                return
            }
        }
        if(addressInput.value || phnInput.value){
            valid = true
            errorDiv.hidden = true
        }
        else{
            event.preventDefault();
            valid = false
            addressInput.value = ''
            phnInput.value = ''
            phnInput.value=''
            errorDiv.hidden = false;
            errorDiv.innerHTML = 'No Updates were provided'
            return
        }
    });
    }
})();

        let profileButton = document.getElementById('profileButton')
        let profile = document.getElementById('profile')
        let editButton = document.getElementById('edit')
        let editProfile = document.getElementById('editPage')   
        let cancelButton = document.getElementById('cancel')

        profileButton.addEventListener('click',(event)=>{
            profile.hidden = false;
            profileButton.hidden = true;
            editProfile.hidden = true;
        })
        editButton.addEventListener('click',(event)=>{
            profile.hidden = true;
            profileButton.hidden = true;
            editProfile.hidden = false;
            
        })          
        cancelButton.addEventListener('click',(event)=>{
            profile.hidden = false;
            profileButton.hidden = true;
            editProfile.hidden = true;
        })
