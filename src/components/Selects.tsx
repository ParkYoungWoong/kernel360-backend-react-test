export default function Selects({ isFour }: { isFour: boolean }) {
  return (
    <>
      <select></select>
      <select></select>
      <select></select>
      <select></select>
      {!isFour && <select></select>}
    </>
  )
}
