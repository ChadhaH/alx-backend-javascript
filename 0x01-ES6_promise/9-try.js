export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const resu = mathFunction();
    queue.push(resu);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
