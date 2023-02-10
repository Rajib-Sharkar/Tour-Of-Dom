const sections =document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    console.log(section);
    section.style.border='5px solid red';
    section.style.marginBottom='5px ';
    section.style.borderRadius='17px';
    section.style.paddingLeft='7px';
    section.style.backgroundColor='yellow'
}
const placesContainer = document.getElementById('places-container');
// placeContainer.classList.add('text-center');
placeContainer.classList.remove('large-text');
