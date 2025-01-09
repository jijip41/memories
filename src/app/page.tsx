import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen bg-black p-2">
      <main className="flex flex-col flex-grow  text-white">
        {/* TODO: Create a Navbar component  */}
        <div className="flex justify-center gap-4">
          <div>Images</div>
          <div>Notes</div>
        </div>
        {/* TODO: Create a Map component  */}
        <div>Map goes here</div>
      </main>
      <footer className="flex items-center w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 md:h-[10vh] p-4">
        <div className="text-white font-semibold ml-auto ">Contact Me</div>
      </footer>
    </div>
  );
}
