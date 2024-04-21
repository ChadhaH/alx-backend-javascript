export default function getListStudentIds(myarray) {
  if (myarray instanceof Array) {
    return myarray.map((student) => student.id);
  }
  return [];
}
