export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} HoloTicket. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/70 hover:text-white">Privacy</a>
            <a href="#" className="text-white/70 hover:text-white">Terms</a>
            <a href="#" className="text-white/70 hover:text-white">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
