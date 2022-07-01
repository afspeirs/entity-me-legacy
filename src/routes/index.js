import entities from '$lib/data/entities';

export async function get() {
  // console.log(entities);

  return {
    body: {
      entities,
    },
  };
}
