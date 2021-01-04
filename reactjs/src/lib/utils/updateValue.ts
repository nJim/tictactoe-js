const updateValue = (boxId: any, player: any, values: any) => {
  const updated = [...values];
  updated[boxId] = player;
  return updated;
}

export default updateValue;
