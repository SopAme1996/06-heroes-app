import { heroes } from "../data/Heroes";

export const getHeroByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`publisher ${publisher} no es correcto`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};
