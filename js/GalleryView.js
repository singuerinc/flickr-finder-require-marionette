define(['marionette', 'backbone', 'GalleryItemView'], function (Marionette, Backbone, GalleryItemView) {
  return Marionette.CollectionView.extend({

    // https://api.flickr.com/services/feeds/photos_public.gne?format=json

    tagName: 'ul',
    className: 'gallery-view',
    childView: GalleryItemView,
    collection: new Backbone.Collection()

  });
});


/*

 [
 {
 "_id": "53d3ba82bf9e2917267e283f",
 "src": "http://lorempixel.com/120/120/sports/1",
 "alt": "image"
 },
 {
 "_id": "53d3ba8227ec101650d464ce",
 "src": "http://lorempixel.com/120/120/nature/2",
 "alt": "image"
 },
 {
 "_id": "53d3ba82e94955c207e62390",
 "src": "http://lorempixel.com/120/120/sports/3",
 "alt": "image"
 },
 {
 "_id": "53d3ba8261cc1fbc69b87695",
 "src": "http://lorempixel.com/120/120/sports/4",
 "alt": "image"
 },
 {
 "_id": "53d3ba828a69932714184a79",
 "src": "http://lorempixel.com/120/120/nature/5",
 "alt": "image"
 },
 {
 "_id": "53d3ba821706083804519b8b",
 "src": "http://lorempixel.com/120/120/nature/6",
 "alt": "image"
 },
 {
 "_id": "53d3ba8226b7dbd3d7f6f884",
 "src": "http://lorempixel.com/120/120/fashion/7",
 "alt": "image"
 },
 {
 "_id": "53d3ba82225d136fc9229abd",
 "src": "http://lorempixel.com/120/120/sports/8",
 "alt": "image"
 },
 {
 "_id": "53d3ba821d3378da5ec3a03a",
 "src": "http://lorempixel.com/120/120/sports/9",
 "alt": "image"
 },
 {
 "_id": "53d3ba82b87f0c52f4439de8",
 "src": "http://lorempixel.com/120/120/nature/10",
 "alt": "image"
 },
 {
 "_id": "53d3ba820a00ddb0f038136a",
 "src": "http://lorempixel.com/120/120/fashion/1",
 "alt": "image"
 },
 {
 "_id": "53d3ba825e329838ded26f15",
 "src": "http://lorempixel.com/120/120/nature/2",
 "alt": "image"
 },
 {
 "_id": "53d3ba829b73f25c6468dd97",
 "src": "http://lorempixel.com/120/120/sports/3",
 "alt": "image"
 },
 {
 "_id": "53d3ba82bd40e2c432020704",
 "src": "http://lorempixel.com/120/120/fashion/4",
 "alt": "image"
 },
 {
 "_id": "53d3ba8298ec9e1a7465e20d",
 "src": "http://lorempixel.com/120/120/fashion/5",
 "alt": "image"
 },
 {
 "_id": "53d3ba82d0d0f1c99666edc4",
 "src": "http://lorempixel.com/120/120/nature/6",
 "alt": "image"
 },
 {
 "_id": "53d3ba8260ca2c8bd9a0f1c7",
 "src": "http://lorempixel.com/120/120/fashion/7",
 "alt": "image"
 },
 {
 "_id": "53d3ba823ae51c7d3c78c9be",
 "src": "http://lorempixel.com/120/120/nature/8",
 "alt": "image"
 },
 {
 "_id": "53d3ba8213e06799e4445320",
 "src": "http://lorempixel.com/120/120/sports/9",
 "alt": "image"
 },
 {
 "_id": "53d3ba8289000c4c0cc5324a",
 "src": "http://lorempixel.com/120/120/fashion/10",
 "alt": "image"
 },
 {
 "_id": "53d3ba82b183b04ed45d550f",
 "src": "http://lorempixel.com/120/120/nature/1",
 "alt": "image"
 },
 {
 "_id": "53d3ba828c5b1754151ccf2f",
 "src": "http://lorempixel.com/120/120/sports/2",
 "alt": "image"
 },
 {
 "_id": "53d3ba8291b75a651e65c374",
 "src": "http://lorempixel.com/120/120/sports/3",
 "alt": "image"
 },
 {
 "_id": "53d3ba8263c92c18845b4676",
 "src": "http://lorempixel.com/120/120/fashion/4",
 "alt": "image"
 },
 {
 "_id": "53d3ba82d49ccbcd7d23f7ba",
 "src": "http://lorempixel.com/120/120/sports/5",
 "alt": "image"
 },
 {
 "_id": "53d3ba82b5e2d80f47f1e1c6",
 "src": "http://lorempixel.com/120/120/fashion/6",
 "alt": "image"
 },
 {
 "_id": "53d3ba829ef8e32325b79368",
 "src": "http://lorempixel.com/120/120/sports/7",
 "alt": "image"
 },
 {
 "_id": "53d3ba82234f941bd87cc461",
 "src": "http://lorempixel.com/120/120/fashion/8",
 "alt": "image"
 },
 {
 "_id": "53d3ba8262982a91b55a99ea",
 "src": "http://lorempixel.com/120/120/fashion/9",
 "alt": "image"
 },
 {
 "_id": "53d3ba82c25f5dc197017c56",
 "src": "http://lorempixel.com/120/120/nature/10",
 "alt": "image"
 },
 {
 "_id": "53d3ba82bb723487aef64043",
 "src": "http://lorempixel.com/120/120/fashion/1",
 "alt": "image"
 },
 {
 "_id": "53d3ba822f8b4762afe40175",
 "src": "http://lorempixel.com/120/120/fashion/2",
 "alt": "image"
 },
 {
 "_id": "53d3ba82bb45fdf0e103c776",
 "src": "http://lorempixel.com/120/120/sports/3",
 "alt": "image"
 },
 {
 "_id": "53d3ba8277bbffb8266ff86a",
 "src": "http://lorempixel.com/120/120/nature/4",
 "alt": "image"
 },
 {
 "_id": "53d3ba82255a430d6dc5536b",
 "src": "http://lorempixel.com/120/120/nature/5",
 "alt": "image"
 },
 {
 "_id": "53d3ba825bf590334d1e4ad1",
 "src": "http://lorempixel.com/120/120/fashion/6",
 "alt": "image"
 },
 {
 "_id": "53d3ba82d207cefa9c490273",
 "src": "http://lorempixel.com/120/120/nature/7",
 "alt": "image"
 },
 {
 "_id": "53d3ba82a8b96913ae716dd7",
 "src": "http://lorempixel.com/120/120/nature/8",
 "alt": "image"
 },
 {
 "_id": "53d3ba821ea94326072437d4",
 "src": "http://lorempixel.com/120/120/nature/9",
 "alt": "image"
 },
 {
 "_id": "53d3ba82b3794cfb199ef47d",
 "src": "http://lorempixel.com/120/120/nature/10",
 "alt": "image"
 },
 {
 "_id": "53d3ba82f4e6c7f112c9c17c",
 "src": "http://lorempixel.com/120/120/nature/1",
 "alt": "image"
 },
 {
 "_id": "53d3ba8284e62e39404ae46f",
 "src": "http://lorempixel.com/120/120/nature/2",
 "alt": "image"
 },
 {
 "_id": "53d3ba826a76a5d031cf029a",
 "src": "http://lorempixel.com/120/120/fashion/3",
 "alt": "image"
 },
 {
 "_id": "53d3ba82fadaac3aee6bb90e",
 "src": "http://lorempixel.com/120/120/fashion/4",
 "alt": "image"
 },
 {
 "_id": "53d3ba8254d057ed6228ab6f",
 "src": "http://lorempixel.com/120/120/nature/5",
 "alt": "image"
 },
 {
 "_id": "53d3ba821f6775ab8a521f61",
 "src": "http://lorempixel.com/120/120/nature/6",
 "alt": "image"
 },
 {
 "_id": "53d3ba829376f52201715b7b",
 "src": "http://lorempixel.com/120/120/nature/7",
 "alt": "image"
 },
 {
 "_id": "53d3ba822a84cf36b0948fa9",
 "src": "http://lorempixel.com/120/120/sports/8",
 "alt": "image"
 },
 {
 "_id": "53d3ba82a7886521599ba200",
 "src": "http://lorempixel.com/120/120/nature/9",
 "alt": "image"
 },
 {
 "_id": "53d3ba82e928dab21e81ea81",
 "src": "http://lorempixel.com/120/120/fashion/10",
 "alt": "image"
 }
 ]

 */