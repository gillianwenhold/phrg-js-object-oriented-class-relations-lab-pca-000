let store = {drivers: [], passengers: [], trips: []}
let driverID = 0
let passengerID = 0
let tripID = 0

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverID;
    store.drivers.push(this);
  }
  setTrip(trip) {
    this.tripId = trip.id
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    })
  }
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    })
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerID;
    store.passengers.push(this);
  }
  setTrip(trip) {
    this.tripId = trip.id
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    })
  }
  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    })
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripID;
    if (driver) {
      this.driverId = driver.id;
    }
    if (passenger) {
      this.passengerId = passenger.id;
    }
    store.trips.push(this);
  }
  driver() {
    return store.drivers.find(driver => {return driver.id === this.driverId });
  }
  passenger() {
    return store.passengers.find(passenger => {return passenger.id === this.passengerId });
  }
}
