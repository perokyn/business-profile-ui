const CardIDParser = (cardID) => {
  const regex = /(?<=\d{4})\d(?=\d{4})/gm;
  const subst = `X`;
  const id = cardID.replace(regex, subst);
  const parsedID = id.match(/.{1,4}/g);
  return parsedID;
};
export default CardIDParser;
