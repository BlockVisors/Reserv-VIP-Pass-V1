export default function handler(req, res) {
  // get the tokenId from the query params
  const tokenId = req.query.tokenId;
  // As all the images are uploaded on github, we can extract the images from github directly.
  // const image_url =
  //   "https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/";

  const image_url = "https://raw.githubusercontent.com/BlockVisors/Reserv-VIP-Pass-V1/main/frontend/public/ReservVIP/1.svg";

  // The api is sending back metadata for a Crypto Dev
  // To make our collection compatible with Opensea, we need to follow some Metadata standards
  // when sending back the response from the api
  // More info can be found here: https://docs.opensea.io/docs/metadata-standards
  // res.status(200).json({
  //   name: "Reserv VIP Pass #" + tokenId,
  //   description: "The Reserv VIP program rewards early adoptors of our Platform",
  //   image: image_url + tokenId + ".svg",
  // });
   res.status(200).json({
    name: "Reserv VIP Pass #" + tokenId,
    description: "The Reserv VIP program rewards early adoptors of our Platform",
    image: image_url,
  });
}