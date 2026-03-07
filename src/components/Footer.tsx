export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Yataro Fujinaga
        </p>
      </div>
    </footer>
  );
}
