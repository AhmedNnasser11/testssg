import Image from "next/image";

export default async function Home() {
  // Fetch photos data
  const data = await fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .catch(error => {
      console.error("Error fetching data:", error);
      return []; // Return empty array if fetch fails
    });
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Photos</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(
          (photo: {
            albumId: number;
            id: number;
            title: string;
            url: string;
            thumbnailUrl: string;
          }) => (
            <li key={photo.id} className="border rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48 w-full bg-gray-200">
                {/* Using unoptimized placeholder images with next/image */}
                <Image 
                  src={photo.url}
                  alt={photo.title}
                  fill
                  unoptimized // Skip image optimization
                />
              </div>
              <div className="p-4">
                <Image
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  fill
                  className="rounded-lg"
                  unoptimized
                />
                <h2 className="text-lg font-semibold truncate">{photo.title}</h2>
                <p className="text-sm text-gray-500">Photo ID: {photo.id}</p>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}