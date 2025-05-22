export function Tampilin(belanjaan) {
  if (belanjaan.some(belanjaan => typeof belanjaan !== 'string')) {
      throw new Error('Error: Terdapat bukan String :(');
  }
  return belanjaan;
}
