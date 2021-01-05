const updateValue = (boxId: any, player: any, values: Array<string>) => {
  const updated = [...values];
  updated[boxId] = player;
  return updated;
}

export default updateValue;
