// recupera solo el primer boton que encuentre
// const boton = document.querySelector('.button-apply-job')
// console.log(boton) // null si no lo encuentra

// if (boton !== null) {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// }

// const botones = document.querySelectorAll('.button-apply-job')
// // devuelve un NodeList (array-like) con todos los botones que encuentre
// // o una lista vacia [] si no encuentra ninguno

// botones.forEach(boton => {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// })

const jobsListingSection = document.querySelector('.jobs-listings')
const allOffers = jobsListingSection.querySelectorAll('.offer')

jobsListingSection.addEventListener('click', function(event) {
  const element = event.target

  if (element.classList.contains('button-apply-job')) {
    element.textContent = '¡Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }
})

const techFilter = document.querySelector('#filter-technology')
const locationFilter = document.querySelector('#location')
const expFilter = document.querySelector('#experience-level')

function applyFilters () {
  const selectedTech = techFilter.value
  const selectedLocation = locationFilter.value
  const selectedExp = expFilter.value

  allOffers.forEach(offer => {
    const techMatch = !selectedTech || offer.classList.contains(`tech-${selectedTech}`)
    const locationMatch = !selectedLocation || offer.classList.contains(`location-${selectedLocation}`)
    const expMatch = !selectedExp || offer.classList.contains(`exp-${selectedExp}`)

    if (techMatch && locationMatch && expMatch) {
      offer.classList.remove('hidden')
    } else {
      offer.classList.add('hidden')
    }
  })
}

techFilter.addEventListener('change', applyFilters)
locationFilter.addEventListener('change', applyFilters)
expFilter.addEventListener('change', applyFilters)

const JobOffer = document.getElementById('job-offer')
JobOffer.addEventListener('click', () => {
  window.open('./homework/detail.html', '_blank')
})