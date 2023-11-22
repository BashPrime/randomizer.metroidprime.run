export default function Nav() {
  return (
    <nav className="bg-black w-full py-4 uppercase">
      {/* Container */}
      <div className="xl:container mx-auto flex flex-row justify-between items-center px-5">
        <h1 className="text-2xl font-medium">Metroid Prime Randomizer</h1>
        <ul className="flex flex-row gap-2">
          <li>Prime</li>
          <li>Echoes</li>
          <li>Corruption</li>
        </ul>
      </div>
    </nav>
  );
}
