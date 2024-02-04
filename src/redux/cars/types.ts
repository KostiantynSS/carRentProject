interface Car {
  id:number, 
  year:number, 
  make:string, 
  model:string, 
  type:string, 
  img:string, 
  description:string, 
  fuelConsumption:string, 
  engineSize:string, 
  accessories:string[], 
  functionalities:string[], 
  rentalPrice:string, 
  rentalCompany:string, 
  address:string, 
  rentalConditions:string,
  mileage:number
}

interface InitialState {
favorites:Car[],
cars:Car[],
error:string,
isLoading:boolean
}


export type { InitialState, Car };
