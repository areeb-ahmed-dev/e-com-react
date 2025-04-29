export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white w-full py-6 mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-center">
          © {new Date().getFullYear()} ShopCart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}