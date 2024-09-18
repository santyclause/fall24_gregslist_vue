export class House {
  constructor(data) {
    this.id = data.id
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.price = data.price
    this.year = data.year
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.description = data.description || ''
  }
}


// createdAt
// : 
// "2023-10-10T22:48:23.198Z"
// creator
// : 
// {_id: '6525cefac22ddff8178f8c70', name: 'The Bob Barker', picture: 'https://pyxis.nymag.com/v1/imgs/030/bf6/e6774e1855…8270a84c7a6bd6aab-bob-barker.1x.rsquare.w1400.jpg', id: '6525cefac22ddff8178f8c70'}
// id
// : 
// "6525d4b732075d754277178b"
// updatedAt
// : 
// "2023-10-10T22:48:23.198Z"