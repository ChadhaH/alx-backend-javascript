export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const newbuf = new DataView(new ArrayBuffer(length), 0, length);
  newbuf.setInt8(position, value);
  return newbuf;
}
