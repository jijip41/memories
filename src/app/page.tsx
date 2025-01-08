import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen ">
      <main className="flex flex-col flex-grow bg-black text-white">
        {/* TODO: Create a Navbar component  */}
        <div className="flex justify-center gap-4">
          <div>Images</div>
          <div>Notes</div>
        </div>
        {/* TODO: Create a Map component  */}
        <div>Map goes here</div>
      </main>
      <footer className="flex w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <div className="text-white font-semibold ml-auto">Contact Me</div>
      </footer>
    </div>
  );
}
