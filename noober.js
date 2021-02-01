function renderRide(ride) {
  let outputElement = document.querySelector('.rides')
  if (ride.length > 1) {
    outputElement.insertAdjacentHTML('beforeend', `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober Pool</span>
    </h1>
    `)
    for (let i=0; i< ride.length; i++) {
      let pool = ride[i]
      outputElement.insertAdjacentHTML('beforeend', `
      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${pool.passengerDetails.first} ${pool.passengerDetails.last}</h2>
            <p class="font-bold text-gray-600">${pool.passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${pool.numberOfPassengers}
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${pool.pickupLocation.address}</p>
            <p>${pool.pickupLocation.city}, ${pool.pickupLocation.state} ${pool.pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${pool.dropoffLocation.address}</p>
            <p>${pool.dropoffLocation.city}, ${pool.dropoffLocation.state} ${pool.dropoffLocation.zip}</p>
          </div>
        </div>
      </div>
      `)
    }
    
  }
  else{
    if (ride[0].purpleRequested) {
      outputElement.insertAdjacentHTML('beforeend', `
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>Noober Purple</span>
        </h1>
      `)
    
    }
    else if(ride[0].numberOfPassengers > 3){
      outputElement.insertAdjacentHTML('beforeend', `
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>Noober XL</span>
        </h1>
      `)
    }
    else {
      outputElement.insertAdjacentHTML('beforeend', `
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>Noober X</span>
        </h1>
      `)
    }
  outputElement.insertAdjacentHTML('beforeend', `
    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${ride[0].numberOfPassengers}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${ride[0].pickupLocation.address}</p>
          <p>${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${ride[0].dropoffLocation.address}</p>
          <p>${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
  `)
  }
}


async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  let ride = json
  
  // 🔥 start here: write code to loop through the rides
  for (let i=0; i<ride.length; i++) {
    renderRide(ride[i])
  }

  
}

window.addEventListener('DOMContentLoaded', pageLoaded)

