export default function Footer({ items }) {
  if (!items.length) return <p className='footer'><em>Start Adding Some Items To Your Packing List 🚀</em> </p>;
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className='footer'>
      <em>
        {percentage === 100 ? 'You Got Everything! Ready To Go ✈' :
          `You Have ${numItems} items on your list, and you already packed ${numPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
